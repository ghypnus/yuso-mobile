/**
 * MutilDatePicker
 * @author john.gao
 */


import React from 'react';
import MultiPicker from '../picker/MultiPicker';
import Picker from '../picker/Picker';
import { Consumer } from '../locale-provider/HrContext';

// 递归筛选树
function arrayRecurrenceFilter(dateList, filterFn, options) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  let children = dateList || [];
  const result = [];
  let level = 0;
  var foundItem;
  do {
    var foundItem = children.filter((item) => filterFn(item, level))[0];
    if (!foundItem) {
      break;
    }
    result.push(foundItem);
    children = foundItem[options.childrenKeyName] || [];
    level += 1;
  } while (children.length > 0);
  return result;
}

export default class MutilDatePicker extends React.Component {
  static defaultProps = {
    prefixCls: 'wme-picker',
    cols: 3, // 列
    cascade: false, // 是否级联
    title: '', // 标题
    disabled: false, // 是否禁用
    onScrollChange() { },
    onChange(v, i) { },
  }


  constructor(props) {
    super(props);

    this.state = {
      value: this.getValue(),
    };

    this.scrollDateValue = null;
    this.scrollTimeValue = null;
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        // TODO 接收新值
        value: this.getValue(),
      });
    }
  }

  getValue() {
    let value = this.props.value || this.props.defaultValue;
    if (!value || !value.length) {
      value = [...this.getDefaultDateValue(), ...this.getDefaultTimeValue()];
    }
    return value;
  }

  getDefaultDateValue() {
    const date = new Date();
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  }

  getDefaultTimeValue() {
    const date = new Date();
    return [date.getHours(), date.getMinutes()];
  }

  setScrollValue(v, cascade) {
    if (cascade) {
      this.scrollDateValue = v;
    } else {
      this.scrollTimeValue = v;
    }
  }

  setCasecadeScrollValue = (v) => {
    if (v && this.scrollDateValue) {
      const length = this.scrollDateValue.length;
      if (length === v.length && this.scrollDateValue[length - 1] === v[length - 1]) {
        return;
      }
    }
    this.scrollDateValue = v;
  }

  onChange = (v, i, cascade) => {
    this.setScrollValue(v, cascade);
    if (this.props.onChange) {
      this.props.onChange(v, i);
    }
  }

  // 级联值改变
  onCasecadeValueChange = (value, index) => {
    const { cols } = this.props;
    const children = arrayRecurrenceFilter(this.props.dateList, (c, level) => level <= index && c.value === value[level]);
    let mData = children[index];
    let i;
    for (i = index + 1; mData && mData.children && mData.children.length && i < cols; i++) {
      mData = mData.children[0];
      value[i] = mData.value;
    }
    value.length = i;
    if (!('value' in this.props)) {
      const timeV = this.scrollTimeValue ? this.scrollTimeValue : this.getDefaultTimeValue();
      this.setState({
        value: [...value, ...timeV],
      });
    }
    this.onChange(value, index, true);
  }

  onValueChange(value, index) {
    if (!('value' in this.props)) {
      const mValue = this.props.value || this.props.defaultValue;
      const dateV = this.scrollDateValue ? this.scrollDateValue : mValue ? mValue.slice(0, 3) : this.getDefaultDateValue();
      this.setState({
        value: [...dateV, ...value],
      });
    }
    this.onChange(value, index, false);
  }

  // 获取普通列
  getPickerCol() {
    const { timeList } = this.props;
    return timeList.map((col, index) => (
      <Picker
        key={index}
        style={{ flex: 1 }}
      >
        {col.map((item) => (
          <Picker.Item
            key={item.value}
            value={item.value}
          >
            {item.label}
          </Picker.Item>
        ))}
      </Picker>
    ));
  }

  // 获取级联列
  getCascadeCols() {
    const { dateList, cols } = this.props;
    const { value } = this.state;
    const childrenTree = arrayRecurrenceFilter(dateList, (c, level) => c.value === value[level]).map((c) => c.children);

    const needPad = cols - childrenTree.length;
    if (needPad > 0) {
      for (let i = 0; i < needPad; i++) {
        childrenTree.push([]);
      }
    }
    childrenTree.length = cols - 1;
    childrenTree.unshift(dateList);
    return childrenTree.map((children = [], level) => (
      <Picker
        key={level}
        style={{ flex: 1 }}
      >
        {children.map((item) => (
          <Picker.Item
            value={item.value}
            key={item.value}
          >
            {item.label}
          </Picker.Item>
        ))}
      </Picker>
    ));
  }

  onOk(e) {
    let v;
    if (this.scrollDateValue !== null && this.scrollTimeValue !== null) {
      v = [...this.scrollDateValue, ...this.scrollTimeValue];
    } else {
      v = this.state.value;
    }
    if (this.props.onOk) {
      this.props.onOk(v);
    }
    e.preventDefault();
  }

  onCancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
    e.preventDefault();
  }

  render() {
    const { prefixCls, title, okText, cancelText, timeList, cascade } = this.props;
    const { value } = this.state;
    return <Consumer>
      {({ DatePicker }) => {
        return <div>
          <div className={`${prefixCls}-action`}>
            <div
              className={`${prefixCls}-action-cancel`}
              onClick={(e) => this.onCancel(e)}
            >
              {cancelText || DatePicker.cancel}
            </div>
            <div className={`${prefixCls}-action-title`}>
              {title}
            </div>
            <div
              className={`${prefixCls}-action-ok`}
              onClick={(e) => this.onOk(e)}
            >
              {okText || DatePicker.ok}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <MultiPicker
              style={{ flexGrow: 3 }}
              cascade
              selectedValue={value ? [value[0], value[1], value[2]] : []}
              onValueChange={(v, i) => this.onCasecadeValueChange(v, i)}
              onScrollChange={(v) => this.setCasecadeScrollValue(v)}
            >
              {this.getCascadeCols()}
            </MultiPicker>
            {timeList && (
              <MultiPicker
                style={{ flexGrow: 2 }}
                selectedValue={value ? [value[3], value[4]] : []}
                onValueChange={(v, i) => this.onValueChange(v, i)}
                onScrollChange={(v) => this.setScrollValue(v)}
              >
                {this.getPickerCol()}
              </MultiPicker>
            )}
          </div>
        </div>
      }}
    </Consumer>
  }
}

/**
 * WmePicker
 * @author john.gao
 */


import React from 'react';
import MultiPicker from './MultiPicker';
import Picker from './Picker';
import { Consumer } from '../locale-provider/HrContext';

// 递归筛选树
function arrayRecurrenceFilter(data, filterFn, options) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  let children = data || [];
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

export default class WmePicker extends React.Component {
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
      value: this.getValue(props.data, props.defaultValue || props.value),
    };

    this.scrollValue = null;
  }

  componentDidMount() { }

  // 组件接收新的props时触发，render时不触发
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: this.getValue(nextProps.data, nextProps.value),
      });
    }
  }

  getValue(d, val) {
    let data = d || this.props.data;
    let value = val || this.props.value || this.props.defaultValue;
    if (!value || !value.length) {
      value = [];
      if (this.props.cascade) {
        for (let i = 0; i < this.props.cols; i++) {
          if (data && data.length) {
            value[i] = data[0].value;
            data = data[0].children;
          }
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          value[i] = data[i][0] && data[i][0].value;
        }
      }
    }
    return value;
  }

  setScrollValue(v) {
    this.scrollValue = v;
  }

  setCasecadeScrollValue = (v) => {
    if (v && this.scrollValue) {
      const length = this.scrollValue.length;
      if (length === v.length && this.scrollValue[length - 1] === v[length - 1]) {
        return;
      }
    }
    this.setScrollValue(v);
  }

  onChange = (v, i) => {
    this.setScrollValue(v);
    if (this.props.onChange) {
      this.props.onChange(v, i);
    }
  }

  // 级联值改变
  onCasecadeValueChange = (value, index) => {
    const { cascade, cols } = this.props;
    const children = arrayRecurrenceFilter(this.props.data, (c, level) => level <= index && c.value === value[level]);
    let data = children[index];
    let i;
    for (i = index + 1; data && data.children && data.children.length && i < cols; i++) {
      data = data.children[0];
      value[i] = data.value;
    }
    value.length = i;
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    this.onChange(value, index);
  }

  onValueChange(value, index) {
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    this.onChange(value, index);
  }

  // 获取普通列
  getPickerCol() {
    const { data, disabled } = this.props;
    return data.map((col, index) => (
      <Picker
        key={index}
        disabled={disabled}
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
    const { data, cols, disabled } = this.props;
    const { value } = this.state;
    const childrenTree = arrayRecurrenceFilter(data, (c, level) => c.value === value[level]).map((c) => c.children);

    const needPad = cols - childrenTree.length;
    if (needPad > 0) {
      for (let i = 0; i < needPad; i++) {
        childrenTree.push([]);
      }
    }
    childrenTree.length = cols - 1;
    childrenTree.unshift(data);
    return childrenTree.map((children = [], level) => (
      <Picker
        key={level}
        style={{ flex: 1 }}
        disabled={disabled}
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
    if (this.scrollValue !== null) {
      v = this.scrollValue;
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
    const { prefixCls, title, okText, cancelText, cascade, ...restProps } = this.props;
    const { value } = this.state;
    return (
      <Consumer>
        {({ Picker }) => (
          <div>
            <div className={`${prefixCls}-action`}>
              <div
                className={`${prefixCls}-action-cancel`}
                onClick={(e) => this.onCancel(e)}
              >
                {cancelText || Picker.cancel}
              </div>
              <div className={`${prefixCls}-action-title`}>
                {title}
              </div>
              <div
                className={`${prefixCls}-action-ok`}
                onClick={(e) => this.onOk(e)}
              >
                {okText || Picker.ok}
              </div>
            </div>
            <MultiPicker
              {...restProps}
              cascade={cascade}
              selectedValue={value}
              onValueChange={(v, i) => {
                cascade ? this.onCasecadeValueChange(v, i) : this.onValueChange(v, i);
              }}
              onScrollChange={(v) => {
                cascade ? this.setCasecadeScrollValue(v) : this.setScrollValue(v);
              }}
            >
              {cascade ? this.getCascadeCols() : this.getPickerCol()}
            </MultiPicker>
          </div>
        )}
      </Consumer>
    );
  }
}

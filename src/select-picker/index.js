import React from 'react';
import classnames from 'classnames';
import isArray from 'lodash/isArray';
import YusoPicker from '../picker/index';
import PopLayer from '../pop-layer/index';
import Icon from '../icon/index';
import { isEmpty } from '../_utils/data_util';
import { Consumer } from '../locale-provider/HrContext';

const SHOW_ALL = 'SHOW_ALL';
const SHOW_CHILD = 'SHOW_CHILD';

class SelectPicker extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-select-picker',
    arrow: 'horizontal',
    showSelectedType: SHOW_ALL,
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      useDefaultValue: true, // 是否使用默认值
    };
  }

  /**
   * 获取值
   * @param {Any} value 值
   */
  getValue(value) {
    let { useDefaultValue } = this.state;
    let { defaultValue } = this.props;
    if (value) {
      if (typeof value === 'string' || typeof value === 'number') {
        return [value];
      }
      return value;
    }
    return useDefaultValue ? defaultValue : null;
  }

  /**
   * 递归获取值数组
   * @param  {array} list   树型数组
   * @param {Any} val 值
   * @param  {number} level 层级
   * @return {Array}        数组
   */
  recurrenceFilter(list, val, level) {
    let value = this.getValue(val);
    if (!value || !value[level]) return;

    if (list && list.length > 0) {
      const data = list.find((item) => item.value === value[level]);
      if (data) {
        this.selectedValues.push(data);
      }
      if (data.children) {
        this.recurrenceFilter(data.children, value, ++level);
      }
    }
  }

  /**
   * 获取选中的值
   * @param {Any} value 当前选中的值
   */
  getSelectedValues(value) {
    const { data = [], cascade } = this.props;
    if (cascade) {
      this.selectedValues = [];
      this.recurrenceFilter(data, value, 0);
    } else {
      this.selectedValues = data.length > 1 ? [] : {};
      data.map((array, index) => {
        const item = array.find((o) => {
          if (isArray(value)) {
            return value[index] === o.value;
          }
          return value === o.value;
        });
        if (item) {
          if (data.length > 1) {
            this.selectedValues.push(item);
          } else {
            this.selectedValues = item;
          }
        }
      });
    }
    return this.selectedValues;
  }

  /**
   * 获取显示名称
   * @param {Any} selectedValues
   */
  getSelectedLabels(selectedValues) {
    const { sign, showSelectedType } = this.props;
    let result = '';
    if (isArray(selectedValues)) {
      switch (showSelectedType) {
        case SHOW_ALL:
          result = selectedValues.map((item) => item.label).join(sign);
          break;
        case SHOW_CHILD:
          result = !isEmpty(selectedValues) ? selectedValues[selectedValues.length - 1].label : '';
          break;
        default:
          break;
      }
    } else {
      result = selectedValues.label;
    }
    return result;
  }

  /**
   * 渲染组件后缀图标
   */
  renderSuffixIcon() {
    const { useDefaultValue } = this.state;
    const { prefixCls, value, disabled, close, readOnly, arrow, onOk, onReset } = this.props;
    // 箭头方向
    const arrowCls = classnames(`${prefixCls}-arrow`, {
      [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
      [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
      [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
    });
    const defaultValue = useDefaultValue ? this.props.defaultValue : null;
    const allowClear = !disabled && !readOnly && close && !isEmpty(value || defaultValue);
    if (allowClear) {
      return (
        <Icon
          className={`${prefixCls}-close`}
          type="delete_fill"
          onClick={(e) => {
            document.activeElement.blur();
            e.stopPropagation();
            const resetVal = Array.isArray(this.props.value) ? [] : '';
            this.setState({
              useDefaultValue: false,
            });
            onReset && onReset(resetVal);
            onOk && onOk(resetVal);
          }}
        />
      );
    }
    return <Icon type="enter" size="small" className={arrowCls} />;
  }

  render() {
    const {
      prefixCls,
      className,
      value,
      title,
      pickerTitle,
      disabled,
      readOnly,
      style,
      ismust,
      cascade,
      data,
      onChange,
      onOk,
      onCancel,
      cols,
      placeholder,
    } = this.props;
    const { useDefaultValue } = this.state;
    let defaultValue = useDefaultValue ? this.props.defaultValue : null;
    const selectedValues = this.getSelectedValues(value || defaultValue);
    const labels = this.getSelectedLabels(selectedValues);

    const wrapperCls = classnames(prefixCls, className, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-read-only`]: readOnly,
    });
    return (
      <Consumer>
        {({ SelectPicker }) => (
          <div
            className={wrapperCls}
            style={style}
          >
            <div className={`${prefixCls}-area`}
              onClick={() => {
                if (!disabled && !readOnly) {
                  this.setState({
                    visible: true,
                  });
                }
              }}
            >
              <div className={`${prefixCls}-title`}>
                <span>{ismust ? '*' : ''}</span>
                {title}
              </div>
              <div className={`${prefixCls}-content`}>
                {!isEmpty(selectedValues) ? labels
                  : <span className={`${prefixCls}-place-holder`}>{placeholder}</span>}
              </div>
              {this.renderSuffixIcon()}
            </div>
            <PopLayer
              visible={this.state.visible}
              direction="bottom"
            >
              <YusoPicker
                title={pickerTitle || SelectPicker.pickerTitle}
                defaultValue={this.getValue(value)}
                cascade={cascade}
                data={data}
                onChange={onChange}
                cols={cols}
                onOk={(val) => {
                  this.setState({
                    visible: false,
                    useDefaultValue: true,
                  });
                  if (onOk) {
                    onOk(val, this.getSelectedValues(val));
                  }
                }}
                onCancel={() => {
                  this.setState({
                    visible: false,
                  });
                  if (onCancel) {
                    onCancel();
                  }
                }}
              />
            </PopLayer>
          </div>
        )}
      </Consumer>
    );
  }
}

SelectPicker.SHOW_ALL = SHOW_ALL;
SelectPicker.SHOW_CHILD = SHOW_CHILD;

export default SelectPicker;

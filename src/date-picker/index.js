import React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import YusoPicker from '../picker/index';
import MutilDatePicker from './MutilDatePicker';
import PopLayer from '../pop-layer/index';
import Icon from '../icon/index';
import { isEmpty } from '../_utils/data_util';
import { Consumer } from '../locale-provider/HrContext';

export default class DatePicker extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-date-picker',
    arrow: 'horizontal',
    yearStep: 100, // 取前后100年的日期
  }

  constructor(props) {
    super(props);
    this.yearMonthList = this.getYearMonthList();
    this.dateList = this.getDateList();
    this.timeList = this.getTimeList();
    this.secondList = this.getSecondList();
    this.state = {
      visible: false,
    };
  }

  getValue(value) {
    const { type } = this.props;
    if (typeof value === 'string' && !!value) {
      let date = new Date();
      try {
        switch (type) {
          case 'yyyy/MM/dd HH:mm':
            date = new Date(this.format(new Date(value.replace(/\-/g, '/')), type));
            value = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()];
            break;
          case 'yyyy/MM/dd':
            date = new Date(this.format(new Date(value.replace(/\-/g, '/')), type));
            value = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
            break;
          case 'yyyy/MM':
            date = new Date(this.format(new Date(value.replace(/\-/g, '/')), type));
            value = [date.getFullYear(), date.getMonth() + 1];
            break;
          case 'HH:mm:ss':
            date = moment(value, type);
            if (date.isValid()) value = date.format(type);
            value = [parseInt(value.split(':')[0]), parseInt(value.split(':')[1]), parseInt(value.split(':')[2])];
            break;
          case 'HH:mm':
            date = moment(value, type);
            if (date.isValid()) value = date.format(type);
            value = [parseInt(value.split(':')[0]), parseInt(value.split(':')[1])];
            break;
          default:
            break;
        }
      } catch (e) {
        console.log(e);
      }
    }
    return value;
  }

  _getContent() {
    const { type, onOk, onCancel, pickerTitle, data, fn } = this.props;
    if (!this.state.visible) {
      return null;
    }
    return (
      <Consumer>
        {({ DatePicker }) => {
          document.activeElement.blur();
          fn && fn();
          const value = this.getValue(this.props.value);
          const _pickerTitle = pickerTitle || DatePicker.pickerTitle;
          let content;
          const date = new Date();
          const defaultDateV = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
          const defaultYearMonthV = [date.getFullYear(), date.getMonth() + 1];
          const defaultTimeV = [date.getHours(), date.getMinutes()];
          const defaultSecondV = [date.getHours(), date.getMinutes(), date.getSeconds()];
          switch (type) {
            case 'yyyy/MM/dd HH:mm':
              content = (
                <MutilDatePicker
                  title={_pickerTitle}
                  defaultValue={value || defaultDateV.concat(defaultTimeV)}
                  cascade
                  dateList={this.dateList}
                  timeList={this.timeList}
                  onOk={(value) => {
                    this.setState({
                      visible: false,
                    });
                    if (onOk) {
                      onOk(value);
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
              );
              break;
            case 'yyyy/MM/dd':
              content = (
                <yusoPicker
                  title={_pickerTitle}
                  defaultValue={value || defaultDateV}
                  cascade
                  data={this.dateList}
                  onOk={(value) => {
                    this.setState({
                      visible: false,
                    });
                    if (onOk) {
                      onOk(value);
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
              );
              break;
            case 'yyyy/MM':
              content = (
                <yusoPicker
                  title={_pickerTitle}
                  defaultValue={value || defaultYearMonthV}
                  data={this.yearMonthList}
                  onOk={(value) => {
                    this.setState({
                      visible: false,
                    });
                    if (onOk) {
                      onOk(value);
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
              );
              break;
            case 'HH:mm:ss':
              content = (
                <yusoPicker
                  title={_pickerTitle}
                  defaultValue={value || defaultSecondV}
                  data={this.secondList}
                  onOk={(value) => {
                    this.setState({
                      visible: false,
                    });
                    if (onOk) {
                      onOk(value);
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
              );
              break;
            case 'HH:mm':
              content = (
                <yusoPicker
                  title={_pickerTitle}
                  defaultValue={value || defaultTimeV}
                  data={this.timeList}
                  onOk={(value) => {
                    this.setState({
                      visible: false,
                    });
                    if (onOk) {
                      onOk(value);
                    }
                  }}
                  onCancel={(value) => {
                    this.setState({
                      visible: false,
                    });
                    if (onCancel) {
                      onCancel();
                    }
                  }}
                />
              );
              break;
            default:
              content = (
                <yusoPicker
                  title={_pickerTitle}
                  value={value}
                  data={data}
                  onOk={(value) => {
                    this.setState({
                      visible: false,
                    });
                    if (onOk) {
                      onOk(value);
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
              );
              break;
          }
          return content;
        }}
      </Consumer>
    );
  }

  getTimeList() {
    let h = 0;
    let m = 0;
    return [
      Array.from({
        length: 24,
      }, () => {
        const value = h++;
        return {
          value,
          label: value < 10 ? `0${value}` : value,
        };
      }),
      Array.from({
        length: 60,
      }, () => {
        const value = m++;
        return {
          value,
          label: value < 10 ? `0${value}` : value,
        };
      }),
    ];
  }

  getSecondList() {
    let h = 0;
    let m = 0;
    let s = 0;
    return [
      Array.from({
        length: 24,
      }, () => {
        const value = h++;
        return {
          value,
          label: value < 10 ? `0${value}` : value,
        };
      }),
      Array.from({
        length: 60,
      }, () => {
        const value = m++;
        return {
          value,
          label: value < 10 ? `0${value}` : value,
        };
      }),
      Array.from({
        length: 60,
      }, () => {
        const value = s++;
        return {
          value,
          label: value < 10 ? `0${value}` : value,
        };
      }),
    ];
  }

  getYearMonthList() {
    const { yearStep } = this.props;
    const year = new Date().getFullYear();
    const array = Array(yearStep * 2 + 1).fill('');
    const yearList = array.map((item, i) => {
      item = year - yearStep + i;
      return {
        value: item,
        label: item,
      };
    });
    return [yearList, this.getMonthList()];
  }

  getDateList() {
    const { yearStep } = this.props;
    const year = new Date().getFullYear();
    const array = Array(yearStep * 2 + 1).fill('');
    return array.map((item, i) => {
      item = year - yearStep + i;
      return {
        value: item,
        label: item,
        children: this.getMonthAndDayList(item),
      };
    });
  }

  getMonthList() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => ({
      value: item,
      label: item < 10 ? `0${item}` : item,
    }));
  }

  getMonthAndDayList(year) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => ({
      value: item,
      label: item < 10 ? `0${item}` : item,
      children: this.getDayList(year, item),
    }));
  }

  getDayList(year, month) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (((year) % 4 == 0 && (year) % 100 != 0) || (year) % 400 == 0) {
      days[1]++;
    }
    const array = [];
    for (let i = 1; i <= days[parseInt(month) - 1]; i++) {
      array.push(i);
    }
    return array.map((item) => ({
      value: item,
      label: item < 10 ? `0${item}` : item,
    }));
  }

  /**
   * 递归获取值数组
   * @param  {array} list   树型数组
   * @param  {number} level 层级
   * @return {Array}        数组
   */
  recurrenceFilter(list, level) {
    const value = this.getValue(this.props.value);

    if (!value || !value[level]) return;

    if (list) {
      const obj = list.find((item) => item.value === value[level]);
      if (obj) {
        this.labels.push(obj.label);
        if (obj.children) {
          this.recurrenceFilter(obj.children, ++level);
        }
      }
    }
  }

  arrayFilter(list, value) {
    if (!list) return null;
    const labels = [];
    list.map((array, index) => {
      const item = array.find((item) => value && item.value === value[index]);
      if (item) labels.push(item.label);
    });
    return labels;
  }

  format(d, format) {
    const o = {
      'M+': d.getMonth() + 1, // month
      'd+': d.getDate(), // day
      'H+': d.getHours(), // hour
      'm+': d.getMinutes(), // minute
      's+': d.getSeconds(), // second
      'q+': Math.floor((d.getMonth() + 3) / 3), // quarter
      S: d.getMilliseconds(), // millisecond
    };

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (`${d.getFullYear()}`).substr(4 - RegExp.$1.length));
    }

    for (const k in o) {
      if (new RegExp(`(${k})`).test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : (`00${o[k]}`).substr((`${o[k]}`).length));
      }
    }
    return format;
  }

  resetValue() {
    const { onReset } = this.props;
    onReset && onReset('');
  }

  /**
   * 渲染组件后缀图标
   */
  renderSuffixIcon() {
    const { prefixCls, disabled, readOnly, arrow, onOk, onReset } = this.props;
    const value = this.getValue(this.props.value);
    // 箭头方向
    const arrowCls = classnames(`${prefixCls}-arrow`, {
      [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
      [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
      [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
    });
    const needClose = !disabled && !readOnly && close && value && value.length > 0;
    if (needClose) {
      return (
        <Icon
          className={`${prefixCls}-close`}
          type="delete_fill"
          onClick={(e) => {
            e.stopPropagation();
            onReset && onReset('');
            onOk && onOk('');
          }}
        />
      );
    }
    return !disabled && !readOnly ? (
      <Icon
        type="time"
        size="small"
        className={arrowCls}
      />
    ) : null;
  }

  render() {
    const { prefixCls, className, title, type, disabled, readOnly, placeholder, style, ismust } = this.props;

    this.labels = [];
    let showLabel = '';
    const value = this.getValue(this.props.value);

    switch (type) {
      case 'yyyy/MM':
        const yearMonthLabels = this.arrayFilter(this.yearMonthList, value);
        showLabel = yearMonthLabels && yearMonthLabels.join('-');
        break;
      case 'yyyy/MM/dd':
        this.recurrenceFilter(this.dateList, 0);
        showLabel = this.labels && this.labels.join('-');
        break;
      case 'HH:mm:ss':
        const secondLabels = this.arrayFilter(this.secondList, value);
        showLabel = secondLabels && secondLabels.join(':');
        break;
      case 'HH:mm':
        const timeLabels = this.arrayFilter(this.timeList, value);
        showLabel = timeLabels && timeLabels.join(':');
        break;
      case 'yyyy/MM/dd HH:mm':
        this.recurrenceFilter(this.dateList, 0);
        const mTimeLabels = this.arrayFilter(this.timeList, value ? [value[3], value[4]] : []);
        if (this.labels && mTimeLabels) {
          showLabel = `${this.labels.join('-')} ${mTimeLabels.join(':')}`;
        }
        break;
      default:
        showLabel = value;
        break;
    }

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-read-only`]: readOnly,
    });

    return (
      <div
        className={wrapCls}
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
            {!isEmpty(value) ? showLabel
              : <span className={`${prefixCls}-place-holder`}>{placeholder}</span>}
          </div>
          {this.renderSuffixIcon()}
        </div>
        <PopLayer
          direction="bottom"
          visible={this.state.visible}
        >
          {this._getContent()}
        </PopLayer>
      </div>
    );
  }
}

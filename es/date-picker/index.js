function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import YusoPicker from '../picker/index';
import MutilDatePicker from './MutilDatePicker';
import PopLayer from '../pop-layer/index';
import Icon from '../icon/index';
import { isEmpty } from '../_utils/data_util';
import { Consumer } from '../locale-provider/HrContext';

var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);
    _this.yearMonthList = _this.getYearMonthList();
    _this.dateList = _this.getDateList();
    _this.timeList = _this.getTimeList();
    _this.secondList = _this.getSecondList();
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(DatePicker, [{
    key: "getValue",
    value: function getValue(value) {
      var type = this.props.type;

      if (typeof value === 'string' && !!value) {
        var date = new Date();

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
  }, {
    key: "_getContent",
    value: function _getContent() {
      var _this2 = this;

      var _this$props = this.props,
          type = _this$props.type,
          _onOk = _this$props.onOk,
          _onCancel = _this$props.onCancel,
          pickerTitle = _this$props.pickerTitle,
          data = _this$props.data,
          fn = _this$props.fn;

      if (!this.state.visible) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Consumer, null, function (_ref) {
        var DatePicker = _ref.DatePicker;
        document.activeElement.blur();
        fn && fn();

        var value = _this2.getValue(_this2.props.value);

        var _pickerTitle = pickerTitle || DatePicker.pickerTitle;

        var content;
        var date = new Date();
        var defaultDateV = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
        var defaultYearMonthV = [date.getFullYear(), date.getMonth() + 1];
        var defaultTimeV = [date.getHours(), date.getMinutes()];
        var defaultSecondV = [date.getHours(), date.getMinutes(), date.getSeconds()];

        switch (type) {
          case 'yyyy/MM/dd HH:mm':
            content = /*#__PURE__*/React.createElement(MutilDatePicker, {
              title: _pickerTitle,
              defaultValue: value || defaultDateV.concat(defaultTimeV),
              cascade: true,
              dateList: _this2.dateList,
              timeList: _this2.timeList,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel() {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;

          case 'yyyy/MM/dd':
            content = /*#__PURE__*/React.createElement("yusoPicker", {
              title: _pickerTitle,
              defaultValue: value || defaultDateV,
              cascade: true,
              data: _this2.dateList,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel() {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;

          case 'yyyy/MM':
            content = /*#__PURE__*/React.createElement("yusoPicker", {
              title: _pickerTitle,
              defaultValue: value || defaultYearMonthV,
              data: _this2.yearMonthList,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel() {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;

          case 'HH:mm:ss':
            content = /*#__PURE__*/React.createElement("yusoPicker", {
              title: _pickerTitle,
              defaultValue: value || defaultSecondV,
              data: _this2.secondList,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel() {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;

          case 'HH:mm':
            content = /*#__PURE__*/React.createElement("yusoPicker", {
              title: _pickerTitle,
              defaultValue: value || defaultTimeV,
              data: _this2.timeList,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel(value) {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;

          default:
            content = /*#__PURE__*/React.createElement("yusoPicker", {
              title: _pickerTitle,
              value: value,
              data: data,
              onOk: function onOk(value) {
                _this2.setState({
                  visible: false
                });

                if (_onOk) {
                  _onOk(value);
                }
              },
              onCancel: function onCancel() {
                _this2.setState({
                  visible: false
                });

                if (_onCancel) {
                  _onCancel();
                }
              }
            });
            break;
        }

        return content;
      });
    }
  }, {
    key: "getTimeList",
    value: function getTimeList() {
      var h = 0;
      var m = 0;
      return [Array.from({
        length: 24
      }, function () {
        var value = h++;
        return {
          value: value,
          label: value < 10 ? "0".concat(value) : value
        };
      }), Array.from({
        length: 60
      }, function () {
        var value = m++;
        return {
          value: value,
          label: value < 10 ? "0".concat(value) : value
        };
      })];
    }
  }, {
    key: "getSecondList",
    value: function getSecondList() {
      var h = 0;
      var m = 0;
      var s = 0;
      return [Array.from({
        length: 24
      }, function () {
        var value = h++;
        return {
          value: value,
          label: value < 10 ? "0".concat(value) : value
        };
      }), Array.from({
        length: 60
      }, function () {
        var value = m++;
        return {
          value: value,
          label: value < 10 ? "0".concat(value) : value
        };
      }), Array.from({
        length: 60
      }, function () {
        var value = s++;
        return {
          value: value,
          label: value < 10 ? "0".concat(value) : value
        };
      })];
    }
  }, {
    key: "getYearMonthList",
    value: function getYearMonthList() {
      var yearStep = this.props.yearStep;
      var year = new Date().getFullYear();
      var array = Array(yearStep * 2 + 1).fill('');
      var yearList = array.map(function (item, i) {
        item = year - yearStep + i;
        return {
          value: item,
          label: item
        };
      });
      return [yearList, this.getMonthList()];
    }
  }, {
    key: "getDateList",
    value: function getDateList() {
      var _this3 = this;

      var yearStep = this.props.yearStep;
      var year = new Date().getFullYear();
      var array = Array(yearStep * 2 + 1).fill('');
      return array.map(function (item, i) {
        item = year - yearStep + i;
        return {
          value: item,
          label: item,
          children: _this3.getMonthAndDayList(item)
        };
      });
    }
  }, {
    key: "getMonthList",
    value: function getMonthList() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (item) {
        return {
          value: item,
          label: item
        };
      });
    }
  }, {
    key: "getMonthAndDayList",
    value: function getMonthAndDayList(year) {
      var _this4 = this;

      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (item) {
        return {
          value: item,
          label: item,
          children: _this4.getDayList(year, item)
        };
      });
    }
  }, {
    key: "getDayList",
    value: function getDayList(year, month) {
      var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        days[1]++;
      }

      var array = [];

      for (var i = 1; i <= days[parseInt(month) - 1]; i++) {
        array.push(i);
      }

      return array.map(function (item) {
        return {
          value: item,
          label: item
        };
      });
    }
    /**
     * 递归获取值数组
     * @param  {array} list   树型数组
     * @param  {number} level 层级
     * @return {Array}        数组
     */

  }, {
    key: "recurrenceFilter",
    value: function recurrenceFilter(list, level) {
      var value = this.getValue(this.props.value);
      if (!value || !value[level]) return;

      if (list) {
        var obj = list.find(function (item) {
          return item.value === value[level];
        });

        if (obj) {
          this.labels.push(obj.label);

          if (obj.children) {
            this.recurrenceFilter(obj.children, ++level);
          }
        }
      }
    }
  }, {
    key: "arrayFilter",
    value: function arrayFilter(list, value) {
      if (!list) return null;
      var labels = [];
      list.map(function (array, index) {
        var item = array.find(function (item) {
          return value && item.value === value[index];
        });
        if (item) labels.push(item.label);
      });
      return labels;
    }
  }, {
    key: "format",
    value: function format(d, _format) {
      var o = {
        'M+': d.getMonth() + 1,
        // month
        'd+': d.getDate(),
        // day
        'H+': d.getHours(),
        // hour
        'm+': d.getMinutes(),
        // minute
        's+': d.getSeconds(),
        // second
        'q+': Math.floor((d.getMonth() + 3) / 3),
        // quarter
        S: d.getMilliseconds() // millisecond

      };

      if (/(y+)/.test(_format)) {
        _format = _format.replace(RegExp.$1, "".concat(d.getFullYear()).substr(4 - RegExp.$1.length));
      }

      for (var k in o) {
        if (new RegExp("(".concat(k, ")")).test(_format)) {
          _format = _format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : "00".concat(o[k]).substr("".concat(o[k]).length));
        }
      }

      return _format;
    }
  }, {
    key: "resetValue",
    value: function resetValue() {
      var onReset = this.props.onReset;
      onReset && onReset('');
    }
    /**
     * 渲染组件后缀图标
     */

  }, {
    key: "renderSuffixIcon",
    value: function renderSuffixIcon() {
      var _classnames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          arrow = _this$props2.arrow,
          onOk = _this$props2.onOk,
          onReset = _this$props2.onReset;
      var value = this.getValue(this.props.value); // 箭头方向

      var arrowCls = classnames("".concat(prefixCls, "-arrow"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-arrow-horizontal"), arrow === 'horizontal'), _defineProperty(_classnames, "".concat(prefixCls, "-arrow-vertical"), arrow === 'down' || arrow === 'up'), _defineProperty(_classnames, "".concat(prefixCls, "-arrow-vertical-up"), arrow === 'up'), _classnames));
      var needClose = !disabled && !readOnly && close && value && value.length > 0;

      if (needClose) {
        return /*#__PURE__*/React.createElement(Icon, {
          className: "".concat(prefixCls, "-close"),
          type: "delete_fill",
          onClick: function onClick(e) {
            e.stopPropagation();
            onReset && onReset('');
            onOk && onOk('');
          }
        });
      }

      return !disabled && !readOnly ? /*#__PURE__*/React.createElement(Icon, {
        type: "time",
        size: "small",
        className: arrowCls
      }) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          title = _this$props3.title,
          type = _this$props3.type,
          disabled = _this$props3.disabled,
          readOnly = _this$props3.readOnly,
          placeholder = _this$props3.placeholder,
          style = _this$props3.style,
          ismust = _this$props3.ismust;
      this.labels = [];
      var showLabel = '';
      var value = this.getValue(this.props.value);

      switch (type) {
        case 'yyyy/MM':
          var yearMonthLabels = this.arrayFilter(this.yearMonthList, value);
          showLabel = yearMonthLabels && yearMonthLabels.join('-');
          break;

        case 'yyyy/MM/dd':
          this.recurrenceFilter(this.dateList, 0);
          showLabel = this.labels && this.labels.join('-');
          break;

        case 'HH:mm:ss':
          var secondLabels = this.arrayFilter(this.secondList, value);
          showLabel = secondLabels && secondLabels.join(':');
          break;

        case 'HH:mm':
          var timeLabels = this.arrayFilter(this.timeList, value);
          showLabel = timeLabels && timeLabels.join(':');
          break;

        case 'yyyy/MM/dd HH:mm':
          this.recurrenceFilter(this.dateList, 0);
          var mTimeLabels = this.arrayFilter(this.timeList, value ? [value[3], value[4]] : []);

          if (this.labels && mTimeLabels) {
            showLabel = "".concat(this.labels.join('-'), " ").concat(mTimeLabels.join(':'));
          }

          break;

        default:
          showLabel = value;
          break;
      }

      var wrapCls = classnames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-read-only"), readOnly));
      return /*#__PURE__*/React.createElement("div", {
        className: wrapCls,
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-area"),
        onClick: function onClick() {
          if (!disabled && !readOnly) {
            _this5.setState({
              visible: true
            });
          }
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/React.createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, !isEmpty(value) ? showLabel : /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-place-holder")
      }, placeholder)), this.renderSuffixIcon()), /*#__PURE__*/React.createElement(PopLayer, {
        direction: "bottom",
        visible: this.state.visible
      }, this._getContent()));
    }
  }]);

  return DatePicker;
}(React.Component);

_defineProperty(DatePicker, "defaultProps", {
  prefixCls: 'yuso-date-picker',
  arrow: 'horizontal',
  yearStep: 100 // 取前后100年的日期

});

export { DatePicker as default };
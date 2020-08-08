"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _moment = _interopRequireDefault(require("moment"));

var _index = _interopRequireDefault(require("../checkbox/index"));

var _index2 = _interopRequireDefault(require("../icon/index"));

var _index3 = _interopRequireDefault(require("../list/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var Calendar = /*#__PURE__*/function (_React$Component) {
  _inherits(Calendar, _React$Component);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);
    _this.state = {
      currentDate: (0, _moment["default"])()
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      this.valueChange(value);
    }
  }, {
    key: "valueChange",
    value: function valueChange(value) {
      var _this2 = this;

      var currentDate = value ? (0, _moment["default"])(value) : (0, _moment["default"])();
      this.setState({
        currentDate: currentDate
      }, function () {
        var days = _this2.getDaysData();

        _this2.setState({
          days: days
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value && (!prevProps.value || (0, _moment["default"])(prevProps.value).valueOf() != (0, _moment["default"])(this.props.value).valueOf())) {
        this.valueChange(this.props.value);
      }
    }
    /**
     * 产生数组
     */

  }, {
    key: "rangeArr",
    value: function rangeArr(n) {
      return Array.apply(null, {
        length: n
      }).map(function (_, n) {
        return n;
      });
    }
    /**
     * 返回当月第一天周几
     */

  }, {
    key: "getFirstDayOfMonth",
    value: function getFirstDayOfMonth(date) {
      return date.startOf('month').day();
    }
    /**
     * 返回上月最后几天
     */

  }, {
    key: "getPrevMonthLastDays",
    value: function getPrevMonthLastDays(date, amount) {
      if (amount <= 0) return [];
      var temp = new Date(date.valueOf());
      temp.setDate(0);
      var lastDay = temp.getDate();
      return this.rangeArr(amount).map(function (_, index) {
        return lastDay - (amount - index - 1);
      });
    }
    /**
     * 返回当月日期数组
     */

  }, {
    key: "getMonthDays",
    value: function getMonthDays(date) {
      var days = date.endOf('month').date();
      return this.rangeArr(days).map(function (_, index) {
        return index + 1;
      });
    }
    /**
     * 返回星期
     */

  }, {
    key: "getWeek",
    value: function getWeek(_ref) {
      var text = _ref.text,
          type = _ref.type;
      var date = this.getFormateDate(text, type);
      return this.props.week[(0, _moment["default"])(date).format('E') - 1];
    }
    /**
     * 生成多维数组
     */

  }, {
    key: "toNestedArr",
    value: function toNestedArr(days) {
      return this.rangeArr(days.length / 7).map(function (_, index) {
        var start = index * 7;
        return days.slice(start, start + 7);
      });
    }
    /**
     * 返回当月面板日历数据
     */

  }, {
    key: "getDaysData",
    value: function getDaysData() {
      var onlyCurrentMonth = this.props.onlyCurrentMonth;
      var currentDate = this.state.currentDate;
      currentDate = currentDate.clone(); // 获取当月第一天

      var firstDay = this.getFirstDayOfMonth(currentDate); // 根据当月第一天计算当月中上个月显示几天

      var prevMonthDays = this.getPrevMonthLastDays(currentDate, firstDay - 1).map(function (day) {
        return {
          text: !onlyCurrentMonth && day,
          type: 'prev'
        };
      }); // 获取本月多少天

      var currentMonthDays = this.getMonthDays(currentDate).map(function (day) {
        return {
          text: day,
          type: 'current'
        };
      });
      var days = [].concat(_toConsumableArray(prevMonthDays), _toConsumableArray(currentMonthDays)); //下月天数=42-上月-当月

      var nextNum = 42 - days.length;

      if (!!onlyCurrentMonth && nextNum > 6) {
        nextNum = nextNum - 7;
      }

      var nextMonthDays = this.rangeArr(nextNum).map(function (_, index) {
        return {
          text: !onlyCurrentMonth && index + 1,
          type: 'next'
        };
      }); // 连起来共多少天

      days = days.concat(nextMonthDays);
      return days;
    }
    /**
     * 返回格式化日期
     */

  }, {
    key: "getFormateDate",
    value: function getFormateDate(day, type) {
      if (!day || ['prev', 'current', 'next'].indexOf(type) === -1) {
        return;
      }

      var currentDate = this.state.currentDate;
      var prefix;

      if (type === 'prev') {
        prefix = (0, _moment["default"])(currentDate).date(0).format('YYYY-MM');
      } else if (type === 'next') {
        prefix = (0, _moment["default"])(currentDate).date((0, _moment["default"])(currentDate).endOf('month').date() + 1).format('YYYY-MM');
      } else {
        prefix = (0, _moment["default"])(currentDate).format('YYYY-MM');
      }

      day = "00".concat(day).slice(-2);
      return "".concat(prefix, "-").concat(day);
    }
    /**
     * 点击单元格
     */

  }, {
    key: "clickCell",
    value: function clickCell(_ref2) {
      var text = _ref2.text,
          type = _ref2.type;
      var _this$props = this.props,
          onSelect = _this$props.onSelect,
          onClick = _this$props.onClick,
          _this$props$selectedV = _this$props.selectedValue,
          selectedValue = _this$props$selectedV === void 0 ? [] : _this$props$selectedV,
          mode = _this$props.mode,
          view = _this$props.view;
      var formatValue = this.getFormateDate(text, type);
      var value = (0, _moment["default"])(formatValue);
      onClick && onClick(value);
      if (mode !== 'edit') return;

      var tempSelectedValue = _toConsumableArray(selectedValue);

      var curIndex = tempSelectedValue.indexOf(formatValue);

      if (curIndex > -1) {
        tempSelectedValue.splice(curIndex, 1);
      } else {
        tempSelectedValue.push(formatValue);
      }

      onSelect && onSelect(tempSelectedValue, value);
    }
    /**
     * 返回单元格样式
     */

  }, {
    key: "getCellClass",
    value: function getCellClass(cell, isDisabled, prefixCls) {
      var _classnames;

      return (0, _classnames2["default"])(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-in-view"), cell.type === 'current'), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), isDisabled), _defineProperty(_classnames, "".concat(prefixCls, "-selected"), this.isSelected(cell)), _defineProperty(_classnames, "".concat(prefixCls, "-current"), this.isCurrentDay(cell)), _classnames));
    }
    /**
     * 是否已选中
     */

  }, {
    key: "isSelected",
    value: function isSelected(_ref3) {
      var text = _ref3.text,
          type = _ref3.type;
      var _this$props$selectedV2 = this.props.selectedValue,
          selectedValue = _this$props$selectedV2 === void 0 ? [] : _this$props$selectedV2;
      var cur = this.getFormateDate(text, type);
      return selectedValue.some(function (item) {
        return item === cur;
      });
    }
    /**
     * 是否为当前日期
     */

  }, {
    key: "isCurrentDay",
    value: function isCurrentDay(_ref4) {
      var text = _ref4.text,
          type = _ref4.type;
      var currentDate = this.state.currentDate;
      return currentDate.format('YYYY-MM-DD') === this.getFormateDate(text, type);
    }
    /**
     * 渲染单元格
     */

  }, {
    key: "renderCell",
    value: function renderCell(_ref5) {
      var text = _ref5.text,
          type = _ref5.type;
      var _this$props2 = this.props,
          dateCellRender = _this$props2.dateCellRender,
          prefixCls = _this$props2.prefixCls;
      var cell;

      if (dateCellRender) {
        cell = dateCellRender((0, _moment["default"])(this.getFormateDate(text, type)));
      }

      return cell || /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-grid-cell-inner")
      }, text);
    }
    /**
     * 渲染星期
     */

  }, {
    key: "renderWeek",
    value: function renderWeek() {
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          week = _this$props3.week;
      return /*#__PURE__*/_react["default"].createElement("tr", {
        className: "".concat(prefixCls, "-week")
      }, week.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement("th", {
          className: "".concat(prefixCls, "-week-").concat(index),
          key: "week-li-".concat(index)
        }, item);
      }));
    }
    /**
     * 渲染网格日历
     */

  }, {
    key: "renderGrid",
    value: function renderGrid() {
      var _this3 = this;

      var _this$state$days = this.state.days,
          days = _this$state$days === void 0 ? [] : _this$state$days;
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          disabledDate = _this$props4.disabledDate,
          mode = _this$props4.mode;
      if (!days.length) return null;
      var gridData = this.toNestedArr(days);
      return /*#__PURE__*/_react["default"].createElement("table", {
        cellSpacing: "0",
        className: "".concat(prefixCls, "-grid")
      }, /*#__PURE__*/_react["default"].createElement("thead", null, this.renderWeek()), /*#__PURE__*/_react["default"].createElement("tbody", null, gridData.map(function (rows, rowIndex) {
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: "row-".concat(rowIndex)
        }, rows.map(function (col, colIndex) {
          var isDisabled = false;

          if (mode === 'edit' && disabledDate) {
            isDisabled = !!disabledDate((0, _moment["default"])(_this3.getFormateDate(col.text, col.type)));
          }

          return /*#__PURE__*/_react["default"].createElement("td", {
            onClick: function onClick() {
              col.text && !isDisabled && _this3.clickCell(col);
            },
            key: "".concat(rowIndex, "-").concat(colIndex),
            className: _this3.getCellClass(col, isDisabled, "".concat(prefixCls, "-grid-cell"))
          }, !!col.text && _this3.renderCell(col, isDisabled));
        }));
      })));
    }
    /**
     * 切换月份
     */

  }, {
    key: "switchMonth",
    value: function switchMonth(i) {
      var onChange = this.props.onChange;
      var currentDate = this.state.currentDate;
      var value = currentDate.clone().add('month', i);
      onChange && onChange(value);
    }
    /**
     * 渲染日历头部
     */

  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this4 = this;

      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          Left = _this$props5.Left,
          Right = _this$props5.Right,
          headerRender = _this$props5.headerRender,
          onChange = _this$props5.onChange,
          view = _this$props5.view,
          mode = _this$props5.mode;
      var currentDate = this.state.currentDate;
      return headerRender ? headerRender({
        value: currentDate,
        view: view,
        mode: mode,
        onChange: onChange
      }) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, Left, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "prev-btn",
        onClick: function onClick() {
          _this4.switchMonth(-1);
        }
      }, /*#__PURE__*/_react["default"].createElement(_index2["default"], {
        type: "return"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "current-month"
      }, (0, _moment["default"])(currentDate).format('YYYY-MM')), /*#__PURE__*/_react["default"].createElement("div", {
        className: "next-btn",
        onClick: function onClick() {
          _this4.switchMonth(1);
        }
      }, /*#__PURE__*/_react["default"].createElement(_index2["default"], {
        type: "enter"
      }))), Right);
    }
    /**
     * 渲染列表日历
     */

  }, {
    key: "renderList",
    value: function renderList() {
      var _this5 = this;

      var _this$state$days2 = this.state.days,
          days = _this$state$days2 === void 0 ? [] : _this$state$days2;
      var _this$props6 = this.props,
          prefixCls = _this$props6.prefixCls,
          mode = _this$props6.mode,
          dateCellRender = _this$props6.dateCellRender,
          disabledDate = _this$props6.disabledDate;
      if (!days.length) return null;
      var listData = days.filter(function (item) {
        return item.type === 'current';
      });
      return /*#__PURE__*/_react["default"].createElement(_index3["default"], {
        direction: "column",
        className: "".concat(prefixCls, "-list")
      }, listData.map(function (cell, index) {
        var isDisabled = false;

        if (mode === 'edit' && disabledDate) {
          isDisabled = !!disabledDate((0, _moment["default"])(_this5.getFormateDate(cell.text, cell.type)));
        }

        return /*#__PURE__*/_react["default"].createElement(_index3["default"].Item, {
          key: cell.text,
          divider: true,
          style: {
            textAlign: 'center'
          },
          onClick: function onClick() {
            !isDisabled && _this5.clickCell(cell);
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: _this5.getCellClass(cell, isDisabled, "".concat(prefixCls, "-list-item"))
        }, mode === 'edit' && /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-list-item-check")
        }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
          disabled: isDisabled,
          value: _this5.isSelected(cell),
          onChange: function onChange() {
            !isDisabled && _this5.clickCell(cell);
          }
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-list-item-day")
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "day-text"
        }, cell.text), /*#__PURE__*/_react["default"].createElement("div", {
          className: "day-week"
        }, _this5.getWeek(cell))), dateCellRender && dateCellRender((0, _moment["default"])(_this5.getFormateDate(cell.text, cell.type)))));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          prefixCls = _this$props7.prefixCls,
          className = _this$props7.className,
          zIndex = _this$props7.zIndex,
          view = _this$props7.view;
      var currentDate = this.state.currentDate;
      if (!currentDate) return null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames2["default"])("".concat(prefixCls), className),
        style: {
          zIndex: zIndex
        }
      }, this.renderTitle(), view === 'grid' && this.renderGrid(), view === 'list' && this.renderList());
    }
  }]);

  return Calendar;
}(_react["default"].Component);

exports["default"] = Calendar;

_defineProperty(Calendar, "defaultProps", {
  prefixCls: 'wme-calendar',
  zIndex: 2,
  week: ['一', '二', '三', '四', '五', '六', '日'],
  onlyCurrentMonth: true,
  //只显示当月日期
  selectedValue: [],
  //选中的日期
  view: 'grid',
  //显示方式 grid/list
  mode: 'view' //模式 view/edit

});
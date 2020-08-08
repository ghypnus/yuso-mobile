"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MultiPicker = _interopRequireDefault(require("../picker/MultiPicker"));

var _Picker = _interopRequireDefault(require("../picker/Picker"));

var _HrContext = require("../locale-provider/HrContext");

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

// 递归筛选树
function arrayRecurrenceFilter(dateList, filterFn, options) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  var children = dateList || [];
  var result = [];
  var level = 0;
  var foundItem;

  do {
    var foundItem = children.filter(function (item) {
      return filterFn(item, level);
    })[0];

    if (!foundItem) {
      break;
    }

    result.push(foundItem);
    children = foundItem[options.childrenKeyName] || [];
    level += 1;
  } while (children.length > 0);

  return result;
}

var MutilDatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(MutilDatePicker, _React$Component);

  var _super = _createSuper(MutilDatePicker);

  function MutilDatePicker(props) {
    var _this;

    _classCallCheck(this, MutilDatePicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setCasecadeScrollValue", function (v) {
      if (v && _this.scrollDateValue) {
        var length = _this.scrollDateValue.length;

        if (length === v.length && _this.scrollDateValue[length - 1] === v[length - 1]) {
          return;
        }
      }

      _this.scrollDateValue = v;
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (v, i, cascade) {
      _this.setScrollValue(v, cascade);

      if (_this.props.onChange) {
        _this.props.onChange(v, i);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCasecadeValueChange", function (value, index) {
      var cols = _this.props.cols;
      var children = arrayRecurrenceFilter(_this.props.dateList, function (c, level) {
        return level <= index && c.value === value[level];
      });
      var mData = children[index];
      var i;

      for (i = index + 1; mData && mData.children && mData.children.length && i < cols; i++) {
        mData = mData.children[0];
        value[i] = mData.value;
      }

      value.length = i;

      if (!('value' in _this.props)) {
        var timeV = _this.scrollTimeValue ? _this.scrollTimeValue : _this.getDefaultTimeValue();

        _this.setState({
          value: [].concat(_toConsumableArray(value), _toConsumableArray(timeV))
        });
      }

      _this.onChange(value, index, true);
    });

    _this.state = {
      value: _this.getValue()
    };
    _this.scrollDateValue = null;
    _this.scrollTimeValue = null;
    return _this;
  }

  _createClass(MutilDatePicker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          // TODO 接收新值
          value: this.getValue()
        });
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var value = this.props.value || this.props.defaultValue;

      if (!value || !value.length) {
        value = [].concat(_toConsumableArray(this.getDefaultDateValue()), _toConsumableArray(this.getDefaultTimeValue()));
      }

      return value;
    }
  }, {
    key: "getDefaultDateValue",
    value: function getDefaultDateValue() {
      var date = new Date();
      return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    }
  }, {
    key: "getDefaultTimeValue",
    value: function getDefaultTimeValue() {
      var date = new Date();
      return [date.getHours(), date.getMinutes()];
    }
  }, {
    key: "setScrollValue",
    value: function setScrollValue(v, cascade) {
      if (cascade) {
        this.scrollDateValue = v;
      } else {
        this.scrollTimeValue = v;
      }
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(value, index) {
      if (!('value' in this.props)) {
        var mValue = this.props.value || this.props.defaultValue;
        var dateV = this.scrollDateValue ? this.scrollDateValue : mValue ? mValue.slice(0, 3) : this.getDefaultDateValue();
        this.setState({
          value: [].concat(_toConsumableArray(dateV), _toConsumableArray(value))
        });
      }

      this.onChange(value, index, false);
    } // 获取普通列

  }, {
    key: "getPickerCol",
    value: function getPickerCol() {
      var timeList = this.props.timeList;
      return timeList.map(function (col, index) {
        return /*#__PURE__*/_react["default"].createElement(_Picker["default"], {
          key: index,
          style: {
            flex: 1
          }
        }, col.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(_Picker["default"].Item, {
            key: item.value,
            value: item.value
          }, item.label);
        }));
      });
    } // 获取级联列

  }, {
    key: "getCascadeCols",
    value: function getCascadeCols() {
      var _this$props = this.props,
          dateList = _this$props.dateList,
          cols = _this$props.cols;
      var value = this.state.value;
      var childrenTree = arrayRecurrenceFilter(dateList, function (c, level) {
        return c.value === value[level];
      }).map(function (c) {
        return c.children;
      });
      var needPad = cols - childrenTree.length;

      if (needPad > 0) {
        for (var i = 0; i < needPad; i++) {
          childrenTree.push([]);
        }
      }

      childrenTree.length = cols - 1;
      childrenTree.unshift(dateList);
      return childrenTree.map(function () {
        var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var level = arguments.length > 1 ? arguments[1] : undefined;
        return /*#__PURE__*/_react["default"].createElement(_Picker["default"], {
          key: level,
          style: {
            flex: 1
          }
        }, children.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(_Picker["default"].Item, {
            value: item.value,
            key: item.value
          }, item.label);
        }));
      });
    }
  }, {
    key: "onOk",
    value: function onOk(e) {
      var v;

      if (this.scrollDateValue !== null && this.scrollTimeValue !== null) {
        v = [].concat(_toConsumableArray(this.scrollDateValue), _toConsumableArray(this.scrollTimeValue));
      } else {
        v = this.state.value;
      }

      if (this.props.onOk) {
        this.props.onOk(v);
      }

      e.preventDefault();
    }
  }, {
    key: "onCancel",
    value: function onCancel(e) {
      if (this.props.onCancel) {
        this.props.onCancel();
      }

      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          title = _this$props2.title,
          okText = _this$props2.okText,
          cancelText = _this$props2.cancelText,
          timeList = _this$props2.timeList,
          cascade = _this$props2.cascade;
      var value = this.state.value;
      return /*#__PURE__*/_react["default"].createElement(_HrContext.Consumer, null, function (_ref) {
        var DatePicker = _ref.DatePicker;
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-action")
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-action-cancel"),
          onClick: function onClick(e) {
            return _this2.onCancel(e);
          }
        }, cancelText || DatePicker.cancel), /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-action-title")
        }, title), /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-action-ok"),
          onClick: function onClick(e) {
            return _this2.onOk(e);
          }
        }, okText || DatePicker.ok)), /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            display: 'flex'
          }
        }, /*#__PURE__*/_react["default"].createElement(_MultiPicker["default"], {
          style: {
            flexGrow: 3
          },
          cascade: true,
          selectedValue: value ? [value[0], value[1], value[2]] : [],
          onValueChange: function onValueChange(v, i) {
            return _this2.onCasecadeValueChange(v, i);
          },
          onScrollChange: function onScrollChange(v) {
            return _this2.setCasecadeScrollValue(v);
          }
        }, _this2.getCascadeCols()), timeList && /*#__PURE__*/_react["default"].createElement(_MultiPicker["default"], {
          style: {
            flexGrow: 2
          },
          selectedValue: value ? [value[3], value[4]] : [],
          onValueChange: function onValueChange(v, i) {
            return _this2.onValueChange(v, i);
          },
          onScrollChange: function onScrollChange(v) {
            return _this2.setScrollValue(v);
          }
        }, _this2.getPickerCol())));
      });
    }
  }]);

  return MutilDatePicker;
}(_react["default"].Component);

exports["default"] = MutilDatePicker;

_defineProperty(MutilDatePicker, "defaultProps", {
  prefixCls: 'wme-picker',
  cols: 3,
  // 列
  cascade: false,
  // 是否级联
  title: '',
  // 标题
  disabled: false,
  // 是否禁用
  onScrollChange: function onScrollChange() {},
  onChange: function onChange(v, i) {}
});
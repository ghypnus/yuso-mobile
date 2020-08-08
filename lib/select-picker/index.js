"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _index = _interopRequireDefault(require("../picker/index"));

var _index2 = _interopRequireDefault(require("../pop-layer/index"));

var _index3 = _interopRequireDefault(require("../icon/index"));

var _data_util = require("../_utils/data_util");

var _HrContext = require("../locale-provider/HrContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var SHOW_ALL = 'SHOW_ALL';
var SHOW_CHILD = 'SHOW_CHILD';

var SelectPicker = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectPicker, _React$Component);

  var _super = _createSuper(SelectPicker);

  function SelectPicker(props) {
    var _this;

    _classCallCheck(this, SelectPicker);

    _this = _super.call(this, props);
    _this.state = {
      visible: false,
      useDefaultValue: true // 是否使用默认值

    };
    return _this;
  }
  /**
   * 获取值
   * @param {Any} value 值
   */


  _createClass(SelectPicker, [{
    key: "getValue",
    value: function getValue(value) {
      var useDefaultValue = this.state.useDefaultValue;
      var defaultValue = this.props.defaultValue;

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

  }, {
    key: "recurrenceFilter",
    value: function recurrenceFilter(list, val, level) {
      var value = this.getValue(val);
      if (!value || !value[level]) return;

      if (list && list.length > 0) {
        var data = list.find(function (item) {
          return item.value === value[level];
        });

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

  }, {
    key: "getSelectedValues",
    value: function getSelectedValues(value) {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data,
          cascade = _this$props.cascade;

      if (cascade) {
        this.selectedValues = [];
        this.recurrenceFilter(data, value, 0);
      } else {
        this.selectedValues = data.length > 1 ? [] : {};
        data.map(function (array, index) {
          var item = array.find(function (o) {
            if ((0, _isArray["default"])(value)) {
              return value[index] === o.value;
            }

            return value === o.value;
          });

          if (item) {
            if (data.length > 1) {
              _this2.selectedValues.push(item);
            } else {
              _this2.selectedValues = item;
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

  }, {
    key: "getSelectedLabels",
    value: function getSelectedLabels(selectedValues) {
      var _this$props2 = this.props,
          sign = _this$props2.sign,
          showSelectedType = _this$props2.showSelectedType;
      var result = '';

      if ((0, _isArray["default"])(selectedValues)) {
        switch (showSelectedType) {
          case SHOW_ALL:
            result = selectedValues.map(function (item) {
              return item.label;
            }).join(sign);
            break;

          case SHOW_CHILD:
            result = !(0, _data_util.isEmpty)(selectedValues) ? selectedValues[selectedValues.length - 1].label : '';
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

  }, {
    key: "renderSuffixIcon",
    value: function renderSuffixIcon() {
      var _classnames,
          _this3 = this;

      var useDefaultValue = this.state.useDefaultValue;
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          value = _this$props3.value,
          disabled = _this$props3.disabled,
          readOnly = _this$props3.readOnly,
          arrow = _this$props3.arrow,
          onOk = _this$props3.onOk,
          onReset = _this$props3.onReset; // 箭头方向

      var arrowCls = (0, _classnames3["default"])("".concat(prefixCls, "-arrow"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-arrow-horizontal"), arrow === 'horizontal'), _defineProperty(_classnames, "".concat(prefixCls, "-arrow-vertical"), arrow === 'down' || arrow === 'up'), _defineProperty(_classnames, "".concat(prefixCls, "-arrow-vertical-up"), arrow === 'up'), _classnames));
      var defaultValue = useDefaultValue ? this.props.defaultValue : null;
      var allowClear = !disabled && !readOnly && close && !(0, _data_util.isEmpty)(value || defaultValue);

      if (allowClear) {
        return /*#__PURE__*/_react["default"].createElement(_index3["default"], {
          className: "".concat(prefixCls, "-close"),
          type: "delete_fill",
          onClick: function onClick(e) {
            document.activeElement.blur();
            e.stopPropagation();
            var resetVal = Array.isArray(_this3.props.value) ? [] : '';

            _this3.setState({
              useDefaultValue: false
            });

            onReset && onReset(resetVal);
            onOk && onOk(resetVal);
          }
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_index3["default"], {
        type: "enter",
        size: "small",
        className: arrowCls
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames2,
          _this4 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          className = _this$props4.className,
          value = _this$props4.value,
          title = _this$props4.title,
          pickerTitle = _this$props4.pickerTitle,
          disabled = _this$props4.disabled,
          readOnly = _this$props4.readOnly,
          style = _this$props4.style,
          ismust = _this$props4.ismust,
          cascade = _this$props4.cascade,
          data = _this$props4.data,
          onChange = _this$props4.onChange,
          _onOk = _this$props4.onOk,
          _onCancel = _this$props4.onCancel,
          cols = _this$props4.cols,
          placeholder = _this$props4.placeholder;
      var useDefaultValue = this.state.useDefaultValue;
      var defaultValue = useDefaultValue ? this.props.defaultValue : null;
      var selectedValues = this.getSelectedValues(value || defaultValue);
      var labels = this.getSelectedLabels(selectedValues);
      var wrapperCls = (0, _classnames3["default"])(prefixCls, className, (_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames2, "".concat(prefixCls, "-read-only"), readOnly), _classnames2));
      return /*#__PURE__*/_react["default"].createElement(_HrContext.Consumer, null, function (_ref) {
        var SelectPicker = _ref.SelectPicker;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: wrapperCls,
          style: style
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-area"),
          onClick: function onClick() {
            if (!disabled && !readOnly) {
              _this4.setState({
                visible: true
              });
            }
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, /*#__PURE__*/_react["default"].createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, !(0, _data_util.isEmpty)(selectedValues) ? labels : /*#__PURE__*/_react["default"].createElement("span", {
          className: "".concat(prefixCls, "-place-holder")
        }, placeholder)), _this4.renderSuffixIcon()), /*#__PURE__*/_react["default"].createElement(_index2["default"], {
          visible: _this4.state.visible,
          direction: "bottom"
        }, /*#__PURE__*/_react["default"].createElement("yusoPicker", {
          title: pickerTitle || SelectPicker.pickerTitle,
          defaultValue: _this4.getValue(value),
          cascade: cascade,
          data: data,
          onChange: onChange,
          cols: cols,
          onOk: function onOk(val) {
            _this4.setState({
              visible: false,
              useDefaultValue: true
            });

            if (_onOk) {
              _onOk(val, _this4.getSelectedValues(val));
            }
          },
          onCancel: function onCancel() {
            _this4.setState({
              visible: false
            });

            if (_onCancel) {
              _onCancel();
            }
          }
        })));
      });
    }
  }]);

  return SelectPicker;
}(_react["default"].Component);

_defineProperty(SelectPicker, "defaultProps", {
  prefixCls: 'yuso-select-picker',
  arrow: 'horizontal',
  showSelectedType: SHOW_ALL
});

SelectPicker.SHOW_ALL = SHOW_ALL;
SelectPicker.SHOW_CHILD = SHOW_CHILD;
var _default = SelectPicker;
exports["default"] = _default;
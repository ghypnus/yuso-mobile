"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../scroller/index"));

var _index2 = _interopRequireDefault(require("../flex/index"));

var _index3 = _interopRequireDefault(require("../list/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Menu = /*#__PURE__*/function (_React$Component) {
  _inherits(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, props);
    _this.state = {
      firstLevelSelectValue: props.value
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        if (this.state.firstLevelSelectValue !== nextProps.value) {
          this.setState({
            firstLevelSelectValue: nextProps.value
          });
        }
      }
    }
  }, {
    key: "onClickFirstLevelItem",
    value: function onClickFirstLevelItem(dataItem) {
      var onChange = this.props.onChange;
      this.setState({
        firstLevelSelectValue: dataItem.value
      });

      if (onChange) {
        onChange([dataItem.value]);
      }
    }
  }, {
    key: "scrollToStart",
    value: function scrollToStart() {
      this.Scroller.scrollTo(0, 0);
    }
  }, {
    key: "scrollToEnd",
    value: function scrollToEnd() {
      var maxScrollX = Math.abs(this.Scroller.getMaxScrollX());
      this.Scroller.scrollTo(maxScrollX, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data,
          height = _this$props.height,
          prefixCls = _this$props.prefixCls,
          direction = _this$props.direction,
          scroller = _this$props.scroller,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 'square' : _this$props$size,
          itemStyle = _this$props.itemStyle,
          labelStyle = _this$props.labelStyle;
      var _this$state = this.state,
          firstLevelSelectValue = _this$state.firstLevelSelectValue,
          value = _this$state.value;
      var heightStyle = {
        height: height
      };

      var contentList = /*#__PURE__*/_react["default"].createElement(_index3["default"], {
        direction: direction
      }, data.map(function (dataItem, index) {
        return /*#__PURE__*/_react["default"].createElement(_index3["default"].Item, _extends({}, dataItem, {
          size: size,
          style: itemStyle,
          wrap: !!(scroller === true && direction === 'row'),
          onClick: function onClick() {
            return _this2.onClickFirstLevelItem(dataItem);
          },
          key: "listitem-1-".concat(index),
          selected: dataItem.value === firstLevelSelectValue
        }), /*#__PURE__*/_react["default"].createElement("div", {
          style: labelStyle
        }, dataItem.label));
      }));

      return /*#__PURE__*/_react["default"].createElement(_index2["default"], {
        className: (0, _classnames["default"])(prefixCls, className),
        style: _objectSpread({}, style, {}, heightStyle),
        direction: "row"
      }, /*#__PURE__*/_react["default"].createElement(_index2["default"].Item, {
        style: heightStyle
      }, scroller === true ? /*#__PURE__*/_react["default"].createElement(_index["default"], {
        ref: function ref(Comp) {
          return _this2.Scroller = Comp;
        },
        scrollX: direction === 'row',
        scrollY: direction === 'column'
      }, contentList) : contentList));
    }
  }]);

  return Menu;
}(_react["default"].Component);

exports["default"] = Menu;

_defineProperty(Menu, "defaultProps", {
  prefixCls: 'yuso-menu',
  direction: 'row',
  height: '3rem',
  data: []
});
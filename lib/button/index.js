"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../icon/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, props);
    _this.state = {
      actClass: ''
    };
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          style = _this$props.style,
          onClick = _this$props.onClick,
          className = _this$props.className,
          icon = _this$props.icon,
          title = _this$props.title,
          disabled = _this$props.disabled,
          actClass = _this$props.actClass,
          type = _this$props.type,
          inline = _this$props.inline,
          size = _this$props.size,
          children = _this$props.children,
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "style", "onClick", "className", "icon", "title", "disabled", "actClass", "type", "inline", "size", "children"]);

      var wrapCls = (0, _classnames2["default"])(prefixCls, className, this.state.actClass, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-inline"), inline), _defineProperty(_classnames, "".concat(prefixCls, "-primary"), type === 'primary'), _defineProperty(_classnames, "".concat(prefixCls, "-warning"), type === 'warning'), _defineProperty(_classnames, "".concat(prefixCls, "-ghost"), type === 'ghost'), _defineProperty(_classnames, "".concat(prefixCls, "-link"), type === 'link'), _defineProperty(_classnames, "".concat(prefixCls, "-search"), type === 'search'), _defineProperty(_classnames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _classnames));
      return /*#__PURE__*/_react["default"].createElement("a", _extends({
        style: style,
        className: wrapCls,
        onClick: disabled ? null : function (e) {
          return onClick && onClick(e);
        },
        onTouchStart: this.handleTouchStart.bind(this),
        onTouchEnd: this.handleTouchEnd.bind(this)
      }, restProps), title || children);
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart() {
      var actClass = this.props.actClass;
      if (!actClass) return;
      this.setState(function () {
        return {
          actClass: actClass
        };
      });
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      var actClass = this.props.actClass;
      if (!actClass) return;
      this.setState(function () {
        return {
          actClass: ''
        };
      });
    }
  }]);

  return Button;
}(_react["default"].Component);

exports["default"] = Button;

_defineProperty(Button, "defaultProps", {
  prefixCls: 'wme-button',
  size: 'large',
  type: ''
});
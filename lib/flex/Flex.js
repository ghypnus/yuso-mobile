"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Flex = /*#__PURE__*/function (_React$Component) {
  _inherits(Flex, _React$Component);

  var _super = _createSuper(Flex);

  function Flex() {
    _classCallCheck(this, Flex);

    return _super.apply(this, arguments);
  }

  _createClass(Flex, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          direction = _this$props.direction,
          wrap = _this$props.wrap,
          justify = _this$props.justify,
          align = _this$props.align,
          alignContent = _this$props.alignContent,
          className = _this$props.className,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          style = _this$props.style;
      var wrapCls = (0, _classnames2["default"])(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-dir-row"), direction === 'row'), _defineProperty(_classnames, "".concat(prefixCls, "-dir-row-reverse"), direction === 'row-reverse'), _defineProperty(_classnames, "".concat(prefixCls, "-dir-column"), direction === 'column'), _defineProperty(_classnames, "".concat(prefixCls, "-dir-column-reverse"), direction === 'column-reverse'), _defineProperty(_classnames, "".concat(prefixCls, "-nowrap"), wrap === 'nowrap'), _defineProperty(_classnames, "".concat(prefixCls, "-wrap"), wrap === 'wrap'), _defineProperty(_classnames, "".concat(prefixCls, "-wrap-reverse"), wrap === 'wrap-reverse'), _defineProperty(_classnames, "".concat(prefixCls, "-justify-start"), justify === 'start'), _defineProperty(_classnames, "".concat(prefixCls, "-justify-end"), justify === 'end'), _defineProperty(_classnames, "".concat(prefixCls, "-justify-center"), justify === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-justify-between"), justify === 'between'), _defineProperty(_classnames, "".concat(prefixCls, "-justify-around"), justify === 'around'), _defineProperty(_classnames, "".concat(prefixCls, "-align-start"), align === 'start'), _defineProperty(_classnames, "".concat(prefixCls, "-align-center"), align === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-align-end"), align === 'end'), _defineProperty(_classnames, "".concat(prefixCls, "-align-baseline"), align === 'baseline'), _defineProperty(_classnames, "".concat(prefixCls, "-align-stretch"), align === 'stretch'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-start"), alignContent === 'start'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-end"), alignContent === 'end'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-center"), alignContent === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-between"), alignContent === 'between'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-around"), alignContent === 'around'), _defineProperty(_classnames, "".concat(prefixCls, "-align-content-stretch"), alignContent === 'stretch'), _classnames));
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: wrapCls,
        style: style
      }, children);
    }
  }]);

  return Flex;
}(_react["default"].Component);

Flex.defaultProps = {
  prefixCls: 'yuso-flexbox',
  align: 'center'
};
var _default = Flex;
exports["default"] = _default;
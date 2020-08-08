"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

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

var GridItem = /*#__PURE__*/function (_React$Component) {
  _inherits(GridItem, _React$Component);

  var _super = _createSuper(GridItem);

  function GridItem() {
    _classCallCheck(this, GridItem);

    return _super.apply(this, arguments);
  }

  _createClass(GridItem, [{
    key: "render",
    value: function render() {
      var _classnames;

      // 前缀、样式名、对齐方式、不可编辑、分割线、children、点击事件、图片
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          align = _this$props.align,
          disabled = _this$props.disabled,
          divider = _this$props.divider,
          children = _this$props.children,
          _onClick = _this$props.onClick,
          thumb = _this$props.thumb,
          value = _this$props.value,
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "className", "align", "disabled", "divider", "children", "onClick", "thumb", "value"]); // 对齐、不可编辑


      var wrapCls = (0, _classnames2["default"])("".concat(prefixCls, "-item"), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-item-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-item-left"), align === 'left'), _defineProperty(_classnames, "".concat(prefixCls, "-item-center"), align === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-item-right"), align === 'right'), _defineProperty(_classnames, "".concat(prefixCls, "-item-divider"), divider), _classnames));
      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, restProps, {
        className: wrapCls,
        onClick: function onClick(e) {
          if (_onClick) {
            _onClick(value);
          }
        }
      }), thumb ? /*#__PURE__*/_react["default"].createElement("img", {
        src: thumb
      }) : null, children !== undefined && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children));
    }
  }]);

  return GridItem;
}(_react["default"].Component);

exports["default"] = GridItem;

_defineProperty(GridItem, "defaultProps", {
  prefixCls: 'wme-grid',
  align: 'middle'
});
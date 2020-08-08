"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames6 = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../icon/index.js"));

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

var errSrc = 'data:image/png;base64,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';

var ListItem = /*#__PURE__*/function (_React$Component) {
  _inherits(ListItem, _React$Component);

  var _super = _createSuper(ListItem);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _super.apply(this, arguments);
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _classnames,
          _classnames2,
          _classnames3,
          _classnames4,
          _classnames5,
          _this = this;

      // 前缀、样式名、对齐方式、文本对齐方式、超出长度省略号、换行、样式、多行文本、箭头、错误、不可编辑、分割线、类型>title:标题
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          align = _this$props.align,
          textAlign = _this$props.textAlign,
          ellipsis = _this$props.ellipsis,
          wrap = _this$props.wrap,
          style = _this$props.style,
          multipleLine = _this$props.multipleLine,
          arrow = _this$props.arrow,
          error = _this$props.error,
          disabled = _this$props.disabled,
          divider = _this$props.divider,
          type = _this$props.type,
          size = _this$props.size; // children、选中、点击事件、右侧补充内容、图片、图片高亮、Icon、Icon大小、高亮底线

      var _this$props2 = this.props,
          children = _this$props2.children,
          selected = _this$props2.selected,
          _onClick = _this$props2.onClick,
          _onClickCapture = _this$props2.onClickCapture,
          extra = _this$props2.extra,
          thumb = _this$props2.thumb,
          thumbLight = _this$props2.thumbLight,
          icon = _this$props2.icon,
          iconSize = _this$props2.iconSize,
          underline = _this$props2.underline; // 对齐、错误、不可编辑

      var wrapCls = (0, _classnames6["default"])("".concat(prefixCls, "-item"), className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-item-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-item-error"), error), _defineProperty(_classnames, "".concat(prefixCls, "-item-top"), align === 'top'), _defineProperty(_classnames, "".concat(prefixCls, "-item-center"), align === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-item-bottom"), align === 'bottom'), _defineProperty(_classnames, "".concat(prefixCls, "-item-text-left"), textAlign === 'left'), _defineProperty(_classnames, "".concat(prefixCls, "-item-divider"), divider), _defineProperty(_classnames, "".concat(prefixCls, "-item-title"), type === 'title'), _defineProperty(_classnames, "".concat(prefixCls, "-item-view"), type === 'view'), _classnames)); // 图片

      var thumbCls = (0, _classnames6["default"])("".concat(prefixCls, "-thumb"), (_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-thumb-large"), size === 'large'), _defineProperty(_classnames2, "".concat(prefixCls, "-thumb-small"), size === 'small'), _defineProperty(_classnames2, "".concat(prefixCls, "-thumb-normal"), size === 'normal'), _defineProperty(_classnames2, "".concat(prefixCls, "-thumb-square"), size === 'square'), _classnames2)); // iocn

      var iconCls = (0, _classnames6["default"])("".concat(prefixCls, "-icon"), (_classnames3 = {}, _defineProperty(_classnames3, "".concat(prefixCls, "-icon-active"), selected), _defineProperty(_classnames3, "".concat(prefixCls, "-icon-unactive"), !selected), _classnames3)); // 多行文本、文本换行方式

      var lineCls = (0, _classnames6["default"])("".concat(prefixCls, "-line"), (_classnames4 = {}, _defineProperty(_classnames4, "".concat(prefixCls, "-line-multiple"), multipleLine), _defineProperty(_classnames4, "".concat(prefixCls, "-line-ellipsis"), ellipsis), _defineProperty(_classnames4, "".concat(prefixCls, "-line-wrap"), wrap), _defineProperty(_classnames4, "".concat(prefixCls, "-line-selected"), selected), _classnames4)); // 箭头和它方向

      var arrowCls = (0, _classnames6["default"])("".concat(prefixCls, "-arrow"), (_classnames5 = {}, _defineProperty(_classnames5, "".concat(prefixCls, "-arrow-horizontal"), arrow === 'horizontal'), _defineProperty(_classnames5, "".concat(prefixCls, "-arrow-vertical"), arrow === 'down' || arrow === 'up'), _defineProperty(_classnames5, "".concat(prefixCls, "-arrow-vertical-up"), arrow === 'up'), _classnames5)); // 当前选中

      var underlineCls = (0, _classnames6["default"])("".concat(prefixCls, "-underline"));
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style,
        className: wrapCls,
        onClick: function onClick(e) {
          return _onClick && _onClick(e);
        },
        onClickCapture: function onClickCapture(e) {
          return _onClickCapture && _onClickCapture(e);
        }
      }, thumb ? /*#__PURE__*/_react["default"].createElement("img", {
        ref: function ref(img) {
          return _this.img = img;
        },
        onError: function onError() {
          return _this.img.src = errSrc;
        },
        className: thumbCls,
        src: selected ? thumbLight : thumb
      }) : null, icon ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_index["default"], {
        type: icon,
        size: iconSize,
        className: iconCls
      })) : null, children !== undefined && /*#__PURE__*/_react["default"].createElement("div", {
        className: lineCls
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children), extra !== undefined && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra), arrow && /*#__PURE__*/_react["default"].createElement(_index["default"], {
        type: "enter",
        size: "small",
        className: arrowCls
      }), underline && selected && /*#__PURE__*/_react["default"].createElement("div", {
        className: underlineCls
      })));
    }
  }]);

  return ListItem;
}(_react["default"].Component);

exports["default"] = ListItem;

_defineProperty(ListItem, "defaultProps", {
  prefixCls: 'wme-list',
  align: 'center',
  error: false,
  multipleLine: false,
  wrap: false
});
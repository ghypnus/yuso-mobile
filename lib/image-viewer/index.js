/**
 * 图片预览
 * @author mars.xu
 * edit by john.gao
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _index = _interopRequireDefault(require("../swipe/index"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var ImageViewer = /*#__PURE__*/function (_React$Component) {
  _inherits(ImageViewer, _React$Component);

  var _super = _createSuper(ImageViewer);

  function ImageViewer(props) {
    var _this;

    _classCallCheck(this, ImageViewer);

    _this = _super.call(this, props);
    _this.rootEl = document.createElement('div');
    document.body.appendChild(_this.rootEl);
    return _this;
  }

  _createClass(ImageViewer, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rootEl) {
        document.body.removeChild(this.rootEl);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          visible = _this$props.visible,
          onClose = _this$props.onClose,
          _this$props$position = _this$props.position,
          position = _this$props$position === void 0 ? 0 : _this$props$position,
          children = _this$props.children;
      return visible ? /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(prefixCls, className)
      }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
        indicator: true,
        showCloseBtn: true,
        startSlide: position,
        style: {
          container: {
            width: "100%"
          },
          wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        },
        swipeOptions: {
          startSlide: position,
          continuous: false,
          stopPropagation: true
        },
        close: function close(_) {
          if (onClose) {
            onClose();
          }
        }
      }, children)), this.rootEl) : null;
    }
  }]);

  return ImageViewer;
}(_react["default"].Component);

exports["default"] = ImageViewer;

_defineProperty(ImageViewer, "defaultProps", {
  prefixCls: 'image-viewer',
  position: 0 //预览图片的初始位置

});
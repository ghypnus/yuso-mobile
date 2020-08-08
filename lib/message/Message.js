"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../button/index"));

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

var Message = /*#__PURE__*/function (_React$Component) {
  _inherits(Message, _React$Component);

  var _super = _createSuper(Message);

  function Message() {
    _classCallCheck(this, Message);

    return _super.apply(this, arguments);
  }

  _createClass(Message, [{
    key: "close",
    // 关闭
    value: function close(e) {
      var _this$props = this.props,
          _this$props$isMaskClo = _this$props.isMaskClose,
          isMaskClose = _this$props$isMaskClo === void 0 ? true : _this$props$isMaskClo,
          onClose = _this$props.onClose;

      var container = _reactDom["default"].findDOMNode(this.refs.messageContainer);

      if (!this.isDescendant(container, e.target)) {
        e.stopPropagation();

        if (isMaskClose) {
          onClose();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.clearCloseTimer();

      if (this.props.duration) {
        this.closeTimer = setTimeout(function () {
          _this.props.onClose();
        }, this.props.duration * 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _classnames2,
          _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          icon = _this$props2.icon,
          title = _this$props2.title,
          content = _this$props2.content,
          action = _this$props2.action,
          onClose = _this$props2.onClose,
          className = _this$props2.className,
          direction = _this$props2.direction,
          _this$props2$isMaskCl = _this$props2.isMaskClose,
          isMaskClose = _this$props2$isMaskCl === void 0 ? true : _this$props2$isMaskCl;
      var iconWrap = (0, _classnames3["default"])("".concat(prefixCls, "-icon"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-icon-success"), icon === 'success'), _defineProperty(_classnames, "".concat(prefixCls, "-icon-fail"), icon === 'fail'), _classnames));
      var titleIconWrap = icon === 'success' ? "".concat(prefixCls, "-title-success") : '';
      var actionWrap = (0, _classnames3["default"])("".concat(prefixCls, "-action"), (_classnames2 = {}, _defineProperty(_classnames2, "".concat(prefixCls, "-action-row"), direction === 'row'), _defineProperty(_classnames2, "".concat(prefixCls, "-action-column"), direction === 'column'), _classnames2));
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames3["default"])(prefixCls, className),
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-container"),
        ref: "messageContainer"
      }, icon && /*#__PURE__*/_react["default"].createElement("div", {
        className: iconWrap
      }), title && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: titleIconWrap
      }), /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: title
        }
      })), content ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content"),
        style: {
          maxHeight: window.screen.height * 0.7
        }
      }, content) : null, /*#__PURE__*/_react["default"].createElement("div", {
        className: actionWrap
      }, action && action.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement(_index["default"], {
          key: "button-".concat(index),
          className: "button",
          title: item.label,
          onClick: function onClick(e) {
            e.preventDefault();

            if (item.onClick) {
              item.onClick();
            }

            onClose();
          }
        });
      }))));
    }
    /**
     * 判断是否是子元素
     * @param  {Node}  parent 父元素
     * @param  {Node}  child  子元素
     * @return {Boolean}        true or false
     */

  }, {
    key: "isDescendant",
    value: function isDescendant(parent, child) {
      var node = child.parentNode;

      while (node != null) {
        if (node == parent) {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    }
    /**
     * 清除定时器
     */

  }, {
    key: "clearCloseTimer",
    value: function clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    }
  }]);

  return Message;
}(_react["default"].Component);

Message.defaultProps = {
  prefixCls: 'wme-message',
  direction: 'row'
};
var _default = Message;
exports["default"] = _default;
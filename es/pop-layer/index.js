function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/**
 * PopLayer
 * @author john.gao
 */
import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import classnames from 'classnames';

var PopLayer = /*#__PURE__*/function (_React$Component) {
  _inherits(PopLayer, _React$Component);

  var _super = _createSuper(PopLayer);

  function PopLayer(props) {
    var _this;

    _classCallCheck(this, PopLayer);

    _this = _super.call(this, props);
    _this.rootEl = document.createElement('div');
    document.body.appendChild(_this.rootEl);
    return _this;
  }

  _createClass(PopLayer, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rootEl) {
        document.body.removeChild(this.rootEl);
      }
    }
  }, {
    key: "close",
    value: function close(e) {
      e.preventDefault();
      var container = ReactDOM.findDOMNode(this.containerRef);

      if (e.target === container || this.isDescendant(container, e.target)) {
        return;
      }

      if (this.props.onClose) {
        this.props.onClose();
      }
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
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          visible = _this$props.visible,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          direction = _this$props.direction;
      var wrapCls = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-top"), direction === 'top'), _defineProperty(_classnames, "".concat(prefixCls, "-bottom"), direction === 'bottom'), _defineProperty(_classnames, "".concat(prefixCls, "-visible"), visible), _classnames));
      return visible ? /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement("div", {
        className: wrapCls,
        style: _objectSpread({}, style),
        onClick: function onClick(e) {
          return _this2.close(e);
        }
      }, /*#__PURE__*/React.createElement("div", {
        ref: function ref(el) {
          return _this2.containerRef = el;
        },
        className: "".concat(prefixCls, "-container")
      }, children || null)), this.rootEl) : null;
    }
  }]);

  return PopLayer;
}(React.Component);

_defineProperty(PopLayer, "defaultProps", {
  prefixCls: 'wme-pop-layer'
});

export { PopLayer as default };
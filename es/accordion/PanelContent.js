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

import React, { Component } from 'react';
import classnames from 'classnames';
import isEqual from 'lodash/isEqual';

var PanelContent = /*#__PURE__*/function (_Component) {
  _inherits(PanelContent, _Component);

  var _super = _createSuper(PanelContent);

  function PanelContent() {
    _classCallCheck(this, PanelContent);

    return _super.apply(this, arguments);
  }

  _createClass(PanelContent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var forceRender = this.props.forceRender;
      return forceRender || !isEqual(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          isActive = _this$props.isActive,
          children = _this$props.children,
          destroyInactivePanel = _this$props.destroyInactivePanel,
          forceRender = _this$props.forceRender,
          role = _this$props.role,
          panelHeight = _this$props.panelHeight;
      this._isActived = forceRender || this._isActived || isActive;
      var contentCls = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-content"), true), _defineProperty(_classnames, "".concat(prefixCls, "-content-active"), isActive), _defineProperty(_classnames, "".concat(prefixCls, "-content-inactive"), !isActive), _classnames));
      var child = !forceRender && !isActive && destroyInactivePanel ? null : /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content-box")
      }, children);
      var style = {};

      if (panelHeight) {
        style.height = panelHeight;
      }

      return /*#__PURE__*/React.createElement("div", {
        ref: function ref(el) {
          return _this.rootRef = el;
        },
        style: style,
        className: contentCls,
        role: role
      }, child);
    }
  }]);

  return PanelContent;
}(Component);

export { PanelContent as default };
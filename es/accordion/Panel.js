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

import React, { Component } from 'react';
import classNames from 'classnames';
import PanelContent from './PanelContent';
import Icon from '../icon/index';

var Panel = /*#__PURE__*/function (_Component) {
  _inherits(Panel, _Component);

  var _super = _createSuper(Panel);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function () {
      var _this$props = _this.props,
          onItemClick = _this$props.onItemClick,
          panelKey = _this$props.panelKey;

      if (typeof onItemClick === 'function') {
        onItemClick(panelKey);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.handleItemClick();
      }
    });

    _this.state = {
      isActive: props.isActive,
      panelHeight: ''
    };
    return _this;
  }

  _createClass(Panel, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isActive !== this.props.isActive) {
        this.setPanelHeight();
      }
    } // shouldComponentUpdate(nextProps) {
    //   return !isEqual(this.props, nextProps);
    // }

  }, {
    key: "setPanelHeight",
    value: function setPanelHeight() {
      var isActive = this.props.isActive;

      if (this.panelContentRef) {
        var panelContentRootRef = this.panelContentRef.rootRef;
        this.setState({
          panelHeight: !isActive ? '0px' : "".concat(panelContentRootRef.scrollHeight, "px")
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          id = _this$props2.id,
          style = _this$props2.style,
          prefixCls = _this$props2.prefixCls,
          title = _this$props2.title,
          children = _this$props2.children,
          isActive = _this$props2.isActive,
          showArrow = _this$props2.showArrow,
          destroyInactivePanel = _this$props2.destroyInactivePanel,
          disabled = _this$props2.disabled,
          accordion = _this$props2.accordion,
          forceRender = _this$props2.forceRender,
          expandIcon = _this$props2.expandIcon,
          extra = _this$props2.extra;
      var titleCls = classNames("".concat(prefixCls, "-title"));
      var itemCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-item-active"), isActive), _defineProperty(_classNames, "".concat(prefixCls, "-item-disabled"), disabled), _classNames), className);
      var icon = /*#__PURE__*/React.createElement(Icon, {
        className: "arrow",
        type: "unfold"
      });

      if (showArrow && typeof expandIcon === 'function') {
        icon = expandIcon(this.props);
      }

      return /*#__PURE__*/React.createElement("div", {
        className: itemCls,
        style: style,
        id: id
      }, /*#__PURE__*/React.createElement("div", {
        className: titleCls,
        onClick: this.handleItemClick,
        role: accordion ? 'tab' : 'button',
        "aria-expanded": "".concat(isActive),
        onKeyPress: this.handleKeyPress
      }, showArrow && icon, title, extra && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra)), /*#__PURE__*/React.createElement(PanelContent, {
        ref: function ref(el) {
          return _this2.panelContentRef = el;
        },
        prefixCls: prefixCls,
        isActive: isActive,
        panelHeight: this.state.panelHeight,
        destroyInactivePanel: destroyInactivePanel,
        forceRender: forceRender,
        role: accordion ? 'tabpanel' : null
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isActive !== prevState.isActive) {
        return {
          isActive: nextProps.isActive
        };
      }

      return null;
    }
  }]);

  return Panel;
}(Component);

_defineProperty(Panel, "defaultProps", {
  showArrow: true,
  isActive: false,
  destroyInactivePanel: false,
  onItemClick: function onItemClick() {},
  forceRender: false
});

export { Panel as default };
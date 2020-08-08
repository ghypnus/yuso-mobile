"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIs = require("react-is");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _Panel = _interopRequireDefault(require("./Panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function toArray(activeKey) {
  var currentActiveKey = activeKey;

  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }

  return currentActiveKey.map(function (key) {
    return String(key);
  });
}

var Accordion = /*#__PURE__*/function (_Component) {
  _inherits(Accordion, _Component);

  var _super = _createSuper(Accordion);

  function Accordion(_props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "onClickItem", function (key) {
      var accordion = _this.props.accordion;
      var activeKey = _this.state.activeKey;

      if (accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = _toConsumableArray(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;

        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }

      _this.setActiveKey(activeKey);
    });

    _defineProperty(_assertThisInitialized(_this), "getNewChild", function (child, index) {
      if (!child) return null;
      var activeKey = _this.state.activeKey;
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          accordion = _this$props.accordion,
          destroyInactivePanel = _this$props.destroyInactivePanel,
          expandIcon = _this$props.expandIcon; // If there is no key provide, use the panel order as default key

      var key = child.key || String(index);
      var _child$props = child.props,
          header = _child$props.header,
          headerClass = _child$props.headerClass,
          disabled = _child$props.disabled;
      var isActive = false;

      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      var props = {
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls,
        destroyInactivePanel: destroyInactivePanel,
        accordion: accordion,
        children: child.props.children,
        onItemClick: disabled ? null : _this.onClickItem,
        expandIcon: expandIcon
      };

      if (typeof child.type === 'string') {
        return child;
      }

      return /*#__PURE__*/_react["default"].cloneElement(child, props);
    });

    _defineProperty(_assertThisInitialized(_this), "getItems", function () {
      var children = _this.props.children;
      var childList = (0, _reactIs.isFragment)(children) ? children.props.children : children;

      var newChildren = _react.Children.map(childList, _this.getNewChild);

      if ((0, _reactIs.isFragment)(children)) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, newChildren);
      }

      return newChildren;
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveKey", function (activeKey) {
      var _this$props2 = _this.props,
          accordion = _this$props2.accordion,
          onChange = _this$props2.onChange;

      if (!('activeKey' in _this.props)) {
        _this.setState({
          activeKey: activeKey
        });
      }

      onChange(accordion ? activeKey[0] : activeKey);
    });

    var _activeKey = _props.activeKey,
        defaultActiveKey = _props.defaultActiveKey;
    var currentActiveKey = defaultActiveKey;

    if ('activeKey' in _props) {
      currentActiveKey = _activeKey;
    }

    _this.state = {
      activeKey: toArray(currentActiveKey)
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _isEqual["default"])(this.props, nextProps) || !(0, _isEqual["default"])(this.state, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          className = _this$props3.className,
          style = _this$props3.style,
          accordion = _this$props3.accordion;
      var collapseClassName = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, className, !!className), _classNames));
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: collapseClassName,
        style: style,
        role: accordion ? 'tablist' : null
      }, this.getItems());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};

      if ('activeKey' in nextProps) {
        newState.activeKey = toArray(nextProps.activeKey);
      }

      return newState.activeKey ? newState : null;
    }
  }]);

  return Accordion;
}(_react.Component);

_defineProperty(Accordion, "defaultProps", {
  prefixCls: 'wme-accordion',
  onChange: function onChange() {},
  accordion: false,
  destroyInactivePanel: false
});

Accordion.Panel = _Panel["default"];
var _default = Accordion;
exports["default"] = _default;
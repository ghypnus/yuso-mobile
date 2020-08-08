function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

import React from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { setPxStyle, getTransformPropValue, getPxStyle } from '../_utils/animate';

var DefaultTabBar = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(DefaultTabBar, _React$PureComponent);

  var _super = _createSuper(DefaultTabBar);

  function DefaultTabBar(_props) {
    var _this;

    _classCallCheck(this, DefaultTabBar);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "layout", null);

    _defineProperty(_assertThisInitialized(_this), "onPan", function () {
      var lastOffset = 0;
      var finalOffset = 0;

      var getLastOffset = function getLastOffset() {
        var isVertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.isTabBarVertical();
        var offset = +"".concat(lastOffset).replace('%', '');

        if ("".concat(lastOffset).indexOf('%') >= 0) {
          offset /= 100;
          offset *= isVertical ? _this.layout.clientHeight : _this.layout.clientWidth;
        }

        return offset;
      };

      return {
        onPanStart: function onPanStart() {
          _this.setState({
            isMoving: true
          });
        },
        onPanMove: function onPanMove(status) {
          if (!status.moveStatus || !_this.layout) return;

          var isVertical = _this.isTabBarVertical();

          var offset = getLastOffset() + (isVertical ? status.moveStatus.y : status.moveStatus.x);
          var canScrollOffset = isVertical ? -_this.layout.scrollHeight + _this.layout.clientHeight : -_this.layout.scrollWidth + _this.layout.clientWidth;
          offset = Math.min(offset, 0);
          offset = Math.max(offset, canScrollOffset);
          setPxStyle(_this.layout, offset, 'px', isVertical);
          finalOffset = offset;

          _this.setState({
            showPrev: -offset > 0,
            showNext: offset > canScrollOffset
          });
        },
        onPanEnd: function onPanEnd() {
          var isVertical = _this.isTabBarVertical();

          lastOffset = finalOffset;

          _this.setState({
            isMoving: false,
            transform: getPxStyle(finalOffset, 'px', isVertical)
          });
        },
        setCurrentOffset: function setCurrentOffset(offset) {
          return lastOffset = offset;
        }
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getTransformByIndex", function (props) {
      var activeTab = props.activeTab,
          tabs = props.tabs,
          _props$page = props.page,
          page = _props$page === void 0 ? 0 : _props$page;

      var isVertical = _this.isTabBarVertical();

      var size = _this.getTabSize(page, tabs.length);

      var center = page / 2;
      var pos = Math.min(activeTab, tabs.length - center - 0.5);
      var skipSize = Math.min(-(pos - center + 0.5) * size, 0);

      _this.onPan.setCurrentOffset("".concat(skipSize, "%"));

      return {
        transform: getPxStyle(skipSize, '%', isVertical),
        showPrev: activeTab > center - 0.5 && tabs.length > page,
        showNext: activeTab < tabs.length - center - 0.5 && tabs.length > page
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onPress", function (index) {
      var _this$props = _this.props,
          goToTab = _this$props.goToTab,
          onTabClick = _this$props.onTabClick,
          tabs = _this$props.tabs;
      onTabClick && onTabClick(tabs[index], index);
      goToTab && goToTab(index);
    });

    _defineProperty(_assertThisInitialized(_this), "isTabBarVertical", function () {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.tabBarPosition;
      return position === 'left' || position === 'right';
    });

    _defineProperty(_assertThisInitialized(_this), "renderTab", function (t, i, size, isTabBarVertical) {
      var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          renderTab = _this$props2.renderTab,
          activeTab = _this$props2.activeTab,
          tabBarTextStyle = _this$props2.tabBarTextStyle,
          tabBarActiveTextColor = _this$props2.tabBarActiveTextColor,
          tabBarInactiveTextColor = _this$props2.tabBarInactiveTextColor;

      var textStyle = _objectSpread({}, tabBarTextStyle);

      var cls = "".concat(prefixCls, "-tab");
      var ariaSelected = false;

      if (activeTab === i) {
        cls += " ".concat(cls, "-active");
        ariaSelected = true;

        if (tabBarActiveTextColor) {
          textStyle.color = tabBarActiveTextColor;
        }
      } else if (tabBarInactiveTextColor) {
        textStyle.color = tabBarInactiveTextColor;
      }

      return /*#__PURE__*/React.createElement("div", {
        key: "t_".concat(i),
        style: _objectSpread({}, textStyle, {}, isTabBarVertical ? {
          height: "".concat(size, "%")
        } : {
          width: "".concat(size, "%")
        }),
        id: "m-tabs-".concat(i),
        role: "tab",
        "aria-selected": ariaSelected,
        className: cls,
        onClick: function onClick() {
          return _this.onPress(i);
        }
      }, renderTab ? renderTab(t) : t.title);
    });

    _defineProperty(_assertThisInitialized(_this), "setContentLayout", function (div) {
      _this.layout = div;
    });

    _defineProperty(_assertThisInitialized(_this), "getTabSize", function (page, tabLength) {
      return 100 / Math.min(page, tabLength);
    });

    _this.state = _objectSpread({
      transform: '',
      isMoving: false,
      showPrev: false,
      showNext: false
    }, _this.getTransformByIndex(_props));
    _this.rootEl = document.createElement('div');
    document.body.appendChild(_this.rootEl);
    return _this;
  }

  _createClass(DefaultTabBar, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rootEl) {
        document.body.removeChild(this.rootEl);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.activeTab !== nextProps.activeTab || this.props.tabs !== nextProps.tabs || this.props.tabs.length !== nextProps.tabs.length) {
        this.setState(_objectSpread({}, this.getTransformByIndex(nextProps)));
      }
    }
  }, {
    key: "renderTabBar",
    value: function renderTabBar() {
      var _this2 = this,
          _classnames;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          animated = _this$props3.animated,
          _this$props3$tabs = _this$props3.tabs,
          tabs = _this$props3$tabs === void 0 ? [] : _this$props3$tabs,
          _this$props3$page = _this$props3.page,
          page = _this$props3$page === void 0 ? 0 : _this$props3$page,
          _this$props3$activeTa = _this$props3.activeTab,
          activeTab = _this$props3$activeTa === void 0 ? 0 : _this$props3$activeTa,
          tabBarUnderlineStyle = _this$props3.tabBarUnderlineStyle,
          tabBarPosition = _this$props3.tabBarPosition,
          renderUnderline = _this$props3.renderUnderline,
          affix = _this$props3.affix,
          affixTop = _this$props3.affixTop;
      var _this$state = this.state,
          isMoving = _this$state.isMoving,
          transform = _this$state.transform,
          showNext = _this$state.showNext,
          showPrev = _this$state.showPrev;
      var isTabBarVertical = this.isTabBarVertical();
      var needScroll = tabs.length > page;
      var size = this.getTabSize(page, tabs.length);
      var Tabs = tabs.map(function (t, i) {
        return _this2.renderTab(t, i, size, isTabBarVertical);
      });
      var cls = classnames(prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-animated"), animated && !isMoving), _defineProperty(_classnames, "".concat(prefixCls, "-affix"), affix), _classnames));
      var style = {}; // const style = {
      //   backgroundColor: tabBarBackgroundColor || '',
      // };

      if (affix) {
        style.top = "".concat(affixTop, "px");
      }

      var transformStyle = needScroll ? _objectSpread({}, getTransformPropValue(transform)) : {};

      var _this$onPan = this.onPan,
          setCurrentOffset = _this$onPan.setCurrentOffset,
          onPan = _objectWithoutProperties(_this$onPan, ["setCurrentOffset"]);

      var underlineProps = {
        style: _objectSpread({}, isTabBarVertical ? {
          height: "".concat(size, "%")
        } : {
          width: "".concat(size, "%")
        }, {}, isTabBarVertical ? {
          top: "".concat(size * activeTab, "%")
        } : {
          left: "".concat(size * activeTab, "%")
        }, {}, tabBarUnderlineStyle),
        className: "".concat(prefixCls, "-underline")
      };
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cls, " ").concat(prefixCls, "-").concat(tabBarPosition),
        style: style
      }, showPrev && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-prevpage")
      }), /*#__PURE__*/React.createElement("div", {
        role: "tablist",
        className: "".concat(prefixCls, "-content"),
        style: transformStyle,
        ref: this.setContentLayout
      }, Tabs, renderUnderline ? renderUnderline(underlineProps) : /*#__PURE__*/React.createElement("div", underlineProps)), showNext && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-nextpage")
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var affix = this.props.affix;
      return affix ? /*#__PURE__*/createPortal(this.renderTabBar(), this.rootEl) : this.renderTabBar();
    }
  }]);

  return DefaultTabBar;
}(React.PureComponent);

_defineProperty(DefaultTabBar, "defaultProps", {
  prefixCls: 'yuso-tabs-tab-bar',
  animated: true,
  tabs: [],
  goToTab: function goToTab() {},
  activeTab: 0,
  page: 5,
  affix: false,
  affixTop: 0,
  tabBarUnderlineStyle: {},
  // tabBarBackgroundColor: '#FFF',
  tabBarActiveTextColor: '',
  tabBarInactiveTextColor: '',
  tabBarTextStyle: {}
});

export { DefaultTabBar as default };
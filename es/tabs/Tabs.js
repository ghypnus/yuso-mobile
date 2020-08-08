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

import React, { Component } from 'react';
import TabPane from './TabPane';
import DefaultTabBar from './DefaultTabBar';
import { getTransformPropValue, setTransform, setPxStyle } from '../_utils/animate';

var getPanDirection = function getPanDirection(direction) {
  switch (direction) {
    case 2:
    case 4:
      return 'horizontal';

    case 8:
    case 16:
      return 'vertical';

    default:
      return 'none';
  }
};

var YusoTabs = /*#__PURE__*/function (_Component) {
  _inherits(YusoTabs, _Component);

  var _super = _createSuper(YusoTabs);

  function YusoTabs(props) {
    var _this;

    _classCallCheck(this, YusoTabs);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "tabCache", {});

    _defineProperty(_assertThisInitialized(_this), "layout", null);

    _defineProperty(_assertThisInitialized(_this), "onPan", function () {
      var lastOffset = 0;
      var finalOffset = 0;
      var panDirection = null;

      var getLastOffset = function getLastOffset() {
        var isVertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.isTabVertical();
        var offset = +"".concat(lastOffset).replace('%', '');

        if ("".concat(lastOffset).indexOf('%') >= 0) {
          offset /= 100;
          offset *= isVertical ? _this.layout.clientHeight : _this.layout.clientWidth;
        }

        return offset;
      };

      return {
        onPanStart: function onPanStart(status) {
          if (!_this.props.swipeable || !_this.props.animated) return;
          panDirection = getPanDirection(status.direction);

          _this.setState({
            isMoving: true
          });
        },
        onPanMove: function onPanMove(status) {
          var _this$props = _this.props,
              swipeable = _this$props.swipeable,
              animated = _this$props.animated,
              useLeftInsteadTransform = _this$props.useLeftInsteadTransform;
          if (!status.moveStatus || !_this.layout || !swipeable || !animated) return;

          var isVertical = _this.isTabVertical();

          var offset = getLastOffset();

          if (isVertical) {
            offset += panDirection === 'horizontal' ? 0 : status.moveStatus.y;
          } else {
            offset += panDirection === 'vertical' ? 0 : status.moveStatus.x;
          }

          var canScrollOffset = isVertical ? -_this.layout.scrollHeight + _this.layout.clientHeight : -_this.layout.scrollWidth + _this.layout.clientWidth;
          offset = Math.min(offset, 0);
          offset = Math.max(offset, canScrollOffset);
          setPxStyle(_this.layout, offset, 'px', isVertical, useLeftInsteadTransform);
          finalOffset = offset;
        },
        onPanEnd: function onPanEnd() {
          if (!_this.props.swipeable || !_this.props.animated) return;
          lastOffset = finalOffset;

          var isVertical = _this.isTabVertical();

          var offsetIndex = _this.getOffsetIndex(finalOffset, isVertical ? _this.layout.clientHeight : _this.layout.clientWidth);

          _this.setState({
            isMoving: false
          });

          if (offsetIndex === _this.state.currentTab) {
            if (_this.props.usePaged) {
              setTransform(_this.layout.style, _this.getContentPosByIndex(offsetIndex, _this.isTabVertical(), _this.props.useLeftInsteadTransform));
            }
          } else {
            _this.goToTab(offsetIndex);
          }
        },
        setCurrentOffset: function setCurrentOffset(offset) {
          return lastOffset = offset;
        }
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "isTabVertical", function () {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.tabDirection;
      return direction === 'vertical';
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipe", function (status) {
      var _this$props2 = _this.props,
          tabBarPosition = _this$props2.tabBarPosition,
          swipeable = _this$props2.swipeable,
          usePaged = _this$props2.usePaged;
      if (!swipeable || !usePaged || _this.isTabVertical()) return; // DIRECTION_NONE	1
      // DIRECTION_LEFT	2
      // DIRECTION_RIGHT	4
      // DIRECTION_UP	8
      // DIRECTION_DOWN	16
      // DIRECTION_HORIZONTAL	6
      // DIRECTION_VERTICAL	24
      // DIRECTION_ALL	30

      switch (tabBarPosition) {
        case 'top':
        case 'bottom':
          switch (status.direction) {
            case 2:
              if (!_this.isTabVertical()) {
                _this.goToTab(_this.prevCurrentTab + 1);
              }

              break;

            case 8:
              if (_this.isTabVertical()) {
                _this.goToTab(_this.prevCurrentTab + 1);
              }

              break;

            case 4:
              if (!_this.isTabVertical()) {
                _this.goToTab(_this.prevCurrentTab - 1);
              }

              break;

            case 16:
              if (_this.isTabVertical()) {
                _this.goToTab(_this.prevCurrentTab - 1);
              }

              break;
          }

          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setContentLayout", function (div) {
      _this.layout = div;
    });

    _defineProperty(_assertThisInitialized(_this), "getSubElements", function () {
      var children = _this.props.children;
      var subElements = {};
      return function () {
        var defaultPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$i$-';
        var allPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$ALL$';

        if (Array.isArray(children)) {
          children.forEach(function (child, index) {
            if (child.key) {
              subElements[child.key] = child;
            }

            subElements["".concat(defaultPrefix).concat(index)] = child;
          });
        } else if (children) {
          subElements[allPrefix] = children;
        }

        return subElements;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getSubElement", function (tab, index) {
      var subElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (defaultPrefix, allPrefix) {};
      var defaultPrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '$i$-';
      var allPrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '$ALL$';
      var key = tab.key || "".concat(defaultPrefix).concat(index);
      var elements = subElements(defaultPrefix, allPrefix);
      var component = elements[key] || elements[allPrefix];

      if (component instanceof Function) {
        component = component(tab, index);
      }

      return component || null;
    });

    _defineProperty(_assertThisInitialized(_this), "shouldRenderTab", function (idx) {
      var _this$props$prerender = _this.props.prerenderingSiblingsNumber,
          prerenderingSiblingsNumber = _this$props$prerender === void 0 ? 0 : _this$props$prerender;
      var _this$state$currentTa = _this.state.currentTab,
          currentTab = _this$state$currentTa === void 0 ? 0 : _this$state$currentTa;
      return currentTab - prerenderingSiblingsNumber <= idx && idx <= currentTab + prerenderingSiblingsNumber;
    });

    _this.state = {
      isMoving: false,
      currentTab: _this.getTabIndex(props),
      contentPos: _this.getContentPosByIndex(_this.getTabIndex(props), _this.isTabVertical(props.tabDirection), props.useLeftInsteadTransform)
    };
    return _this;
  }

  _createClass(YusoTabs, [{
    key: "getTabBarBaseProps",
    value: function getTabBarBaseProps() {
      var currentTab = this.state.currentTab;
      var _this$props3 = this.props,
          animated = _this$props3.animated,
          onTabClick = _this$props3.onTabClick,
          tabBarActiveTextColor = _this$props3.tabBarActiveTextColor,
          tabBarBackgroundColor = _this$props3.tabBarBackgroundColor,
          tabBarInactiveTextColor = _this$props3.tabBarInactiveTextColor,
          tabBarPosition = _this$props3.tabBarPosition,
          tabBarTextStyle = _this$props3.tabBarTextStyle,
          tabBarUnderlineStyle = _this$props3.tabBarUnderlineStyle,
          tabs = _this$props3.tabs,
          affix = _this$props3.affix,
          affixTop = _this$props3.affixTop;
      return {
        activeTab: currentTab,
        animated: !!animated,
        goToTab: this.tabClickGoToTab.bind(this),
        onTabClick: onTabClick,
        tabBarActiveTextColor: tabBarActiveTextColor,
        tabBarBackgroundColor: tabBarBackgroundColor,
        tabBarInactiveTextColor: tabBarInactiveTextColor,
        tabBarPosition: tabBarPosition,
        tabBarTextStyle: tabBarTextStyle,
        tabBarUnderlineStyle: tabBarUnderlineStyle,
        tabs: tabs,
        affix: affix,
        affixTop: affixTop,
        instanceId: this.instanceId
      };
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex(props) {
      var page = props.page,
          initialPage = props.initialPage,
          tabs = props.tabs;
      var param = (page !== undefined ? page : initialPage) || 0;
      var index = 0;

      if (typeof param === 'string') {
        tabs.forEach(function (t, i) {
          if (t.key === param) {
            index = i;
          }
        });
      } else {
        index = param || 0;
      }

      return index < 0 ? 0 : index;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.page !== prevState.page) {
        this.goToTab(this.getTabIndex(this.props), true, {}, this.props);
      }
    }
  }, {
    key: "goToTab",
    value: function goToTab(index) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var usePaged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.usePaged;
      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props;
      var tabDirection = props.tabDirection,
          useLeftInsteadTransform = props.useLeftInsteadTransform;
      var newState = {};

      if (usePaged) {
        newState = {
          contentPos: this.getContentPosByIndex(index, this.isTabVertical(tabDirection), useLeftInsteadTransform)
        };
      }

      if (!force && this.nextCurrentTab === index) {
        return false;
      }

      this.nextCurrentTab = index;
      var tabs = props.tabs,
          onChange = props.onChange;

      if (index >= 0 && index < tabs.length) {
        if (!force) {
          if (onChange) {
            onChange(tabs[index], index);
          }

          if (props.page !== undefined) {
            return false;
          }
        }

        this.setState(_objectSpread({
          currentTab: index
        }, newState));
      }

      return true;
    }
  }, {
    key: "tabClickGoToTab",
    value: function tabClickGoToTab(index) {
      this.goToTab(index, false, true);
    }
  }, {
    key: "getContentPosByIndex",
    value: function getContentPosByIndex(index, isVertical) {
      var useLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var value = "".concat(-index * 100, "%");
      this.onPan.setCurrentOffset(value);

      if (useLeft) {
        return "".concat(value);
      }

      var translate = isVertical ? "0px, ".concat(value) : "".concat(value, ", 0px"); // fix: content overlay TabBar on iOS 10. ( 0px -> 1px )

      return "translate3d(".concat(translate, ", 1px)");
    }
  }, {
    key: "renderTabBar",
    value: function renderTabBar(tabBarProps, DefaultTabBar) {
      var renderTabBar = this.props.renderTabBar;

      if (renderTabBar === false) {
        return null;
      }

      if (renderTabBar) {
        // return React.cloneElement(this.props.renderTabBar(props), props);
        return renderTabBar(tabBarProps);
      }

      return /*#__PURE__*/React.createElement(DefaultTabBar, tabBarProps);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var getSubElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSubElements();
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          tabs = _this$props4.tabs,
          animated = _this$props4.animated,
          destroyInactiveTab = _this$props4.destroyInactiveTab,
          useLeftInsteadTransform = _this$props4.useLeftInsteadTransform;
      var _this$state = this.state,
          currentTab = _this$state.currentTab,
          isMoving = _this$state.isMoving,
          contentPos = _this$state.contentPos;
      var isTabVertical = this.isTabVertical();
      var contentCls = "".concat(prefixCls, "-content-wrap");

      if (animated && !isMoving) {
        contentCls += " ".concat(contentCls, "-animated");
      }

      var contentStyle = animated ? useLeftInsteadTransform ? _objectSpread({
        position: 'relative'
      }, this.isTabVertical() ? {
        top: contentPos
      } : {
        left: contentPos
      }) : getTransformPropValue(contentPos) : _objectSpread({
        position: 'relative'
      }, this.isTabVertical() ? {
        top: "".concat(-currentTab * 100, "%")
      } : {
        left: "".concat(-currentTab * 100, "%")
      });
      return /*#__PURE__*/React.createElement("div", {
        className: contentCls,
        style: contentStyle,
        key: "tabWrap",
        ref: this.setContentLayout
      }, tabs.map(function (tab, index) {
        var cls = "".concat(prefixCls, "-pane-wrap");

        if (_this2.state.currentTab === index) {
          cls += " ".concat(cls, "-active");
        } else {
          cls += " ".concat(cls, "-inactive");
        }

        var key = tab.key || "tab_".concat(index); // update tab cache

        if (_this2.shouldRenderTab(index)) {
          _this2.tabCache[index] = _this2.getSubElement(tab, index, getSubElements);
        } else if (destroyInactiveTab) {
          _this2.tabCache[index] = undefined;
        }

        return /*#__PURE__*/React.createElement(TabPane, {
          key: key,
          className: cls,
          active: currentTab === index,
          role: "tabpanel",
          "aria-hidden": currentTab !== index,
          fixX: isTabVertical,
          fixY: !isTabVertical
        }, _this2.tabCache[index]);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          tabBarPosition = _this$props5.tabBarPosition,
          tabDirection = _this$props5.tabDirection,
          useOnPan = _this$props5.useOnPan,
          noRenderContent = _this$props5.noRenderContent;
      var isTabVertical = this.isTabVertical(tabDirection);

      var tabBarProps = _objectSpread({}, this.getTabBarBaseProps());

      var onPan = !isTabVertical && useOnPan ? this.onPan : {};
      var content = [/*#__PURE__*/React.createElement("div", {
        key: "tabBar",
        className: "".concat(prefixCls, "-tab-bar-wrap")
      }, this.renderTabBar(tabBarProps, DefaultTabBar)), !noRenderContent && this.renderContent()];
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, " ").concat(prefixCls, "-").concat(tabDirection, " ").concat(prefixCls, "-").concat(tabBarPosition)
      }, tabBarPosition === 'top' || tabBarPosition === 'left' ? content : content.reverse());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.page !== prevState.page) {
        return {
          page: nextProps.page
        };
      }

      return null;
    }
  }]);

  return YusoTabs;
}(Component);

_defineProperty(YusoTabs, "DefaultTabBar", DefaultTabBar);

_defineProperty(YusoTabs, "defaultProps", {
  tabBarPosition: 'top',
  initialPage: 0,
  swipeable: true,
  animated: true,
  prerenderingSiblingsNumber: 1,
  tabs: [],
  destroyInactiveTab: false,
  usePaged: true,
  tabDirection: 'horizontal',
  distanceToChangeTab: 0.3,
  prefixCls: 'yuso-tabs',
  useOnPan: true
});

export { YusoTabs as default };
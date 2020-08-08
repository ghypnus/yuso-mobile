"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../icon/index"));

var _index2 = _interopRequireDefault(require("../scroller/index"));

var _HrContext = require("../locale-provider/HrContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var MAX_PULL_DISTANCE = 22.5;
var MIN_PULL_DISTANCE = 10; // function Indicator(scroller, options) {
//   this.wrapper = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;
//   this.wrapperStyle = this.wrapper.style;
//   this.indicator = this.wrapper.children[0];
//   this.indicatorStyle = this.indicator.style;
//   this.scroller = scroller;
//   this.options = {
//     listenX: true,
//     listenY: true,
//     interactive: false,
//     resize: true,
//     defaultScrollbars: false,
//     shrink: false,
//     fade: false,
//     speedRatioX: 0,
//     speedRatioY: 0,
//   };
//   for (const i in options) {
//     this.options[i] = options[i];
//   }
//   this.sizeRatioX = 1;
//   this.sizeRatioY = 1;
//   this.maxPosX = 0;
//   this.maxPosY = 0;
//   if (this.options.interactive) {
//     if (!this.options.disableTouch) {
//       utils.addEvent(this.indicator, 'touchstart', this);
//       // utils.addEvent(window, 'touchend', this); edit by john.gao 事件对移动端无效
//     }
//     if (!this.options.disablePointer) {
//       utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
//       utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
//     }
//     if (!this.options.disableMouse) {
//       utils.addEvent(this.indicator, 'mousedown', this);
//       utils.addEvent(window, 'mouseup', this);
//     }
//   }
//   if (this.options.fade) {
//     this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
//     this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
//     this.wrapperStyle.opacity = '0';
//   }
// }

var PullToRefresh = /*#__PURE__*/function (_React$Component) {
  _inherits(PullToRefresh, _React$Component);

  var _super = _createSuper(PullToRefresh);

  function PullToRefresh(props) {
    var _this;

    _classCallCheck(this, PullToRefresh);

    _this = _super.call(this, props);
    _this.state = {
      pullDownLabel: ''
    };
    return _this;
  }

  _createClass(PullToRefresh, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.indicator) {
        this.indicator.destroy();
        this.indicator = null;
      }
    }
  }, {
    key: "beforeScrollComplete",
    value: function beforeScrollComplete(scrollX, scrollY, locale) {
      var _this$props = this.props,
          onPullDown = _this$props.onPullDown,
          beforeScrollComplete = _this$props.beforeScrollComplete;

      if (onPullDown) {
        this.onPullDown(scrollY, locale);
      }

      if (beforeScrollComplete) {
        beforeScrollComplete(scrollY);
      }
    }
  }, {
    key: "scrollComplete",
    value: function scrollComplete(scrollX, scrollY) {
      var _this$props2 = this.props,
          onPullUp = _this$props2.onPullUp,
          scrollComplete = _this$props2.scrollComplete;

      if (onPullUp) {
        this.onPullUp(scrollY);
      }

      if (scrollComplete) {
        scrollComplete(scrollY);
      }
    }
  }, {
    key: "onPullDown",
    value: function onPullDown(scrollY, locale) {
      if (scrollY < -MAX_PULL_DISTANCE) {
        this.setState({
          pullDownLabel: locale.loadingLabel
        });

        if (this.props.onPullDown) {
          this.props.onPullDown(this);
        }
      } else if (scrollY < -MIN_PULL_DISTANCE) {
        this.onPullDownComplete(100);
      }
    }
  }, {
    key: "onPullDownComplete",
    value: function onPullDownComplete(time) {
      var _this2 = this;

      if (!this.pullDownRef) return;
      setTimeout(function () {
        _this2.pullDownRef.style.marginTop = '-45px';
        setTimeout(function () {
          _this2.setState({
            pullDownLabel: ''
          });
        }, 300);
      }, time || 600);
    }
  }, {
    key: "onPullUp",
    value: function onPullUp(scrollY) {
      var maxScrollY = this.scroller.getMaxScrollY();

      if (scrollY - maxScrollY >= -MAX_PULL_DISTANCE) {
        if (this.props.onPullUp) {
          this.props.onPullUp(this);
        }
      }
    }
  }, {
    key: "onPullUpComplete",
    value: function onPullUpComplete() {
      var maxScrollY = this.scroller.getMaxScrollY(); // setTimeout(_ => {
      //   this.scroller.scrollTo(0, (maxScrollY > 0 ? maxScrollY : 0) - 45);
      // }, 600)
    }
  }, {
    key: "onScrollChange",
    value: function onScrollChange(scrollY, locale) {
      var scrollChange = this.props.scrollChange;
      var maxScrollY = this.scroller.getMaxScrollY();

      if (scrollY < 0) {
        var distance = Math.abs(scrollY) > MAX_PULL_DISTANCE ? MAX_PULL_DISTANCE : Math.abs(scrollY);
        this.pullDownRef.style.marginTop = "".concat(distance - MAX_PULL_DISTANCE, "px");

        if (distance === MAX_PULL_DISTANCE) {
          this.setState({
            pullDownLabel: locale.releaseLabel
          });
        }
      } else if (scrollY > maxScrollY) {
        var _distance = Math.abs(scrollY) - maxScrollY > MAX_PULL_DISTANCE ? MAX_PULL_DISTANCE : Math.abs(scrollY) - maxScrollY;

        this.pullUpRef.style.bottom = "-".concat(_distance + MAX_PULL_DISTANCE, "px");
      }

      if (scrollChange) {
        scrollChange(scrollY);
      }
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      this.scroller.scrollTo(0, 0);
    }
  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      var maxScrollY = Math.abs(this.scroller.getMaxScrollY());
      this.scroller.scrollTo(0, maxScrollY);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(x, y) {
      this.scroller.scrollTo(x, y);
    }
  }, {
    key: "getScrollY",
    value: function getScrollY() {
      return this.scroller.getScrollY();
    }
  }, {
    key: "getScrollX",
    value: function getScrollX() {
      return this.scroller.getScrollX();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.scroller.refresh();
    }
  }, {
    key: "initIndicators",
    value: function initIndicators() {
      var _this3 = this;

      var scrollbars = this.props.scrollbars;
      var indicator;

      if (scrollbars) {
        // Vertical scrollbar 纵向
        indicator = {
          el: this.scrollbarRef,
          interactive: interactive,
          defaultScrollbars: true,
          customStyle: customStyle,
          resize: this.options.resizeScrollbars,
          shrink: this.options.shrinkScrollbars,
          fade: this.options.fadeScrollbars,
          listenX: false,
          disablePointer: this.options.disablePointer,
          disableMouse: this.options.disableMouse
        };
      }

      this.indicator = new Indicator(this, indicator);

      if (this.options.fadeScrollbars) {
        this.on('scrollEnd', function () {
          // todo 隐藏滚动条
          _this3.indicator.fade();
        });
        this.on('scrollCancel', function () {
          // todo 隐藏滚动条
          _this3.fade();
        });
        this.on('scrollStart', function () {
          // todo 隐藏滚动条
          _this3.fade(1);
        });
        this.on('beforeScrollStart', function () {
          // todo 隐藏滚动条
          this.fade(1, true);
        });
      }

      this.on('refresh', function () {
        // todo 刷新
        this.refresh();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          children = _this$props3.children,
          onPullDown = _this$props3.onPullDown,
          onPullUp = _this$props3.onPullUp,
          _this$props3$style = _this$props3.style,
          style = _this$props3$style === void 0 ? {} : _this$props3$style,
          startX = _this$props3.startX,
          startY = _this$props3.startY,
          _scroll = _this$props3.scroll;
      var pullDownLabel = this.state.pullDownLabel;
      var top = style.top,
          height = style.height;

      var newStyle = _objectSpread({}, style);

      if (top && !height) {
        newStyle.height = "calc(100% - ".concat(top, ")");
      }

      return /*#__PURE__*/_react["default"].createElement(_HrContext.Consumer, null, function (_ref) {
        var PullToRefresh = _ref.PullToRefresh;
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: newStyle,
          className: prefixCls
        }, /*#__PURE__*/_react["default"].createElement(_index2["default"], {
          ref: function ref(comp) {
            return _this4.scroller = comp;
          },
          startX: startX,
          startY: startY,
          scrollX: false,
          scrollY: true,
          scroll: function scroll(scrollX, scrollY) {
            if (_scroll) {
              _scroll(scrollX, scrollY);
            }
          },
          onScrollChange: function onScrollChange(scrollY) {
            return _this4.onScrollChange(scrollY, PullToRefresh);
          },
          beforeScrollComplete: function beforeScrollComplete(scrollX, scrollY) {
            return _this4.beforeScrollComplete(scrollX, scrollY, PullToRefresh);
          },
          scrollComplete: function scrollComplete(scrollX, scrollY) {
            return _this4.scrollComplete(scrollX, scrollY, PullToRefresh);
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          ref: function ref(el) {
            return _this4.pullDownRef = el;
          },
          style: {
            display: onPullDown ? 'flex' : 'none'
          },
          className: (0, _classnames["default"])("".concat(prefixCls, "-down"))
        }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
          type: "loading",
          className: "loading"
        }), /*#__PURE__*/_react["default"].createElement("span", {
          ref: function ref(el) {
            return _this4.pullDownLabelRef = el;
          },
          className: "label"
        }, pullDownLabel || PullToRefresh.downLabel)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-wrapper")
        }, children), /*#__PURE__*/_react["default"].createElement("div", {
          ref: function ref(el) {
            return _this4.pullUpRef = el;
          },
          style: {
            display: onPullUp ? 'flex' : 'none'
          },
          className: "".concat(prefixCls, "-up")
        }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
          type: "loading",
          className: "loading"
        }))));
      });
    }
  }]);

  return PullToRefresh;
}(_react["default"].Component);

exports["default"] = PullToRefresh;

_defineProperty(PullToRefresh, "defaultProps", {
  prefixCls: 'wme-pull-to-refresh',
  startX: 0,
  startY: 0,
  scrollbars: true // 是否有滚动条

});
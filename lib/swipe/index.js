"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _swipeJsIso = _interopRequireDefault(require("swipe-js-iso"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../icon/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var Swipe = /*#__PURE__*/function (_React$Component) {
  _inherits(Swipe, _React$Component);

  var _super = _createSuper(Swipe);

  /**
   * indicator 是否显示指示器
   *
   * swipeOptions 参数说明
   * @param {number}  startSlide    默认选中
   * @param {number}  speed     速度
   * @param {bool}    auto      是否自动播放
   * @param {bool}    continuous    是否循环轮播
   * @param {bool}    disableScroll 是否禁用滚动
   * @param {bool}    stopPropagation 是否阻止冒泡
   * @param {func}    swiping     ？
   * @param {func}    callback    轮播切换
   * @param {func}    transitionEnd 切换结束
   *
   * style 参数说明
   * container
   * wrapper
   * child
   *
   * id
   * className
   * childCount
   */
  function Swipe(props) {
    var _this;

    _classCallCheck(this, Swipe);

    _this = _super.call(this, props);
    _this.state = {
      currentIndex: props.startSlide || 0
    };
    return _this;
  }

  _createClass(Swipe, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.swipe.kill();
      this.swipe = null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var swipeOptions = this.props.swipeOptions;

      var _callback = swipeOptions.callback,
          restPorps = _objectWithoutProperties(swipeOptions, ["callback"]);

      this.swipe = (0, _swipeJsIso["default"])(this.container, _objectSpread({}, restPorps, {
        callback: function callback(index) {
          _this2.setState({
            currentIndex: index
          });

          if (_callback) _callback(index);
        }
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      var _this$props = this.props,
          childCount = _this$props.childCount,
          swipeOptions = _this$props.swipeOptions;

      if (prevProps.childCount !== childCount) {
        this.swipe.kill();

        var _callback2 = swipeOptions.callback,
            restPorps = _objectWithoutProperties(swipeOptions, ["callback"]);

        this.swipe = (0, _swipeJsIso["default"])(this.container, _objectSpread({}, restPorps, {
          callback: function callback(index) {
            _this3.setState({
              currentIndex: index
            });

            if (_callback2) _callback2(index);
          }
        }));
      }
    }
  }, {
    key: "next",
    value: function next() {
      this.swipe.next();
    }
  }, {
    key: "prev",
    value: function prev() {
      this.swipe.prev();
    }
  }, {
    key: "slide",
    value: function slide() {
      var _this$swipe;

      (_this$swipe = this.swipe).slide.apply(_this$swipe, arguments);
    }
  }, {
    key: "getPos",
    value: function getPos() {
      return this.swipe.getPos();
    }
  }, {
    key: "getNumSlides",
    value: function getNumSlides() {
      return this.swipe.getNumSlides();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          defaultStyle = _this$props2.defaultStyle,
          _this$props2$style = _this$props2.style,
          style = _this$props2$style === void 0 ? {} : _this$props2$style,
          children = _this$props2.children,
          prefixCls = _this$props2.prefixCls,
          indicator = _this$props2.indicator,
          showCloseBtn = _this$props2.showCloseBtn,
          close = _this$props2.close;
      var syl = {
        container: _objectSpread({}, defaultStyle.container, {}, style.container),
        wrapper: _objectSpread({}, defaultStyle.wrapper, {}, style.wrapper),
        child: _objectSpread({}, defaultStyle.child, {}, style.child),
        pagination: style && style.pagination || null
      };
      var wrapCls = (0, _classnames2["default"])(prefixCls, className);
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: id,
        ref: function ref(container) {
          return _this4.container = container;
        },
        className: wrapCls,
        style: syl.container
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: syl.wrapper
      }, _react["default"].Children.map(children, function (child) {
        if (!child) {
          return null;
        }

        var childStyle = child.props.style ? _objectSpread({}, syl.child, {}, child.props.style) : syl.child;
        return /*#__PURE__*/_react["default"].cloneElement(child, {
          style: childStyle
        });
      })), showCloseBtn && /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick(_) {
          close && close();
        },
        className: "".concat(prefixCls, "-close")
      }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
        type: "delete_fill"
      })), indicator && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-pagination"),
        style: syl.pagination
      }, _react["default"].Children.map(children, function (child, index) {
        var childCls = (0, _classnames2["default"])("".concat(prefixCls, "-pagination-bullet"), _defineProperty({}, "".concat(prefixCls, "-pagination-bullet-active"), _this4.state.currentIndex === index));
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: childCls
        });
      })));
    }
  }]);

  return Swipe;
}(_react["default"].Component);

exports["default"] = Swipe;

_defineProperty(Swipe, "defaultProps", {
  prefixCls: 'yuso-swipe',
  swipeOptions: {},
  defaultStyle: {
    container: {
      overflow: 'hidden',
      visibility: 'hidden',
      position: 'relative'
    },
    wrapper: {
      overflow: 'hidden',
      position: 'relative'
    },
    child: {
      "float": 'left',
      width: '100%',
      position: 'relative',
      transitionProperty: 'transform'
    }
  },
  childCount: 0
});
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

/**
 * Scroller
 * @author john.gao
 */
import React from 'react';
var utils = {
  ease: {
    circular: {
      style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
      // 0.075, 0.82, 0.165, 1
      fn: function fn(k) {
        return Math.sqrt(1 - --k * k);
      }
    }
  },
  momentum: function momentum(current, start, time, lowerMargin, wrapperSize, deceleration) {
    var distance = current - start;
    var speed = Math.abs(distance) / time;
    var destination;
    var duration;
    destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
    duration = speed / deceleration;

    if (destination > lowerMargin) {
      // 超过底部
      destination = wrapperSize ? lowerMargin + wrapperSize / 2.5 * (speed / 8) : lowerMargin;
      distance = Math.abs(destination - current);
      duration = distance / speed;
    } else if (destination < 0) {
      // 超过顶部
      destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
      distance = Math.abs(current) + destination;
      duration = distance / speed;
    }

    return {
      destination: Math.round(destination),
      duration: duration
    };
  }
}; // todo scrollTo 方法如何开放出来

var Scroller = /*#__PURE__*/function (_React$Component) {
  _inherits(Scroller, _React$Component);

  var _super = _createSuper(Scroller);

  function Scroller(props) {
    var _this;

    _classCallCheck(this, Scroller);

    _this = _super.call(this, props);

    _this._init();

    return _this;
  }

  _createClass(Scroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          startX = _this$props.startX,
          startY = _this$props.startY;

      this._initEvents();

      this.scrollTo(startX, startY, 0);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rootRef) {
        this.rootRef.removeEventListener('touchstart', this.touchStartEvent.bind(this));
        this.rootRef.removeEventListener('touchend', this.touchEndEvent.bind(this));
        this.rootRef.removeEventListener('touchcancel', this.touchCancelEvent.bind(this));
        this.rootRef.removeEventListener('touchmove', this.touchMoveEvent.bind(this));
      }
    }
  }, {
    key: "_init",
    value: function _init() {
      this.scrollX = -1; // x轴滚动距离

      this.scrollY = -1; // y轴滚动距离

      this.startX = 0;
      this.startY = 0;
      this.pointX = 0;
      this.pointY = 0;
      this.isMoving = false;
      this.directionLocked = 0; // 方向锁定

      this.hasHorizontalScroll = this.props.scrollX; // 是否支持横线滚动

      this.hasVerticalScroll = this.props.scrollY; // 是否支持纵向滚动

      this.freeScroll = this.props.freeScroll;
      this.endTime = 0;
    }
  }, {
    key: "_initEvents",
    value: function _initEvents() {
      var passiveSupported = this.passiveSupported();
      var willPreventDefault = passiveSupported ? {
        passive: false
      } : false;
      var willNotPreventDefault = passiveSupported ? {
        passive: true
      } : false;
      this.rootRef = this.contentRef.parentNode;
      this.rootRef.addEventListener('touchstart', this.touchStartEvent.bind(this), willNotPreventDefault);
      this.rootRef.addEventListener('touchend', this.touchEndEvent.bind(this), willNotPreventDefault);
      this.rootRef.addEventListener('touchcancel', this.touchCancelEvent.bind(this), willNotPreventDefault);
      this.rootRef.addEventListener('touchmove', this.touchMoveEvent.bind(this), willPreventDefault);
      this.rootRef.addEventListener('transitionend', this.transitionEndEvent.bind(this), willNotPreventDefault); // this.rootRef.addEventListener('mousemove', this.mouseMoveEvent.bind(this), willPreventDefault);
      // this.rootRef.addEventListener('mousedown', this.mouseDownEvent.bind(this), willNotPreventDefault);
    }
  }, {
    key: "touchStartEvent",
    value: function touchStartEvent(evt) {
      var touch = evt.touches[0];

      this._start(evt, touch.screenX, touch.screenY);
    }
  }, {
    key: "touchMoveEvent",
    value: function touchMoveEvent(evt) {
      var touch = evt.touches[0];

      this._move(evt, touch.screenX, touch.screenY);
    }
  }, {
    key: "touchEndEvent",
    value: function touchEndEvent(evt) {
      this._end();
    }
  }, {
    key: "touchCancelEvent",
    value: function touchCancelEvent(evt) {
      this._end();
    }
  }, {
    key: "transitionEndEvent",
    value: function transitionEndEvent(evt) {
      this._transitionEnd(evt);
    }
  }, {
    key: "passiveSupported",
    value: function passiveSupported() {
      var passiveSupported = false;

      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', null, options);
      } catch (err) {}

      return passiveSupported;
    }
  }, {
    key: "_animate",
    value: function _animate(destX, destY, time, easingFn) {
      var _this2 = this;

      var bounceTime = this.props.bounceTime;
      var startX = this.scrollX;
      var startY = this.scrollY;
      var startTime = this.getTime();
      var destTime = startTime + time;

      var step = function step() {
        var now = _this2.getTime();

        var newX;
        var newY;
        var easing;

        if (now >= destTime) {
          _this2.isAnimating = false;

          _this2._translate(destX, destY);

          if (!_this2.resetPosition(bounceTime)) {
            _this2.onScrollComplete();
          }

          return;
        }

        now = (now - startTime) / time;
        easing = easingFn(now);
        newX = (destX - startX) * easing + startX;
        newY = (destY - startY) * easing + startY;

        _this2._translate(newX, newY);

        if (_this2.isAnimating) {
          requestAnimationFrame(step);
        }
      };

      this.isAnimating = true;
      step();
    }
  }, {
    key: "_translate",
    value: function _translate(x, y) {
      var scroll = this.props.scroll;

      if (this.contentRef) {
        this.contentRef.style.transform = "translate3d(".concat(-x, "px,").concat(-y, "px, 0)");
        this.scrollX = x;
        this.scrollY = y;

        if (scroll) {
          scroll(this.scrollX, this.scrollY);
        }
      }
    }
  }, {
    key: "getMaxScrollY",
    value: function getMaxScrollY() {
      var wrapperHeight = this.rootRef.clientHeight;
      var scrollerHeight = this.contentRef ? this.contentRef.offsetHeight : 0;
      var maxScrollY = scrollerHeight - wrapperHeight;

      if (maxScrollY < 0) {
        maxScrollY = 0;
      }

      return maxScrollY;
    }
  }, {
    key: "getMaxScrollX",
    value: function getMaxScrollX() {
      var wrapperWidth = this.rootRef.clientWidth;
      var scrollerWidth = this.contentRef ? this.contentRef.offsetWidth : 0;
      var maxScrollX = scrollerWidth - wrapperWidth;

      if (maxScrollX < 0) {
        maxScrollX = 0;
      }

      return maxScrollX;
    }
    /**
     * 是否需要重置位置
     * @param  {float} time    时间
     * @return {boolean}       true：需要 false：不需要
     */

  }, {
    key: "resetPosition",
    value: function resetPosition() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var scrollX = this.scrollX;
      var scrollY = this.scrollY;
      var maxScrollX = this.getMaxScrollX();
      var maxScrollY = this.getMaxScrollY();

      if (!this.hasHorizontalScroll || this.scrollX < 0) {
        scrollX = 0;
      } else if (this.scrollX > maxScrollX) {
        scrollX = maxScrollX;
      }

      if (!this.hasVerticalScroll || this.scrollY < 0) {
        scrollY = 0;
      } else if (this.scrollY > maxScrollY) {
        scrollY = maxScrollY;
      }

      scrollY = this.scrollY <= 0 || maxScrollY < 0 ? 0 : this.scrollY > maxScrollY ? maxScrollY : this.scrollY;

      if (scrollX === this.scrollX && scrollY === this.scrollY) {
        return false;
      }

      this.scrollTo(scrollX, scrollY, time);
      return true;
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(x, y, time, easing) {
      // console.log(`scrollX:${this.scrollX}，scrollY：${this.scrollY}，y:${y}`);
      var useTransition = this.props.useTransition;
      easing = easing || utils.ease.circular;

      if (this.scrollX !== x || this.scrollY !== y) {
        if (!time || useTransition) {
          this.contentRef.style.transition = "cubic-bezier(0.1, 0.57, 0.1, 1) ".concat(time, "s");

          this._translate(x, y);
        } else {
          this._animate(x, y, time, easing.fn);
        }
      }
    }
  }, {
    key: "_start",
    value: function _start(e, x, y) {
      if (this.props.disabled) {
        return;
      }

      var useTransition = this.props.useTransition;
      this.isMoving = true;
      this.startX = this.scrollX;
      this.startY = this.scrollY;
      this.distX = 0;
      this.distY = 0;
      this.pointX = x;
      this.pointY = y;
      this.startTime = this.getTime();

      if (!useTransition && this.isAnimating) {
        this.isAnimating = false; // TODO scrollEnd
        // this._execEvent('scrollEnd');
      }
    }
  }, {
    key: "_move",
    value: function _move(e, x, y) {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          bounce = _this$props2.bounce;

      if (disabled || !this.isMoving) {
        return;
      }

      if (this.props.preventDefault) {
        e.preventDefault();
      }

      var deltaX = x - this.pointX;
      var deltaY = y - this.pointY;
      var timestamp = this.getTime();
      this.pointX = x;
      this.pointY = y;
      this.distX += deltaX;
      this.distY += deltaY;
      var absDistX = Math.abs(this.distX);
      var absDistY = Math.abs(this.distY);

      if (timestamp - this.endTime > 300 && (this.hasVerticalScroll && absDistY < 10 || this.hasHorizontalScroll && absDistX < 10)) {
        return;
      }

      deltaX = this.hasHorizontalScroll ? deltaX : 0;
      deltaY = this.hasVerticalScroll ? deltaY : 0;
      var targetX = this.scrollX - deltaX;
      var targetY = this.scrollY - deltaY; // 超出边界

      if (targetX < 0 || targetX > this.getMaxScrollX()) {
        targetX = bounce ? this.scrollX - deltaX / 3 : targetX < 0 ? 0 : this.getMaxScrollX();
      }

      if (targetY < 0 || targetY > this.getMaxScrollY()) {
        targetY = bounce ? this.scrollY - deltaY / 3 : targetY < 0 ? 0 : this.getMaxScrollY();
      }

      this._translate(targetX, targetY);

      if (timestamp - this.startTime > 300) {
        this.startTime = timestamp;
        this.startX = this.scrollX;
        this.startY = this.scrollY;
        this.onScrollChange();
      } // this.onScrollChange();

    }
  }, {
    key: "_end",
    value: function _end() {
      var _this$props3 = this.props,
          bounce = _this$props3.bounce,
          bounceTime = _this$props3.bounceTime,
          deceleration = _this$props3.deceleration,
          beforeScrollComplete = _this$props3.beforeScrollComplete,
          disabled = _this$props3.disabled;

      if (disabled) {
        return;
      }

      if (beforeScrollComplete) {
        beforeScrollComplete(this.scrollX, this.scrollY);
      }

      this.isMoving = false;
      var duration = this.getTime() - this.startTime;
      var targetX = this.scrollX;
      var targetY = this.scrollY;
      var time = 0;
      this.endTime = this.getTime();

      if (this.resetPosition(bounceTime)) {
        return;
      }

      this.scrollTo(targetX, targetY);

      if (duration < 300) {
        var wrapperWidth = bounce ? this.rootRef.clientWidth : 0;
        var wrapperHeight = bounce ? this.rootRef.clientHeight : 0;
        var momentumX = this.hasHorizontalScroll ? utils.momentum(this.scrollX, this.startX, duration, this.getMaxScrollX(), wrapperWidth, deceleration) : {
          destination: targetX,
          duration: 0
        };
        var momentumY = this.hasVerticalScroll ? utils.momentum(this.scrollY, this.startY, duration, this.getMaxScrollY(), wrapperHeight, deceleration) : {
          destination: targetY,
          duration: 0
        };
        targetX = momentumX.destination;
        targetY = momentumY.destination;
        time = Math.max(momentumX.duration, momentumY.duration);
      }

      if (targetX != this.scrollX || targetY != this.scrollY) {
        this.scrollTo(targetX, targetY, time);
      }

      this.onScrollComplete();
    }
  }, {
    key: "_transitionEnd",
    value: function _transitionEnd(e) {
      if (e.target != this.contentRef) {
        return;
      }

      if (!this.resetPosition(this.props.bounceTime)) {// TODO scrollEnd
        // this.isInTransition = false;
        // this._execEvent('scrollEnd');
      }
    }
  }, {
    key: "onScrollChange",
    value: function onScrollChange() {
      if (this.props.onScrollChange) {
        this.props.onScrollChange(this.scrollY);
      }
    }
  }, {
    key: "onScrollComplete",
    value: function onScrollComplete() {
      if (this.props.scrollComplete) {
        this.props.scrollComplete(this.scrollX, this.scrollY);
      }
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return new Date().getTime();
    }
  }, {
    key: "getScrollX",
    value: function getScrollX() {
      return this.scrollX;
    }
  }, {
    key: "getScrollY",
    value: function getScrollY() {
      return this.scrollY;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this._init();

      this.scrollTo(0, 0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          children = _this$props4.children;
      var contentSyl = {};

      if (this.hasVerticalScroll && !this.freeScroll) {
        contentSyl.width = '100%';
      }

      return /*#__PURE__*/React.createElement("div", {
        className: prefixCls,
        style: contentSyl,
        ref: function ref(el) {
          return _this3.contentRef = el;
        }
      }, children);
    }
  }]);

  return Scroller;
}(React.Component);

_defineProperty(Scroller, "defaultProps", {
  prefixCls: 'yuso-scroller',
  startX: 0,
  startY: 0,
  bounce: true,
  // 超出边界是否反弹
  bounceTime: 600,
  // 超出边界以后回弹的动画时间
  deceleration: 0.0006,
  // 减速
  disabled: false,
  // 禁止滚动
  preventDefault: true,
  // 阻止默认行为
  directionLockThreshold: 5,
  useTransition: false,
  // 是否使用transition
  onScrollChange: function onScrollChange() {} // 滚动事件

});

export { Scroller as default };
/**
 * Scroller
 * @author john.gao
 */


import React from 'react';

const utils = {
  ease: {
    circular: {
      style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // 0.075, 0.82, 0.165, 1
      fn: (k) => Math.sqrt(1 - (--k * k)),
    },
  },
  momentum: (current, start, time, lowerMargin, wrapperSize, deceleration) => {
    let distance = current - start;
    const speed = Math.abs(distance) / time;
    let destination;
    let duration;

    destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1);
    duration = speed / deceleration;

    if (destination > lowerMargin) { // 超过底部
      destination = wrapperSize ? lowerMargin + (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
      distance = Math.abs(destination - current);
      duration = distance / speed;
    } else if (destination < 0) { // 超过顶部
      destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
      distance = Math.abs(current) + destination;
      duration = distance / speed;
    }

    return {
      destination: Math.round(destination),
      duration,
    };
  },
};


// todo scrollTo 方法如何开放出来

export default class Scroller extends React.Component {
  static defaultProps = {
    prefixCls: 'wme-scroller',
    startX: 0,
    startY: 0,
    bounce: true, // 超出边界是否反弹
    bounceTime: 600, // 超出边界以后回弹的动画时间
    deceleration: 0.0006, // 减速
    disabled: false, // 禁止滚动
    preventDefault: true, // 阻止默认行为
    directionLockThreshold: 5,
    useTransition: false, // 是否使用transition
    onScrollChange: function onScrollChange() {}, // 滚动事件
  }

  constructor(props) {
    super(props);

    this._init();
  }

  componentDidMount() {
    const { startX, startY } = this.props;
    this._initEvents();
    this.scrollTo(startX, startY, 0);
  }

  componentWillUnmount() {
    if (this.rootRef) {
      this.rootRef.removeEventListener('touchstart', this.touchStartEvent.bind(this));
      this.rootRef.removeEventListener('touchend', this.touchEndEvent.bind(this));
      this.rootRef.removeEventListener('touchcancel', this.touchCancelEvent.bind(this));
      this.rootRef.removeEventListener('touchmove', this.touchMoveEvent.bind(this));
    }
  }

  _init() {
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

  _initEvents() {
    const passiveSupported = this.passiveSupported();
    const willPreventDefault = passiveSupported ? {
      passive: false,
    } : false;
    const willNotPreventDefault = passiveSupported ? {
      passive: true,
    } : false;

    this.rootRef = this.contentRef.parentNode;

    this.rootRef.addEventListener('touchstart', this.touchStartEvent.bind(this), willNotPreventDefault);
    this.rootRef.addEventListener('touchend', this.touchEndEvent.bind(this), willNotPreventDefault);
    this.rootRef.addEventListener('touchcancel', this.touchCancelEvent.bind(this), willNotPreventDefault);
    this.rootRef.addEventListener('touchmove', this.touchMoveEvent.bind(this), willPreventDefault);
    this.rootRef.addEventListener('transitionend', this.transitionEndEvent.bind(this), willNotPreventDefault);

  // this.rootRef.addEventListener('mousemove', this.mouseMoveEvent.bind(this), willPreventDefault);
  // this.rootRef.addEventListener('mousedown', this.mouseDownEvent.bind(this), willNotPreventDefault);
  }

  touchStartEvent(evt) {
    const touch = evt.touches[0];
    this._start(evt, touch.screenX, touch.screenY);
  }

  touchMoveEvent(evt) {
    const touch = evt.touches[0];
    this._move(evt, touch.screenX, touch.screenY);
  }

  touchEndEvent(evt) {
    this._end();
  }

  touchCancelEvent(evt) {
    this._end();
  }

  transitionEndEvent(evt) {
    this._transitionEnd(evt);
  }

  passiveSupported() {
    let passiveSupported = false;

    try {
      const options = Object.defineProperty({}, 'passive', {
        get: () => {
          passiveSupported = true;
        },
      });
      window.addEventListener('test', null, options);
    } catch (err) {}
    return passiveSupported;
  }

  _animate(destX, destY, time, easingFn) {
    const { bounceTime } = this.props;

    const startX = this.scrollX;
    const startY = this.scrollY;
    const startTime = this.getTime();
    const destTime = startTime + time;

    const step = () => {
      let now = this.getTime();
      let newX;
      let newY;
      let easing;

      if (now >= destTime) {
        this.isAnimating = false;
        this._translate(destX, destY);

        if (!this.resetPosition(bounceTime)) {
          this.onScrollComplete();
        }
        return;
      }

      now = (now - startTime) / time;
      easing = easingFn(now);
      newX = (destX - startX) * easing + startX;
      newY = (destY - startY) * easing + startY;
      this._translate(newX, newY);

      if (this.isAnimating) {
        requestAnimationFrame(step);
      }
    };
    this.isAnimating = true;
    step();
  }

  _translate(x, y) {
    const {scroll} = this.props;
    if (this.contentRef) {
      this.contentRef.style.transform = `translate3d(${-x}px,${-y}px, 0)`;
      this.scrollX = x;
      this.scrollY = y;
      if(scroll) {
        scroll(this.scrollX, this.scrollY);
      }
    }
  }

  getMaxScrollY() {
    const wrapperHeight = this.rootRef.clientHeight;
    const scrollerHeight = this.contentRef ? this.contentRef.offsetHeight: 0;

    let maxScrollY = scrollerHeight - wrapperHeight;

    if (maxScrollY < 0) {
      maxScrollY = 0;
    }
    return maxScrollY;
  }

  getMaxScrollX() {
    const wrapperWidth = this.rootRef.clientWidth;
    const scrollerWidth = this.contentRef ? this.contentRef.offsetWidth : 0;

    let maxScrollX = scrollerWidth - wrapperWidth;
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
  resetPosition(time = 0) {
    let scrollX = this.scrollX;
    let scrollY = this.scrollY;
    const maxScrollX = this.getMaxScrollX();
    const maxScrollY = this.getMaxScrollY();
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

  scrollTo(x, y, time, easing) {
    // console.log(`scrollX:${this.scrollX}，scrollY：${this.scrollY}，y:${y}`);
    const { useTransition } = this.props;
    easing = easing || utils.ease.circular;

    if (this.scrollX !== x || this.scrollY !== y) {
      if (!time || useTransition) {
        this.contentRef.style.transition = `cubic-bezier(0.1, 0.57, 0.1, 1) ${time}s`;
        this._translate(x, y);
      } else {
        this._animate(x, y, time, easing.fn);
      }
    }
  }

  _start(e, x, y) {
    if (this.props.disabled) {
      return;
    }

    const { useTransition } = this.props;

    this.isMoving = true;
    this.startX = this.scrollX;
    this.startY = this.scrollY;
    this.distX = 0;
    this.distY = 0;
    this.pointX = x;
    this.pointY = y;
    this.startTime = this.getTime();

    if (!useTransition && this.isAnimating) {
      this.isAnimating = false;
    // TODO scrollEnd
    // this._execEvent('scrollEnd');
    }
  }

  _move(e, x, y) {
    const { disabled, bounce } = this.props;

    if (disabled || !this.isMoving) {
      return;
    }
    if (this.props.preventDefault) {
      e.preventDefault();
    }

    let deltaX = x - this.pointX;
    let deltaY = y - this.pointY;

    const timestamp = this.getTime();

    this.pointX = x;
    this.pointY = y;

    this.distX += deltaX;
    this.distY += deltaY;
    const absDistX = Math.abs(this.distX);
    const absDistY = Math.abs(this.distY);

    if (timestamp - this.endTime > 300
      && (this.hasVerticalScroll && absDistY < 10 || this.hasHorizontalScroll && absDistX < 10)) {
      return;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;

    let targetX = this.scrollX - deltaX;
    let targetY = this.scrollY - deltaY;

    // 超出边界
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
    }

    // this.onScrollChange();
  }

  _end() {
    const { bounce, bounceTime, deceleration, beforeScrollComplete, disabled } = this.props;

    if (disabled) {
      return;
    }

    if (beforeScrollComplete) {
      beforeScrollComplete(this.scrollX, this.scrollY);
    }

    this.isMoving = false;
    const duration = this.getTime() - this.startTime;
    let targetX = this.scrollX;
    let targetY = this.scrollY;
    let time = 0;
    this.endTime = this.getTime();


    if (this.resetPosition(bounceTime)) {
      return;
    }

    this.scrollTo(targetX, targetY);

    if (duration < 300) {
      const wrapperWidth = bounce ? this.rootRef.clientWidth : 0;
      const wrapperHeight = bounce ? this.rootRef.clientHeight : 0;
      const momentumX = this.hasHorizontalScroll ? utils.momentum(this.scrollX, this.startX, duration, this.getMaxScrollX(), wrapperWidth, deceleration) : {
        destination: targetX,
        duration: 0,
      };
      const momentumY = this.hasVerticalScroll ? utils.momentum(this.scrollY, this.startY, duration, this.getMaxScrollY(), wrapperHeight, deceleration) : {
        destination: targetY,
        duration: 0,
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

  _transitionEnd(e) {
    if (e.target != this.contentRef) {
      return;
    }

    if (!this.resetPosition(this.props.bounceTime)) {
      // TODO scrollEnd
      // this.isInTransition = false;
      // this._execEvent('scrollEnd');
    }
  }

  onScrollChange() {
    if (this.props.onScrollChange) {
      this.props.onScrollChange(this.scrollY);
    }
  }

  onScrollComplete() {
    if (this.props.scrollComplete) {
      this.props.scrollComplete(this.scrollX, this.scrollY);
    }
  }

  getTime() {
    return new Date().getTime();
  }


  getScrollX() {
    return this.scrollX;
  }

  getScrollY() {
    return this.scrollY;
  }

  refresh() {
    this._init();
    this.scrollTo(0, 0, 0);
  }

  render() {
    const { prefixCls, children } = this.props;
    const contentSyl = {};
    if (this.hasVerticalScroll && !this.freeScroll) {
      contentSyl.width = '100%';
    }
    return (
      <div
        className={prefixCls}
        style={contentSyl}
        ref={(el) => this.contentRef = el}
      >
        { children }
      </div>
    );
  }
}

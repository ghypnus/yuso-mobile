/**
 * PullToRefresh
 * @author john.gao
 */


import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/index';
import Scroller from '../scroller/index';
import { Consumer } from '../locale-provider/HrContext';

const MAX_PULL_DISTANCE = 22.5;
const MIN_PULL_DISTANCE = 10;

// function Indicator(scroller, options) {
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

export default class PullToRefresh extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-pull-to-refresh',
    startX: 0,
    startY: 0,
    scrollbars: true, // 是否有滚动条
  }

  constructor(props) {
    super(props);
    this.state = {
      pullDownLabel: '',
    };
  }

  componentWillUnmount() {
    if (this.indicator) {
      this.indicator.destroy();
      this.indicator = null;
    }
  }

  beforeScrollComplete(scrollX, scrollY, locale) {
    const { onPullDown, beforeScrollComplete } = this.props;
    if (onPullDown) {
      this.onPullDown(scrollY, locale);
    }
    if (beforeScrollComplete) {
      beforeScrollComplete(scrollY);
    }
  }

  scrollComplete(scrollX, scrollY) {
    const { onPullUp, scrollComplete } = this.props;
    if (onPullUp) {
      this.onPullUp(scrollY);
    }
    if (scrollComplete) {
      scrollComplete(scrollY);
    }
  }

  onPullDown(scrollY, locale) {
    if (scrollY < -MAX_PULL_DISTANCE) {
      this.setState({
        pullDownLabel: locale.loadingLabel,
      });
      if (this.props.onPullDown) {
        this.props.onPullDown(this);
      }
    } else if (scrollY < -MIN_PULL_DISTANCE) {
      this.onPullDownComplete(100);
    }
  }

  onPullDownComplete(time) {
    if (!this.pullDownRef) return;
    setTimeout(() => {
      this.pullDownRef.style.marginTop = '-45px';
      setTimeout(() => {
        this.setState({
          pullDownLabel: '',
        });
      }, 300);
    }, time || 600);
  }

  onPullUp(scrollY) {
    const maxScrollY = this.scroller.getMaxScrollY();
    if (scrollY - maxScrollY >= -MAX_PULL_DISTANCE) {
      if (this.props.onPullUp) {
        this.props.onPullUp(this);
      }
    }
  }

  onPullUpComplete() {
    const maxScrollY = this.scroller.getMaxScrollY();
    // setTimeout(_ => {
    //   this.scroller.scrollTo(0, (maxScrollY > 0 ? maxScrollY : 0) - 45);
    // }, 600)
  }

  onScrollChange(scrollY, locale) {
    const { scrollChange } = this.props;
    const maxScrollY = this.scroller.getMaxScrollY();
    if (scrollY < 0) {
      const distance = Math.abs(scrollY) > MAX_PULL_DISTANCE ? MAX_PULL_DISTANCE : Math.abs(scrollY);
      this.pullDownRef.style.marginTop = `${distance - MAX_PULL_DISTANCE}px`;
      if (distance === MAX_PULL_DISTANCE) {
        this.setState({
          pullDownLabel: locale.releaseLabel,
        });
      }
    } else if (scrollY > maxScrollY) {
      const distance = Math.abs(scrollY) - maxScrollY > MAX_PULL_DISTANCE ? MAX_PULL_DISTANCE : Math.abs(scrollY) - maxScrollY;
      this.pullUpRef.style.bottom = `-${distance + MAX_PULL_DISTANCE}px`;
    }

    if (scrollChange) {
      scrollChange(scrollY);
    }
  }

  scrollToTop() {
    this.scroller.scrollTo(0, 0);
  }

  scrollToBottom() {
    const maxScrollY = Math.abs(this.scroller.getMaxScrollY());
    this.scroller.scrollTo(0, maxScrollY);
  }

  scrollTo(x, y) {
    this.scroller.scrollTo(x, y);
  }

  getScrollY() {
    return this.scroller.getScrollY();
  }

  getScrollX() {
    return this.scroller.getScrollX();
  }

  refresh(scrollX, scrollY) {
    this.scroller.refresh(scrollX, scrollY);
  }

  initIndicators() {
    const { scrollbars } = this.props;
    let indicator;

    if (scrollbars) {
      // Vertical scrollbar 纵向
      indicator = {
        el: this.scrollbarRef,
        interactive,
        defaultScrollbars: true,
        customStyle,
        resize: this.options.resizeScrollbars,
        shrink: this.options.shrinkScrollbars,
        fade: this.options.fadeScrollbars,
        listenX: false,
        disablePointer: this.options.disablePointer,
        disableMouse: this.options.disableMouse,
      };
    }
    this.indicator = new Indicator(this, indicator);

    if (this.options.fadeScrollbars) {
      this.on('scrollEnd', () => {
        // todo 隐藏滚动条
        this.indicator.fade();
      });

      this.on('scrollCancel', () => {
        // todo 隐藏滚动条
        this.fade();
      });

      this.on('scrollStart', () => {
        // todo 隐藏滚动条
        this.fade(1);
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

  render() {
    const { prefixCls, children, onPullDown, onPullUp, style = {}, startX, startY, scroll } = this.props;
    const { pullDownLabel } = this.state;
    let { top, height } = style;
    let newStyle = { ...style };
    if (top && !height) {
      newStyle.height = `calc(100% - ${top})`;
    }
    return (
      <Consumer>
        {({ PullToRefresh }) => (
          <div
            style={newStyle}
            className={prefixCls}
          >
            <Scroller
              ref={(comp) => this.scroller = comp}
              startX={startX}
              startY={startY}
              scrollX={false}
              scrollY
              scroll={(scrollX, scrollY) => {
                if (scroll) {
                  scroll(scrollX, scrollY);
                }
              }}
              onScrollChange={(scrollY) => this.onScrollChange(scrollY, PullToRefresh)}
              beforeScrollComplete={(scrollX, scrollY) => this.beforeScrollComplete(scrollX, scrollY, PullToRefresh)}
              scrollComplete={(scrollX, scrollY) => this.scrollComplete(scrollX, scrollY, PullToRefresh)}
            >
              <div
                ref={(el) => this.pullDownRef = el}
                style={{ display: onPullDown ? 'flex' : 'none' }}
                className={classnames(`${prefixCls}-down`)}
              >
                <Icon type="loading" className="loading" />
                <span
                  ref={(el) => this.pullDownLabelRef = el}
                  className="label"
                >
                  {pullDownLabel || PullToRefresh.downLabel}
                </span>
              </div>
              <div className={`${prefixCls}-wrapper`}>
                {children}
              </div>
              <div
                ref={(el) => this.pullUpRef = el}
                style={{ display: onPullUp ? 'flex' : 'none' }}
                className={`${prefixCls}-up`}
              >
                <Icon type="loading" className="loading" />
              </div>
            </Scroller>
            { /* <div
                                                                                                                             ref={ el => this.scrollbarRef = el }
                                                                                                                             className={ `${prefixCls}-scrollbar` }>
                                                                                                                          <div className="indicator"></div>
                                                                                                                        </div> */ }
          </div>
        )}
      </Consumer>
    );
  }
}

import React from 'react';
import SwipeIso from 'swipe-js-iso';
import classnames from 'classnames';
import Icon from '../icon/index';

export default class Swipe extends React.Component {
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
  static defaultProps = {
    prefixCls: 'yuso-swipe',
    swipeOptions: {},
    defaultStyle: {
      container: {
        overflow: 'hidden',
        visibility: 'hidden',
        position: 'relative',
      },

      wrapper: {
        overflow: 'hidden',
        position: 'relative',
      },

      child: {
        float: 'left',
        width: '100%',
        position: 'relative',
        transitionProperty: 'transform',
      },
    },
    childCount: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      currentIndex: props.startSlide || 0,
    };
  }

  componentWillUnmount() {
    this.swipe.kill();
    this.swipe = null;
  }

  componentDidMount() {
    const { swipeOptions } = this.props;
    const { callback, ...restPorps } = swipeOptions;

    this.swipe = SwipeIso(this.container, {
      ...restPorps,
      callback: (index) => {
        this.setState({
          currentIndex: index,
        });
        if (callback) callback(index);
      },
    });
  }

  componentDidUpdate(prevProps) {
    const { childCount, swipeOptions } = this.props;

    if (prevProps.childCount !== childCount) {
      this.swipe.kill();

      const { callback, ...restPorps } = swipeOptions;

      this.swipe = SwipeIso(this.container, {
        ...restPorps,
        callback: (index) => {
          this.setState({
            currentIndex: index,
          });
          if (callback) callback(index);
        },
      });
    }
  }

  next() {
    this.swipe.next();
  }

  prev() {
    this.swipe.prev();
  }

  slide(...args) {
    this.swipe.slide(...args);
  }

  getPos() {
    return this.swipe.getPos();
  }

  getNumSlides() {
    return this.swipe.getNumSlides();
  }

  render() {
    const { id, className, defaultStyle, style = {}, children, prefixCls, indicator, showCloseBtn, close } = this.props;

    const syl = {
      container: { ...defaultStyle.container, ...style.container },
      wrapper: { ...defaultStyle.wrapper, ...style.wrapper },
      child: { ...defaultStyle.child, ...style.child },
      pagination: style && style.pagination || null,
    };

    const wrapCls = classnames(prefixCls, className);
    return (
      <div
        id={id}
        ref={(container) => this.container = container}
        className={wrapCls}
        style={syl.container}
      >
        <div style={syl.wrapper}>
          { React.Children.map(children, (child) => {
            if (!child) {
              return null;
            }
            const childStyle = child.props.style
              ? ({ ...syl.child, ...child.props.style })
              : syl.child;

            return React.cloneElement(child, {
              style: childStyle,
            });
          }) }
        </div>
        {
          showCloseBtn && (
          <div onClick={(_) => {
            close && close();
          }}
            className={`${prefixCls}-close`}
          >
            <Icon value="delete_fill" />
          </div>
          )
        }
        { indicator && (
        <div className={`${prefixCls}-pagination`} style={syl.pagination}>
          { React.Children.map(children, (child, index) => {
            const childCls = classnames(`${prefixCls}-pagination-bullet`, {
              [`${prefixCls}-pagination-bullet-active`]: this.state.currentIndex === index,
            });
            return <div className={childCls} />;
          }) }
        </div>
        ) }
      </div>
    );
  }
}

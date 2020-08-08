import React from 'react';
import classNames from 'classnames';
import Item from './PickerItem';

class Picker extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-picker',
  };

  static Item = Item

  rootRef;

  maskRef;

  contentRef;

  indicatorRef;

  itemHeight;

  scrollValue;

  scrollHanders = (() => {
    let scrollY = -1;
    let lastY = 0;
    let startY = 0;
    let scrollDisabled = false;
    let isMoving = false;

    const setTransform = (nodeStyle, value) => {
      nodeStyle.transform = value;
      nodeStyle.webkitTransform = value;
    };

    const setTransition = (nodeStyle, value) => {
      nodeStyle.transition = value;
      nodeStyle.webkitTransition = value;
    };

    const scrollTo = (x, y, time = 0.3) => {
      if (scrollY !== y) {
        scrollY = y;
        if (time && !this.props.noAnimate) {
          setTransition(this.contentRef.style, `cubic-bezier(0,0,0.2,1.15) ${time}s`);
        }
        setTransform(this.contentRef.style, `translate3d(0,${-y}px,0)`);
        setTimeout(() => {
          this.scrollingComplete();
          if (this.contentRef) {
            setTransition(this.contentRef.style, '');
          }
        }, +time * 1000);
      }
    };

    const Velocity = ((minInterval = 30, maxInterval = 100) => {
      let time = 0;
      let oriY = 0;
      let _velocity = 0;
      const recorder = {
        record: (y) => {
          const now = +new Date();
          _velocity = (y - oriY) / (now - time);
          if (now - time >= minInterval) {
            _velocity = now - time <= maxInterval ? _velocity : 0;
            oriY = y;
            time = now;
          }
        },
        getVelocity: (y) => {
          if (y !== oriY) {
            recorder.record(y);
          }
          return _velocity;
        },
      };
      return recorder;
    })();

    const onFinish = () => {
      isMoving = false;
      let targetY = scrollY;

      const height = (this.props.children.length - 1) * this.itemHeight;

      let time = 0.3;

      const velocity = Velocity.getVelocity(targetY) * 4;
      if (velocity) {
        targetY = velocity * 40 + targetY;
        time = Math.abs(velocity) * 0.1;
      }

      if (targetY % this.itemHeight !== 0) {
        targetY = Math.round(targetY / this.itemHeight) * this.itemHeight;
      }

      if (targetY < 0) {
        targetY = 0;
      } else if (targetY > height) {
        targetY = height;
      }

      scrollTo(0, targetY, time < 0.3 ? 0.3 : time);
      this.onScrollChange();
    };

    const onStart = (y) => {
      if (scrollDisabled) {
        return;
      }

      isMoving = true;
      startY = y;
      lastY = scrollY;
    };

    const onMove = (y) => {
      if (scrollDisabled || !isMoving) {
        return;
      }

      scrollY = lastY - y + startY;
      Velocity.record(scrollY);

      this.onScrollChange();
      setTransform(this.contentRef.style, `translate3d(0,${-scrollY}px,0)`);
    };

    return {
      touchstart: (evt) => onStart(evt.touches[0].screenY),
      mousedown: (evt) => onStart(evt.screenY),
      touchmove: (evt) => {
        evt.preventDefault();
        onMove(evt.touches[0].screenY);
      },
      mousemove: (evt) => {
        evt.preventDefault();
        onMove(evt.screenY);
      },
      touchend: () => onFinish(),
      touchcancel: () => onFinish(),
      mouseup: () => onFinish(),
      getValue: () => scrollY,
      scrollTo,
      setDisabled: (disabled = false) => {
        scrollDisabled = disabled;
      },
    };
  })();

  constructor(props) {
    super(props);

    let selectedValueState;
    const { selectedValue, defaultSelectedValue } = this.props;
    if (selectedValue !== undefined) {
      selectedValueState = selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else {
      const children = React.Children.toArray(this.props.children);
      selectedValueState = children && children[0] && children[0].props.value;
    }
    this.state = {
      selectedValue: selectedValueState,
    };
  }

  componentDidMount() {
    const { contentRef, indicatorRef, maskRef, rootRef } = this;
    const rootHeight = rootRef.getBoundingClientRect().height;
    const itemHeight = this.itemHeight = indicatorRef.getBoundingClientRect().height;
    let num = Math.floor(rootHeight / itemHeight);
    if (num % 2 === 0) {
      num--;
    }
    num--;
    num /= 2;
    contentRef.style.padding = `${itemHeight * num}px 0`;
    indicatorRef.style.top = `${itemHeight * num}px`;
    maskRef.style.backgroundSize = `100% ${itemHeight * num}px`;
    this.scrollHanders.setDisabled(this.props.disabled);
    this.select(this.state.selectedValue, this.itemHeight, this.scrollTo);

    const passiveSupported = this.passiveSupported();
    const willPreventDefault = passiveSupported ? {
      passive: false,
    } : false;
    const willNotPreventDefault = passiveSupported ? {
      passive: true,
    } : false;
    Object.keys(this.scrollHanders).forEach((key) => {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        const pd = key.indexOf('move') >= 0 ? willPreventDefault : willNotPreventDefault;
        rootRef.addEventListener(key, this.scrollHanders[key], pd);
      }
    });
  }

  componentWillUnmount() {
    Object.keys(this.scrollHanders).forEach((key) => {
      if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
        this.rootRef.removeEventListener(key, this.scrollHanders[key]);
      }
    });
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

  componentWillReceiveProps(nextProps) {
    if ('selectedValue' in nextProps) {
      if (this.state.selectedValue !== nextProps.selectedValue) {
        this.setState({
          selectedValue: nextProps.selectedValue,
        }, () => {
          this.select(
            nextProps.selectedValue,
            this.itemHeight,
            nextProps.noAnimate ? this.scrollToWithoutAnimation : this.scrollTo,
          );
        });
      }
    }
    this.scrollHanders.setDisabled(nextProps.disabled);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectedValue !== nextState.selectedValue
      || this.props.children !== nextProps.children;
  }

  componentDidUpdate() {
    this.select(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
  }

  scrollTo = (top) => {
    this.scrollHanders.scrollTo(0, top);
  }

  scrollToWithoutAnimation = (top) => {
    this.scrollHanders.scrollTo(0, top, 0);
  }

  fireValueChange = (selectedValue) => {
    if (selectedValue !== this.state.selectedValue) {
      if (!('selectedValue' in this.props)) {
        this.setState({
          selectedValue,
        });
      }

      if (this.props.onValueChange) {
        this.props.onValueChange(selectedValue);
      }
    }
  }

  onScrollChange = () => {
    const top = this.scrollHanders.getValue();
    if (top >= 0) {
      const children = React.Children.toArray(this.props.children);
      const index = this.coumputeChildIndex(top, this.itemHeight, children.length);
      if (this.scrollValue !== index) {
        this.scrollValue = index;
        const child = children[index];
        if (child && this.props.onScrollChange) {
          this.props.onScrollChange(child.props.value);
        } else if (console.warn) {
          console.warn('change: child not found', children, index);
        }
      }
    }
  }

  scrollingComplete = () => {
    const top = this.scrollHanders.getValue();
    if (top >= 0) {
      this.doScrollingComplete(top, this.itemHeight, this.fireValueChange);
    }
  }

  getValue() {
    if ('selectedValue' in this.props) {
      return this.props.selectedValue;
    }
    const children = React.Children.toArray(this.props.children);
    return children && children[0] && children[0].props.value;
  }

  select(value, itemHeight, scrollTo) {
    const children = React.Children.toArray(this.props.children);
    for (let i = 0, len = children.length; i < len; i++) {
      if (children[i].props.value === value) {
        this.selectByIndex(i, itemHeight, scrollTo);
        return;
      }
    }
    this.selectByIndex(0, itemHeight, scrollTo);
  }

  selectByIndex(index, itemHeight, zscrollTo) {
    if (index < 0 || index >= React.Children.count(this.props.children) || !itemHeight) {
      return;
    }
    zscrollTo(index * itemHeight);
  }

  coumputeChildIndex(top, itemHeight, childrenLength) {
    let index = top / itemHeight;
    const floor = Math.floor(index);
    if (index - floor > 0.5) {
      index = floor + 1;
    } else {
      index = floor;
    }
    return Math.min(index, childrenLength - 1);
  }

  doScrollingComplete(top, itemHeight, fireValueChange) {
    const children = React.Children.toArray(this.props.children);
    const index = this.coumputeChildIndex(top, itemHeight, children.length);
    const child = children[index];
    if (child) {
      fireValueChange(child.props.value);
    } else if (console.warn) {
      console.warn('complete: child not found', children, index);
    }
  }

  render() {
    const { props } = this;
    const { prefixCls, itemStyle, indicatorStyle, indicatorClassName = '', children } = props;
    const { selectedValue } = this.state;
    const itemClassName = `${prefixCls}-item`;
    const selectedItemClassName = `${itemClassName} ${prefixCls}-item-selected`;
    const map = (item) => {
      const { className = '', style, value } = item.props;
      return (
        <div
          style={{ ...itemStyle, ...style }}
          className={`${selectedValue === value ? selectedItemClassName : itemClassName} ${className}`}
          key={value}
        >
          { item.children || item.props.children }
        </div>
      );
    };
    // compatibility for preact
    const items = React.Children ? React.Children.map(children, map) : [].concat(children).map(map);
    const pickerCls = {
      [props.className]: !!props.className,
      [prefixCls]: true,
    };
    return (
      <div
        className={classNames(pickerCls)}
        ref={(el) => this.rootRef = el}
        style={this.props.style}
      >
        <div className={`${prefixCls}-mask`} ref={(el) => this.maskRef = el} />
        <div
          className={`${prefixCls}-indicator ${indicatorClassName}`}
          ref={(el) => this.indicatorRef = el}
          style={indicatorStyle}
        />
        <div className={`${prefixCls}-content`} ref={(el) => this.contentRef = el}>
          { items }
        </div>
      </div>
    );
  }
}

export default Picker;

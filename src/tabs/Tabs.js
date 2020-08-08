import React, { Component } from 'react';
import TabPane from './TabPane';
import DefaultTabBar from './DefaultTabBar';
import { getTransformPropValue, setTransform, setPxStyle } from '../_utils/animate';

const getPanDirection = (direction) => {
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

export default class YusoTabs extends Component {
  static DefaultTabBar = DefaultTabBar;

  static defaultProps = {
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
    useOnPan: true,
  }

  tabCache = {};

  layout = null;

  onPan = (() => {
    let lastOffset = 0;
    let finalOffset = 0;
    let panDirection = null;

    const getLastOffset = (isVertical = this.isTabVertical()) => {
      let offset = +`${lastOffset}`.replace('%', '');
      if (`${lastOffset}`.indexOf('%') >= 0) {
        offset /= 100;
        offset *= isVertical ? this.layout.clientHeight : this.layout.clientWidth;
      }
      return offset;
    };

    return {
      onPanStart: (status) => {
        if (!this.props.swipeable || !this.props.animated) return;
        panDirection = getPanDirection(status.direction);
        this.setState({
          isMoving: true,
        });
      },

      onPanMove: (status) => {
        const { swipeable, animated, useLeftInsteadTransform } = this.props;
        if (!status.moveStatus || !this.layout || !swipeable || !animated) return;
        const isVertical = this.isTabVertical();
        let offset = getLastOffset();
        if (isVertical) {
          offset += panDirection === 'horizontal' ? 0 : status.moveStatus.y;
        } else {
          offset += panDirection === 'vertical' ? 0 : status.moveStatus.x;
        }
        const canScrollOffset = isVertical
          ? -this.layout.scrollHeight + this.layout.clientHeight
          : -this.layout.scrollWidth + this.layout.clientWidth;
        offset = Math.min(offset, 0);
        offset = Math.max(offset, canScrollOffset);
        setPxStyle(this.layout, offset, 'px', isVertical, useLeftInsteadTransform);
        finalOffset = offset;
      },

      onPanEnd: () => {
        if (!this.props.swipeable || !this.props.animated) return;
        lastOffset = finalOffset;
        const isVertical = this.isTabVertical();
        const offsetIndex = this.getOffsetIndex(finalOffset, isVertical ? this.layout.clientHeight : this.layout.clientWidth);
        this.setState({
          isMoving: false,
        });
        if (offsetIndex === this.state.currentTab) {
          if (this.props.usePaged) {
            setTransform(
              this.layout.style,
              this.getContentPosByIndex(
                offsetIndex,
                this.isTabVertical(),
                this.props.useLeftInsteadTransform,
              ),
            );
          }
        } else {
          this.goToTab(offsetIndex);
        }
      },

      setCurrentOffset: (offset) => lastOffset = offset,
    };
  })();

  constructor(props) {
    super(props);
    this.state = {
      isMoving: false,
      currentTab: this.getTabIndex(props),
      contentPos: this.getContentPosByIndex(
        this.getTabIndex(props),
        this.isTabVertical(props.tabDirection),
        props.useLeftInsteadTransform,
      ),
    };
  }

  isTabVertical = (direction = this.props.tabDirection) => direction === 'vertical';

  getTabBarBaseProps() {
    const { currentTab } = this.state;

    const {
      animated,
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      tabs,
      affix,
      affixTop,
    } = this.props;
    return {
      activeTab: currentTab,
      animated: !!animated,
      goToTab: this.tabClickGoToTab.bind(this),
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      tabs,
      affix,
      affixTop,
      instanceId: this.instanceId,
    };
  }

  getTabIndex(props) {
    const { page, initialPage, tabs } = props;
    const param = (page !== undefined ? page : initialPage) || 0;

    let index = 0;
    if (typeof param === 'string') {
      tabs.forEach((t, i) => {
        if (t.key === param) {
          index = i;
        }
      });
    } else {
      index = param || 0;
    }
    return index < 0 ? 0 : index;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.page !== prevState.page) {
      return {
        page: nextProps.page,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.page !== prevState.page) {
      this.goToTab(this.getTabIndex(this.props), true, {}, this.props);
    }
  }

  goToTab(index, force = false, usePaged = this.props.usePaged, props = this.props) {
    const { tabDirection, useLeftInsteadTransform } = props;
    let newState = {};
    if (usePaged) {
      newState = {
        contentPos: this.getContentPosByIndex(
          index,
          this.isTabVertical(tabDirection),
          useLeftInsteadTransform,
        ),
      };
    }
    if (!force && this.nextCurrentTab === index) {
      return false;
    }
    this.nextCurrentTab = index;
    const { tabs, onChange } = props;
    if (index >= 0 && index < tabs.length) {
      if (!force) {
        if (onChange) {
          onChange(tabs[index], index);
        }
        if (props.page !== undefined) {
          return false;
        }
      }

      this.setState({
        currentTab: index,
        ...newState,
      });
    }
    return true;
  }

  tabClickGoToTab(index) {
    this.goToTab(index, false, true);
  }

  getContentPosByIndex(index, isVertical, useLeft = false) {
    const value = `${-index * 100}%`;
    this.onPan.setCurrentOffset(value);
    if (useLeft) {
      return `${value}`;
    }
    const translate = isVertical ? `0px, ${value}` : `${value}, 0px`;
    // fix: content overlay TabBar on iOS 10. ( 0px -> 1px )
    return `translate3d(${translate}, 1px)`;
  }

  onSwipe = (status) => {
    const { tabBarPosition, swipeable, usePaged } = this.props;
    if (!swipeable || !usePaged || this.isTabVertical()) return;
    // DIRECTION_NONE	1
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
            if (!this.isTabVertical()) {
              this.goToTab(this.prevCurrentTab + 1);
            }
            break;
          case 8:
            if (this.isTabVertical()) {
              this.goToTab(this.prevCurrentTab + 1);
            }
            break;
          case 4:
            if (!this.isTabVertical()) {
              this.goToTab(this.prevCurrentTab - 1);
            }
            break;
          case 16:
            if (this.isTabVertical()) {
              this.goToTab(this.prevCurrentTab - 1);
            }
            break;
        }
        break;
    }
  }

  setContentLayout = (div) => {
    this.layout = div;
  }

  getSubElements = () => {
    const { children } = this.props;
    const subElements = {};

    return (defaultPrefix = '$i$-', allPrefix = '$ALL$') => {
      if (Array.isArray(children)) {
        children.forEach((child, index) => {
          if (child.key) {
            subElements[child.key] = child;
          }
          subElements[`${defaultPrefix}${index}`] = child;
        });
      } else if (children) {
        subElements[allPrefix] = children;
      }
      return subElements;
    };
  }

  getSubElement = (
    tab,
    index,
    subElements = (defaultPrefix, allPrefix) => { },
    defaultPrefix = '$i$-',
    allPrefix = '$ALL$',
  ) => {
    const key = tab.key || `${defaultPrefix}${index}`;
    const elements = subElements(defaultPrefix, allPrefix);
    let component = elements[key] || elements[allPrefix];
    if (component instanceof Function) {
      component = component(tab, index);
    }
    return component || null;
  }

  shouldRenderTab = (idx) => {
    const { prerenderingSiblingsNumber = 0 } = this.props;
    const { currentTab = 0 } = this.state;

    return currentTab - prerenderingSiblingsNumber <= idx && idx <= currentTab + prerenderingSiblingsNumber;
  }

  renderTabBar(tabBarProps, DefaultTabBar) {
    const { renderTabBar } = this.props;
    if (renderTabBar === false) {
      return null;
    } if (renderTabBar) {
      // return React.cloneElement(this.props.renderTabBar(props), props);
      return renderTabBar(tabBarProps);
    }
    return <DefaultTabBar {...tabBarProps} />;
  }

  renderContent(getSubElements = this.getSubElements()) {
    const { prefixCls, tabs, animated, destroyInactiveTab, useLeftInsteadTransform } = this.props;
    const { currentTab, isMoving, contentPos } = this.state;
    const isTabVertical = this.isTabVertical();

    let contentCls = `${prefixCls}-content-wrap`;
    if (animated && !isMoving) {
      contentCls += ` ${contentCls}-animated`;
    }
    const contentStyle = animated ? (
      useLeftInsteadTransform ? {
        position: 'relative',
        ...this.isTabVertical() ? { top: contentPos } : { left: contentPos },
      } : getTransformPropValue(contentPos)
    ) : {
      position: 'relative',
      ...this.isTabVertical() ? { top: `${-currentTab * 100}%` } : { left: `${-currentTab * 100}%` },
    };

    return (
      <div className={contentCls} style={contentStyle} key="tabWrap" ref={this.setContentLayout}>
        {
        tabs.map((tab, index) => {
          let cls = `${prefixCls}-pane-wrap`;
          if (this.state.currentTab === index) {
            cls += ` ${cls}-active`;
          } else {
            cls += ` ${cls}-inactive`;
          }

          const key = tab.key || `tab_${index}`;

          // update tab cache
          if (this.shouldRenderTab(index)) {
            this.tabCache[index] = this.getSubElement(tab, index, getSubElements);
          } else if (destroyInactiveTab) {
            this.tabCache[index] = undefined;
          }

          return (
            <TabPane
              key={key}
              className={cls}
              active={currentTab === index}
              role="tabpanel"
              aria-hidden={currentTab !== index}
              fixX={isTabVertical}
              fixY={!isTabVertical}
            >
              {this.tabCache[index]}
            </TabPane>
          );
        })
      }
      </div>
    );
  }

  render() {
    const { prefixCls, tabBarPosition, tabDirection, useOnPan, noRenderContent } = this.props;
    const isTabVertical = this.isTabVertical(tabDirection);

    const tabBarProps = {
      ...this.getTabBarBaseProps(),
    };

    const onPan = !isTabVertical && useOnPan ? this.onPan : {};

    const content = [
      <div key="tabBar" className={`${prefixCls}-tab-bar-wrap`}>
        {this.renderTabBar(tabBarProps, DefaultTabBar)}
      </div>,
      !noRenderContent && this.renderContent(),
    ];
    return (
      <div className={`${prefixCls} ${prefixCls}-${tabDirection} ${prefixCls}-${tabBarPosition}`}>
        {
        tabBarPosition === 'top' || tabBarPosition === 'left' ? content : content.reverse()
      }
      </div>
    );
  }
}

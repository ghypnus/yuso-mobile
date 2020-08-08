import React from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { setPxStyle, getTransformPropValue, getPxStyle } from '../_utils/animate';

export default class DefaultTabBar extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'wme-tabs-tab-bar',
    animated: true,
    tabs: [],
    goToTab: () => { },
    activeTab: 0,
    page: 5,
    affix: false,
    affixTop: 0,
    tabBarUnderlineStyle: {},
    // tabBarBackgroundColor: '#FFF',
    tabBarActiveTextColor: '',
    tabBarInactiveTextColor: '',
    tabBarTextStyle: {},
  };

  layout = null;

  onPan = (() => {
    let lastOffset = 0;
    let finalOffset = 0;

    const getLastOffset = (isVertical = this.isTabBarVertical()) => {
      let offset = +`${lastOffset}`.replace('%', '');
      if (`${lastOffset}`.indexOf('%') >= 0) {
        offset /= 100;
        offset *= isVertical ? this.layout.clientHeight : this.layout.clientWidth;
      }
      return offset;
    };

    return {
      onPanStart: () => {
        this.setState({ isMoving: true });
      },

      onPanMove: (status) => {
        if (!status.moveStatus || !this.layout) return;
        const isVertical = this.isTabBarVertical();
        let offset = getLastOffset() + (isVertical ? status.moveStatus.y : status.moveStatus.x);
        const canScrollOffset = isVertical
          ? -this.layout.scrollHeight + this.layout.clientHeight
          : -this.layout.scrollWidth + this.layout.clientWidth;
        offset = Math.min(offset, 0);
        offset = Math.max(offset, canScrollOffset);
        setPxStyle(this.layout, offset, 'px', isVertical);
        finalOffset = offset;

        this.setState({
          showPrev: -offset > 0,
          showNext: offset > canScrollOffset,
        });
      },

      onPanEnd: () => {
        const isVertical = this.isTabBarVertical();
        lastOffset = finalOffset;
        this.setState({
          isMoving: false,
          transform: getPxStyle(finalOffset, 'px', isVertical),
        });
      },

      setCurrentOffset: (offset) => lastOffset = offset,
    };
  })();

  constructor(props) {
    super(props);

    this.state = {
      transform: '',
      isMoving: false,
      showPrev: false,
      showNext: false,
      ...this.getTransformByIndex(props),
    };

    this.rootEl = document.createElement('div');
    document.body.appendChild(this.rootEl);
  }

  componentWillUnmount() {
    if (this.rootEl) {
      document.body.removeChild(this.rootEl);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.activeTab !== nextProps.activeTab
      || this.props.tabs !== nextProps.tabs
      || this.props.tabs.length !== nextProps.tabs.length
    ) {
      this.setState({
        ...this.getTransformByIndex(nextProps),
      });
    }
  }

  getTransformByIndex = (props) => {
    const { activeTab, tabs, page = 0 } = props;
    const isVertical = this.isTabBarVertical();

    const size = this.getTabSize(page, tabs.length);
    const center = page / 2;
    const pos = Math.min(activeTab, tabs.length - center - 0.5);
    const skipSize = Math.min(-(pos - center + 0.5) * size, 0);
    this.onPan.setCurrentOffset(`${skipSize}%`);
    return {
      transform: getPxStyle(skipSize, '%', isVertical),
      showPrev: activeTab > center - 0.5 && tabs.length > page,
      showNext: activeTab < tabs.length - center - 0.5 && tabs.length > page,
    };
  }

  onPress = (index) => {
    const { goToTab, onTabClick, tabs } = this.props;
    onTabClick && onTabClick(tabs[index], index);
    goToTab && goToTab(index);
  }

  isTabBarVertical = (position = this.props.tabBarPosition) => position === 'left' || position === 'right';

  renderTab = (t, i, size, isTabBarVertical) => {
    const {
      prefixCls, renderTab, activeTab,
      tabBarTextStyle,
      tabBarActiveTextColor,
      tabBarInactiveTextColor,
    } = this.props;

    const textStyle = { ...tabBarTextStyle };
    let cls = `${prefixCls}-tab`;
    let ariaSelected = false;
    if (activeTab === i) {
      cls += ` ${cls}-active`;
      ariaSelected = true;
      if (tabBarActiveTextColor) {
        textStyle.color = tabBarActiveTextColor;
      }
    } else if (tabBarInactiveTextColor) {
      textStyle.color = tabBarInactiveTextColor;
    }

    return (
      <div key={`t_${i}`}
        style={{
          ...textStyle,
          ...isTabBarVertical ? { height: `${size}%` } : { width: `${size}%` },
        }}
        id={`m-tabs-${i}`}
        role="tab"
        aria-selected={ariaSelected}
        className={cls}
        onClick={() => this.onPress(i)}
      >
        {renderTab ? renderTab(t) : t.title}
      </div>
    );
  }

  renderTabBar() {
     const {
      prefixCls,
      animated,
      tabs = [],
      page = 0,
      activeTab = 0,
      // tabBarBackgroundColor,
      tabBarUnderlineStyle,
      tabBarPosition,
      renderUnderline,
      affix,
      affixTop,
    } = this.props;
    const { isMoving, transform, showNext, showPrev } = this.state;
    const isTabBarVertical = this.isTabBarVertical();

    const needScroll = tabs.length > page;
    const size = this.getTabSize(page, tabs.length);

    const Tabs = tabs.map((t, i) => this.renderTab(t, i, size, isTabBarVertical));

    let cls = classnames(prefixCls, {
      [`${prefixCls}-animated`]: animated && !isMoving,
      [`${prefixCls}-affix`]: affix
    });
    const style = {};
    // const style = {
    //   backgroundColor: tabBarBackgroundColor || '',
    // };
    if(affix) {
      style.top = affixTop + 'px';
    }

    const transformStyle = needScroll ? {
      ...getTransformPropValue(transform),
    } : {};

    const { setCurrentOffset, ...onPan } = this.onPan;
    const underlineProps = {
      style: {
        ...isTabBarVertical ? { height: `${size}%` } : { width: `${size}%` },
        ...isTabBarVertical ? { top: `${size * activeTab}%` } : { left: `${size * activeTab}%` },
        ...tabBarUnderlineStyle,
      },
      className: `${prefixCls}-underline`,
    };
    return <div
      className={`${cls} ${prefixCls}-${tabBarPosition}`}
      style={style}>
      {showPrev && <div className={`${prefixCls}-prevpage`} />}
      <div role="tablist" className={`${prefixCls}-content`} style={transformStyle} ref={this.setContentLayout}>
        {Tabs}
        {
          renderUnderline ? renderUnderline(underlineProps)
            : <div {...underlineProps} />
        }
      </div>
      {showNext && <div className={`${prefixCls}-nextpage`} />}
    </div>
  }

  setContentLayout = (div) => {
    this.layout = div;
  }

  getTabSize = (page, tabLength) => 100 / Math.min(page, tabLength);

  render() {
    const { affix } = this.props;
    return affix ? createPortal(
      this.renderTabBar(), this.rootEl
    ) : this.renderTabBar()
  }
}

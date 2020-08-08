import React, { Component } from 'react';
import classNames from 'classnames';
import PanelContent from './PanelContent';
import Icon from '../icon/index';

export default class Panel extends Component {
  static defaultProps = {
    showArrow: true,
    isActive: false,
    destroyInactivePanel: false,
    onItemClick() { },
    forceRender: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
      panelHeight: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isActive !== prevState.isActive) {
      return {
        isActive: nextProps.isActive
      }
    }
    return null
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isActive !== this.props.isActive) {
      this.setPanelHeight();
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   return !isEqual(this.props, nextProps);
  // }

  setPanelHeight() {
    const { isActive } = this.props;
    if (this.panelContentRef) {
      const panelContentRootRef = this.panelContentRef.rootRef;
      this.setState({
        panelHeight: !isActive ? '0px' : `${panelContentRootRef.scrollHeight}px`
      })
    }
  }

  handleItemClick = () => {
    const { onItemClick, panelKey } = this.props;
    if (typeof onItemClick === 'function') {
      onItemClick(panelKey);
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
      this.handleItemClick();
    }
  }

  render() {
    const {
      className,
      id,
      style,
      prefixCls,
      title,
      children,
      isActive,
      showArrow,
      destroyInactivePanel,
      disabled,
      accordion,
      forceRender,
      expandIcon,
      extra,
    } = this.props;
    const titleCls = classNames(`${prefixCls}-title`);
    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-active`]: isActive,
      [`${prefixCls}-item-disabled`]: disabled,
    }, className);

    let icon = <Icon className="arrow" type="unfold" />;
    if (showArrow && typeof expandIcon === 'function') {
      icon = expandIcon(this.props);
    }
    return (
      <div className={itemCls} style={style} id={id}>
        <div
          className={titleCls}
          onClick={this.handleItemClick}
          role={accordion ? 'tab' : 'button'}
          aria-expanded={`${isActive}`}
          onKeyPress={this.handleKeyPress}
        >
          {showArrow && icon}
          {title}
          {extra && (<div className={`${prefixCls}-extra`}>{extra}</div>)}
        </div>
        <PanelContent
          ref={(el) => this.panelContentRef = el}
          prefixCls={prefixCls}
          isActive={isActive}
          panelHeight={this.state.panelHeight}
          destroyInactivePanel={destroyInactivePanel}
          forceRender={forceRender}
          role={accordion ? 'tabpanel' : null}
        >
          {children}
        </PanelContent>
      </div>
    );
  }
}

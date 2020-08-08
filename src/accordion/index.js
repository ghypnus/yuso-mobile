import React, { Component, Children } from 'react';
import classNames from 'classnames';
import { isFragment } from 'react-is';
import isEqual from 'lodash/isEqual';
import Panel from './Panel';

function toArray(activeKey) {
  let currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey.map((key) => String(key));
}

class Accordion extends Component {
  static defaultProps = {
    prefixCls: 'yuso-accordion',
    onChange() { },
    accordion: false,
    destroyInactivePanel: false,
  }

  constructor(props) {
    super(props);

    const { activeKey, defaultActiveKey } = props;
    let currentActiveKey = defaultActiveKey;
    if ('activeKey' in props) {
      currentActiveKey = activeKey;
    }

    this.state = {
      activeKey: toArray(currentActiveKey),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
  }

  onClickItem = (key) => {
    const { accordion } = this.props;
    let activeKey = this.state.activeKey;
    if (accordion) {
      activeKey = activeKey[0] === key ? [] : [key];
    } else {
      activeKey = [...activeKey];
      const index = activeKey.indexOf(key);
      const isActive = index > -1;
      if (isActive) {
        // remove active state
        activeKey.splice(index, 1);
      } else {
        activeKey.push(key);
      }
    }
    this.setActiveKey(activeKey);
  };

  static getDerivedStateFromProps(nextProps) {
    const newState = {};
    if ('activeKey' in nextProps) {
      newState.activeKey = toArray(nextProps.activeKey);
    }
    return newState.activeKey ? newState : null;
  }

  getNewChild = (child, index) => {
    if (!child) return null;

    const activeKey = this.state.activeKey;
    const { prefixCls, accordion, destroyInactivePanel, expandIcon } = this.props;
    // If there is no key provide, use the panel order as default key
    const key = child.key || String(index);
    const { header, headerClass, disabled } = child.props;
    let isActive = false;
    if (accordion) {
      isActive = activeKey[0] === key;
    } else {
      isActive = activeKey.indexOf(key) > -1;
    }

    const props = {
      key,
      panelKey: key,
      header,
      headerClass,
      isActive,
      prefixCls,
      destroyInactivePanel,
      accordion,
      children: child.props.children,
      onItemClick: disabled ? null : this.onClickItem,
      expandIcon,
    };

    if (typeof child.type === 'string') {
      return child;
    }

    return React.cloneElement(child, props);
  };

  getItems = () => {
    const { children } = this.props;
    const childList = isFragment(children) ? children.props.children : children;
    const newChildren = Children.map(childList, this.getNewChild);

    if (isFragment(children)) {
      return <>{newChildren}</>;
    }

    return newChildren;
  };

  setActiveKey = (activeKey) => {
    const { accordion, onChange } = this.props;
    if (!('activeKey' in this.props)) {
      this.setState({ activeKey });
    }
    onChange(accordion ? activeKey[0] : activeKey);
  };

  render() {
    const { prefixCls, className, style, accordion } = this.props;
    const collapseClassName = classNames({
      [prefixCls]: true,
      [className]: !!className,
    });
    return (
      <div className={collapseClassName} style={style} role={accordion ? 'tablist' : null}>
        {this.getItems()}
      </div>
    );
  }
}

Accordion.Panel = Panel;

export default Accordion;

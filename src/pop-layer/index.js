/**
 * PopLayer
 * @author john.gao
 */
import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import classnames from 'classnames';


export default class PopLayer extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-pop-layer',
  };

  constructor(props) {
    super(props);
    this.rootEl = document.createElement('div');
    document.body.appendChild(this.rootEl);
  }

  componentWillUnmount() {
    if (this.rootEl) {
      document.body.removeChild(this.rootEl);
    }
  }

  close(e) {
    e.preventDefault();
    const container = ReactDOM.findDOMNode(this.containerRef);
    if (e.target === container || this.isDescendant(container, e.target)) {
      return;
    }
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  /**
   * 判断是否是子元素
   * @param  {Node}  parent 父元素
   * @param  {Node}  child  子元素
   * @return {Boolean}        true or false
   */
  isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  render() {
    const { visible, children, prefixCls, className, style, direction } = this.props;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-top`]: direction === 'top',
      [`${prefixCls}-bottom`]: direction === 'bottom',
      [`${prefixCls}-visible`]: visible,
    });
    return visible ? createPortal(
      <div
        className={wrapCls}
        style={{ ...style }}
        onClick={(e) => this.close(e)}
      >
        <div
          ref={(el) => this.containerRef = el}
          className={`${prefixCls}-container`}
        >
          {children || null}
        </div>
      </div>,
      this.rootEl,
    ) : null;
  }
}

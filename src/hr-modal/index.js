/**
 * HrModal
 * @author john.gao
 * @date 2020.2.19
 */


import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import Message from '../message/Message';

export default class HrModal extends Component {
  static defaultProps = {
    prefixCls: 'hr-modal',
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

  render() {
    const {
      prefixCls,
      className,
      visible,
      title,
      icon,
      action,
      isMaskClose,
      children,
      onClose,
    } = this.props;
    return createPortal(
      <div className={classnames(prefixCls, className, {
        [`${prefixCls}-show`]: visible,
      })}
      >
        <Message
          icon={icon}
          title={title}
          isMaskClose={isMaskClose}
          content={children}
          action={action}
          onClose={() => {
            onClose && onClose();
          }}
        />
      </div>,
      this.rootEl,
    );
  }
}

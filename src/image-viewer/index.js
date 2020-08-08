/**
 * 图片预览
 * @author mars.xu
 * edit by john.gao
 */
'use strict';

import React from 'react';
import { createPortal } from 'react-dom';
import Swipe from '../swipe/index';
import classnames from 'classnames';

export default class ImageViewer extends React.Component {

  static defaultProps = {
    prefixCls: 'image-viewer',
    position: 0, //预览图片的初始位置
  }

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
      onClose,
      position = 0,
      children,
    } = this.props;
    return visible ? createPortal(
      <div className={classnames(prefixCls, className)}>
        <Swipe
          indicator
          showCloseBtn
          startSlide={position}
          style={{
            container: { width: "100%" },
            wrapper: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
          }}
          swipeOptions={{ startSlide: position, continuous: false, stopPropagation: true }}
          close={_ => {
            if (onClose) {
              onClose();
            }
          }}>
          {children}
        </Swipe>
      </div>,
      this.rootEl,
    ) : null;
  }
}

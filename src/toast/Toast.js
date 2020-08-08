/**
 * Toast
 * @author john.gao
 */


import React from 'react';
import classnames from 'classnames';

class Toast extends React.Component {
  render() {
    const { content, prefixCls, className } = this.props;
    return (
      <div className={classnames(prefixCls, className)}>
        <div className={`${prefixCls}-content`}>
          <div className={`${prefixCls}-title`}>
            {content}
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  componentDidMount() {
    const { duration } = this.props;
    this.clearCloseTimer();
    if (duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration * 1000);
    }
  }

  /**
   * 清除定时器
   */
  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  /**
   * 关闭
   */
  close() {
    const { onClose } = this.props;
    this.clearCloseTimer();
    onClose();
  }
}

Toast.defaultProps = {
  prefixCls: 'wme-toast',
  duration: 2.5,
};

export default Toast;

/**
 * Message
 * @author john.gao
 */


import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Button from '../button/index';

class Message extends React.Component {
  // 关闭
  close(e) {
    const { isMaskClose = true, onClose } = this.props;
    const container = ReactDOM.findDOMNode(this.refs.messageContainer);
    if (!this.isDescendant(container, e.target)) {
      e.stopPropagation();
      if (isMaskClose) {
        onClose();
      }
    }
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  componentDidMount() {
    this.clearCloseTimer();
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.props.onClose();
      }, this.props.duration * 1000);
    }
  }

  render() {
    const { prefixCls, icon, title, content, action, onClose, className, style, direction, isMaskClose = true } = this.props;

    const iconWrap = classnames(`${prefixCls}-icon`, {
      [`${prefixCls}-icon-success`]: icon === 'success',
      [`${prefixCls}-icon-fail`]: icon === 'fail',
    });

    const titleIconWrap = icon === 'success' ? `${prefixCls}-title-success` : '';

    const actionWrap = classnames(`${prefixCls}-action`, {
      [`${prefixCls}-action-row`]: direction === 'row',
      [`${prefixCls}-action-column`]: direction === 'column',
    });
    return (
      <div
        className={classnames(prefixCls, className)}
        onClick={(e) => this.close(e)}
      >
        <div
          className={`${prefixCls}-container`}
          style={style}
          ref="messageContainer"
        >
          {icon && <div className={iconWrap} />}
          {title && (
          <div className={`${prefixCls}-title`}>
            <i className={titleIconWrap} />
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          )}
          {content ? (
            <div
              className={`${prefixCls}-content`}
              style={{ maxHeight: window.screen.height * 0.7 }}
            >
              {content}
            </div>
          ) : null}
          <div className={actionWrap}>
            {action && action.map((item, index) => (
              <Button
                key={`button-${index}`}
                className="button"
                title={item.label}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  }
                  onClose();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
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


  /**
   * 清除定时器
   */
  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }
}

Message.defaultProps = {
  prefixCls: 'yuso-message',
  direction: 'row',
};

export default Message;

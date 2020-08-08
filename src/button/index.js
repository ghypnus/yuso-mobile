/**
 * 按钮
 * @author john.gao
 */


import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/index';

export default class Button extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-button',
    size: 'large',
    type: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      actClass: '',
    };
  }

  render() {
    const { prefixCls, style, onClick, className, icon, title, disabled, actClass, type, inline, size, children, ...restProps } = this.props;

    const wrapCls = classnames(prefixCls, className, this.state.actClass, {
      [`${prefixCls}-inline`]: inline,
      [`${prefixCls}-primary`]: type === 'primary',
      [`${prefixCls}-warning`]: type === 'warning',
      [`${prefixCls}-ghost`]: type === 'ghost',
      [`${prefixCls}-link`]: type === 'link',
      [`${prefixCls}-search`]: type === 'search',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-disabled`]: disabled,
    });
    return (
      <a
        style={style}
        className={wrapCls}
        onClick={disabled ? null : (e) => onClick && onClick(e)}
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
        {...restProps}
      >
        {title || children}
      </a>
    );
  }

  handleTouchStart() {
    const { actClass } = this.props;
    if (!actClass) return;
    this.setState(() => ({
      actClass,
    }));
  }

  handleTouchEnd() {
    const { actClass } = this.props;
    if (!actClass) return;
    this.setState(() => ({
      actClass: '',
    }));
  }
}

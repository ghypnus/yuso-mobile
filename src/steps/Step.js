/*
 * 单个步骤
 * @author ghypnus
 * @date 2020-08-17
 */
import React from 'react';
import classnames from 'classnames';

export default class Step extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'yuso-steps-item',
  }

  renderIcon() {
    const { icon, stepNumber } = this.props;
    return icon || stepNumber;
  }

  render() {
    const { prefixCls, status = 'wait', title, description } = this.props;
    const wrapCls = classnames(prefixCls, {
      [`${prefixCls}-${status}`]: status,
    });
    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}-line`} />
        <div className={`${prefixCls}-icon`}>{this.renderIcon()}</div>
        <div className={`${prefixCls}-content`}>
          {title && <div className={`${prefixCls}-title`}>{title}</div>}
          {description && <div className={`${prefixCls}-description`}>{description}</div>}
        </div>
      </div>
    );
  }
}

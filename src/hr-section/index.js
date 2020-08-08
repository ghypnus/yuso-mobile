import React from 'react';
import classnames from 'classnames';

export default class HrSection extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-section',
  }

  render() {
    const { title, action, style, className, prefixCls, children } = this.props;
    const wrapCls = classnames(className, prefixCls);
    return (
      <div style={style} className={wrapCls}>
        {title && (
          <div className={`${prefixCls}-toolbar`}>
            <span className={`${prefixCls}-title`}>{title}</span>
            {action}
          </div>
        )}
        {children}
      </div>
    );
  }
}

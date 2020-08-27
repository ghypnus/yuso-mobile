/*
 * 空
 * @author ghypnus
 * @date 2020-08-25
 */
import React from 'react';
import Icon from '../icon/index';

export default class Empty extends React.PureComponent {
    static defaultProps = {
      prefixCls: 'yuso-empty',
      title: '暂无数据',
      icon: 'car-01',
    }

    render() {
      const { prefixCls, title, icon, children } = this.props;
      return (
        <div className={prefixCls}>
          {children || (
            <div className={`${prefixCls}-wrap`}>
              <Icon value={icon} size="large" />
              <div className={`${prefixCls}-title`}>{title}</div>
            </div>
          )}
        </div>
      );
    }
}

/**
 * Loading
 * @author john.gao
 */


import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/index';

export default class Loading extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'yuso-loading',
  }

  render() {
    const { prefixCls, className } = this.props;
    return (
      <div className={classnames(prefixCls, className)}>
        <Icon value="loading" size="large" />
      </div>
    );
  }
}

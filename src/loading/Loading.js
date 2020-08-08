/**
 * Loading
 * @author john.gao
 */


import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/index';

export default class Loading extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-loading',
  }

  render() {
    const { prefixCls, className } = this.props;
    return (
      <div className={classnames(prefixCls, className)}>
        <Icon type="loading" size="large" />
      </div>
    );
  }
}

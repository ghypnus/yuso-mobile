import React, { Component } from 'react';
import YusoTabs from './Tabs';
import DefaultTabBar from './DefaultTabBar';

/**
 * Tabs标签页
 * @author john.gao
 * @date 2020-03-20
 */
export default class Tabs extends Component {
  renderTabBar = (props) => {
    const { renderTab } = this.props;
    return <DefaultTabBar {...props} renderTab={renderTab} />;
  }

  render() {
    const { className, ...restProps } = this.props;
    return <YusoTabs className={className} renderTabBar={this.renderTabBar} {...restProps} />;
  }
}

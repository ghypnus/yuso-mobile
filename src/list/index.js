/**
 * List
 * @author john.gao
 */

import React from 'react';
import classnames from 'classnames';
import Item from './ListItem';

class List extends React.PureComponent {
  render() {
    const { prefixCls, children, direction, className, style, type } = this.props;
    const { renderHeader, renderFooter } = this.props;
    const bodyCls = classnames(`${prefixCls}-body`, {
      [`${prefixCls}-body-row`]: direction === 'row',
      [`${prefixCls}-body-column`]: direction === 'column',
      [`${prefixCls}-body-view`]: type === 'view',

    });
    return (
      <div
        className={classnames(prefixCls, className)}
        style={style}
      >
        { renderHeader ? (
          <div className={`${prefixCls}-header`}>
            { typeof renderHeader === 'function' ? renderHeader() : renderHeader }
          </div>
        ) : null }
        { children ? (
          <div className={bodyCls}>
            { children }
          </div>
        ) : null }
        { renderFooter ? (
          <div className={`${prefixCls}-footer`}>
            { typeof renderFooter === 'function' ? renderFooter() : renderFooter }
          </div>
        ) : null }
      </div>
    );
  }
}

List.defaultProps = {
  prefixCls: 'yuso-list',
  direction: 'row',
};

List.Item = Item;

export default List;

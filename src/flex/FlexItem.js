import React from 'react';
import classnames from 'classnames';


class FlexItem extends React.Component {
  render() {
    const { children, className, prefixCls, style } = this.props;
    const wrapCls = classnames(`${prefixCls}-item`, className);
    return (
      <div
        className={wrapCls}
        style={style}
      >
        { children }
      </div>
    );
  }
}

FlexItem.defaultProps = {
  prefixCls: 'yuso-flexbox',
};

export default FlexItem;

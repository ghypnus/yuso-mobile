import React from 'react';
import classnames from 'classnames';


export default class FlexItem extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'yuso-flexbox-item',
    direction: 'row',
  }

  render() {
    const { children, className, prefixCls, style, direction } = this.props;
    const wrapCls = classnames(`${prefixCls}`, className, {
      [`${prefixCls}-${direction}`]: direction,
    });
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

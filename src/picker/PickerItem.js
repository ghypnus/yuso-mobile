import React from 'react';
import classnames from 'classnames';

class PickerItem extends React.Component {
  static defaultProps = {
    prefixCls: 'wme-picker',
    value: null,
  }

  render() {
    const { prefixCls, className, style, children } = this.props;
    const wrapCls = classnames(`${prefixCls}-item`, className);
    return (
      <div className={wrapCls} style={style}>
        { children }
      </div>
    );
  }
}

export default PickerItem;

/**
 * 切换开关
 */
import React from 'react';
import classnames from 'classnames';

class Switch extends React.Component {
  render() {
    const { prefixCls, value, readOnly, disabled, className, color, onChange } = this.props;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-checked`]: value,
      [`${prefixCls}-read-only`]: readOnly,
      [`${prefixCls}-disabled`]: disabled,
    });
    const style = this.props.style || {};
    if (color && value) {
      style.backgroundColor = color;
      style.boxShadow = `${color} 0 0 0 1rem inset`;
      style.borderColor = color;
    }

    return (
      <div
        className={wrapCls}
        style={style}
        onClick={() => {
          onChange && onChange(!value);
        }}
      >
        <span className="slider" />
      </div>
    );
  }
}

Switch.defaultProps = {
  prefixCls: 'yuso-switch',
  name: '',
  value: false,
  disabled: false,
  onChange() { },
};

export default Switch;

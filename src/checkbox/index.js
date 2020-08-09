/**
 * 复选框
 * @author john.gao
 */


import React from 'react';
import classnames from 'classnames';

export default class Input extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-checkbox',
    size: 'large',
  }

  constructor(props) {
    super(props);

    this.state = {
      value: props.value || props.defaultValue,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  handleChange(e) {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    const value = e.target.checked;

    const { onChange } = this.props;

    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }

    if (onChange) {
      onChange(value);
    }
  }


  render() {
    const { prefixCls, className, size, onChange, style, title, disabled, color, circle, ...restProps } = this.props;
    const { value } = this.state;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-checked`]: value,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-circle`]: circle,
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-mini`]: size === 'mini',
    });

    const innerCls = classnames(`${prefixCls}-inner`, {
      [`${prefixCls}-inner-blue`]: color === 'blue',
    });
    return (
      <div
        className={wrapCls}
        style={style}
      >
        <span>
          <span className={innerCls} />
          <label className={`${prefixCls}-title`}>
            <input
              onChange={(e) => this.handleChange(e)}
              type="checkbox"
              checked={!!value}
            />
            {title}
          </label>
        </span>

      </div>
    );
  }
}

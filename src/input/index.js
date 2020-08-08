/**
 * 输入框
 * @author john.gao
 */


import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/index';

export default class Input extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-input',
    type: 'text',
    size: 'large',
    align: 'left',
  }

  constructor(props) {
    super(props);

    this.state = {
      isEyeOpen: false, // 是否显示明文
    };
  }

  getValue(e) {
    let value = e.target.value;
    const { type, digit } = this.props;

    switch (type) {
      case 'text':
        break;
      case 'phone':
        value = value.replace(/\D/g, '').substring(0, 11);
        break;
      case 'number':
        value = value.replace(/\D/g, '');
        break;
      case 'decimal':
        if (digit) {
          if (value) {
            value = Math.floor(value * 100) / 100;
          }
        }
        break;
      default:
        break;
    }
    return value;
  }

  handleInput(e) {
    const value = this.getValue(e);
    // if (this.isComposing) return;
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  }

  handleFocus(e) {
    this.fValue = e.target.value;
  }

  handleBlur(e) {
    if (e.target.value === this.fValue) return;
    const value = this.getValue(e);
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(value);
    }
  }

  onInputClear() {
    const { onChange } = this.props;
    if (onChange) {
      onChange('');
    }
  }

  formatThousand(value) {
    if (value) {
      return value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
    }
    return value;
  }

  handleCapture() {
    this.setState({
      isEyeOpen: !this.state.isEyeOpen,
    });
    if (this.props.onClick) {
      this.props.onClick(this.props.type === 'password' ? 'text' : 'password');
    }
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  render() {
    const { prefixCls, value, className, icon, eye, type, size, search, onChange, onReset, readOnly, refCb, active, onClick, close, ...otherProps } = this.props;
    const { style, title, maxLength, unit, align, ismust, disabled, name, placeholder, autoComplete = 'new-password' } = otherProps;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-icon`]: icon !== undefined,
      [`${prefixCls}-search`]: icon === 'search',
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-align-left`]: align === 'left',
      [`${prefixCls}-align-center`]: align === 'center',
      [`${prefixCls}-align-right`]: align === 'right',
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-read-only`]: readOnly,
    });

    const iconCls = classnames(`${prefixCls}-icon-${icon}`, {
      [`${prefixCls}-icon-${icon}-active`]: active,
    });

    let inputType = 'text';
    if (type === 'phone') {
      inputType = 'tel';
    } else if (type === 'password') {
      inputType = 'password';
    } else if (type === 'decimal') {
      inputType = 'number';
    } else if (type !== 'text' && type !== 'number') {
      inputType = type;
    }

    let patternProps;
    if (type === 'number') {
      patternProps = {
        pattern: '[0-9]*',
      };
    }

    const needClose = close && value && !disabled;

    return (
      <div
        className={wrapCls}
        style={style}
      >
        {!!icon && <i className={iconCls} />}
        {!!title && (
          <div className={`${prefixCls}-title`}>
            <span>{ismust ? '*' : ''}</span>
            {title}
          </div>
        )}
        <input
          {...patternProps}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          onChange={(e) => this.handleInput(e)}
          onFocus={(e) => this.handleFocus(e)}
          onBlur={(e) => this.handleBlur(e)}
          readOnly={readOnly}
          type={inputType}
          ref={(input) => { refCb ? refCb(input) : this.input = input; }}
          autoComplete={autoComplete}
          value={value || ''}
        />
        {!!unit && (
          <div className={`${prefixCls}-unit`}>
            {unit}
          </div>
        )}
        {needClose && (
          <Icon
            className={`${prefixCls}-close`}
            type="delete_fill"
            onClick={(e) => {
              onReset && onReset();
              this.onInputClear(e);
            }}
          />
        )}
        {eye && (
          <div
            className="eye"
            onClick={(e) => this.handleCapture(e)}
          >
            <Icon type={this.state.isEyeOpen ? 'eye-close' : 'eye'} />
          </div>
        )}
      </div>
    );
  }
}

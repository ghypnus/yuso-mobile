/**
 * Textarea
 * @author john.gao
 */


import React from 'react';
import isEmpty from 'lodash/isEmpty';
import classnames from 'classnames';

// 正则
const regexCharacters = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;

// 计算字符长度
function countCharacters(v = '') {
  const text = isEmpty(v) ? '' : v;
  return text.replace(regexCharacters, '_').length;
}

export default class TextArea extends React.Component {
  static defaultProps = {
    prefixCls: 'wme-textarea',
    autoHeight: false,
    disabled: false,
    rows: 2,
    onChange: () => {
    },
    onBlur: () => {
    },
    onFocus: () => {
    },
  }


  textareaRef;

  debounceTimeout; // 防止blur后focus或者focus后blur（反跳）

  scrollIntoViewTimeout; // 重新布局可见区域

  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };
  }

  destroy() {
    // TODO 收键盘
  }


  componentDidMount() {
    const { autoHeight } = this.props;
    if (autoHeight) {
      this.reAlignHeight();
    }
  }

  componentDidUpdate() {
    const { autoHeight } = this.props;
    const { focus } = this.state;
    if (autoHeight && focus) {
      this.reAlignHeight();
    }
  }

  componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }

    if (this.scrollIntoViewTimeout) {
      clearTimeout(this.scrollIntoViewTimeout);
      this.scrollIntoViewTimeout = null;
    }
  }

  reAlignHeight() {
    const textareaDom = this.textareaRef;
    textareaDom.style.height = ''; // 字数减少时能自动减小高度
    textareaDom.style.height = `${textareaDom.scrollHeight}px`;
  }

  focus() {
    this.textareaRef.focus();
  }

  blur() {
    this.textareaRef.blur();
  }

  handleInput(e) {
    const value = e.target.value;

    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    // 设置 defaultValue 时，用户输入不会触发 componentDidUpdate ，此处手工调用
    this.componentDidUpdate();
  }

  onBlur(e) {
    const { onBlur, onChange } = this.props;
    this.debounceTimeout = setTimeout(() => {
      if (document.activeElement !== this.textareaRef) {
        this.setState({
          focus: false,
        });
      }
    }, 100);
    this.setState({
      focus: false,
    });
    const value = e.target.value;
    if (onBlur) {
      onBlur(value);
    }
    if (value === this.fValue) return;
    if (onChange) {
      onChange(value, e.target.name);
    }
  }

  onFocus(e) {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
    this.setState({
      focus: true,
    });
    const value = e.target.value;
    this.fValue = value;
    if (this.props.onFocus) {
      this.props.onFocus(value);
    }

    if (document.activeElement.tagName.toLowerCase() === 'textarea') {
      this.scrollIntoViewTimeout = setTimeout(() => {
        try {
          document.activeElement.scrollIntoViewIfNeeded();
        } catch (ex) {
          console.log(ex);
        }
      }, 100);
    }
  }

  render() {
    const { prefixCls, value = '', className, style, length, autoHeight, title, disabled, readOnly, ismust, ...restProps } = this.props;
    const { focus } = this.state;
    const wrapCls = classnames(className, prefixCls, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-focus`]: focus,
      [`${prefixCls}-read-only`]: readOnly
    });
    const characterLength = countCharacters(value);
    const lengthCtrlProps = {};
    if (length > 0) {
      lengthCtrlProps.maxLength = (length - characterLength) + (value ? value.length : 0);
    }
    return (
      <div
        className={wrapCls}
        style={style}
      >
        { !!title && (
        <div className={`${prefixCls}-title`}>
          <span>{ismust ? '*' : ''}</span>
          { title }
        </div>
        ) }
        <textarea
          ref={(el) => this.textareaRef = el}
          {...lengthCtrlProps}
          {...restProps}
          value={value || ''}
          onChange={(e) => this.handleInput(e)}
          onBlur={(e) => this.onBlur(e)}
          onFocus={(e) => this.onFocus(e)}
          readOnly={readOnly}
          disabled={disabled}
        />
        { length > 0 && this.props.rows > 1 && (
        <span className={`${prefixCls}-length`}>
          <span>{ value ? characterLength : 0 }</span>
          /
          { length }
        </span>
        ) }
      </div>

    );
  }
}

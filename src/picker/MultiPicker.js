import React from 'react';
import classnames from 'classnames';

export default class MultiPicker extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-multi-picker',
    onValueChange() {},
  }

  render() {
    const { prefixCls, className, children, style } = this.props;
    const selectedValue = this.getValue();
    const colElements = React.Children.map(children, (col, i) => React.cloneElement(col, {
      selectedValue: selectedValue[i],
      onValueChange: (...args) => this.onValueChange(i, ...args),
      onScrollChange: this.onScrollChange && ((...args) => this.onScrollChange(i, ...args)),
    }));
    return (
      <div
        style={style}
        className={classnames(className, prefixCls)}
      >
        { colElements }
      </div>
    );
  }

  onValueChange = (i, v) => {
    this.onChange(i, v, this.props.onValueChange);
  }

  onChange = (i, v, cb) => {
    const value = this.getValue().concat();
    value[i] = v;
    if (cb) {
      cb(value, i);
    }
  }

  onScrollChange = (i, v) => {
    this.onChange(i, v, this.props.onScrollChange);
  }

  getValue() {
    const { children, selectedValue } = this.props;
    if (selectedValue && selectedValue.length) {
      return selectedValue;
    }
    if (!children) {
      return [];
    }
    return React.Children.map((children, c) => {
      const cc = React.Children.toArray(c.children || c.props.children);
      return cc && cc[0] && cc[0].props.value;
    });
  }
}

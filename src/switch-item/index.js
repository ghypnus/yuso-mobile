import React from 'react';
import Switch from '../switch/index';

export default class SwitchItem extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-switch-item',
  }

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }


  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      if (this.state.value !== nextProps.value) {
        this.setState({
          value: nextProps.value,
        });
      }
    }
  }


  render() {
    const { prefixCls, style, title, ismust, ...restProps } = this.props;

    const { value } = this.state;

    return (
      <div className={prefixCls} style={style}>
        <div className={`${prefixCls}-title`}>
          <span>{ismust ? '*' : ''}</span>
          {title}
        </div>
        <div className={`${prefixCls}-content`}>
          <Switch
            value={value}
            {...restProps}
          />
        </div>
      </div>
    );
  }
}

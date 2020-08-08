import React from 'react';
import { getPxStyle, getTransformPropValue } from '../_utils/animate';

export default class TabPane extends React.PureComponent {
  static defaultProps = {
    fixX: true,
    fixY: true,
  };

  constructor(props) {
    super(props);
    this.layout = null;
    this.offsetX = 0;
    this.offsetY = 0;
    this.state = {
      active: props.active,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.active !== prevState.active) {
      return {
        active: nextProps.active,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.active !== prevState.active) {
      if (prevProps.active) {
        this.offsetX = 0;
        this.offsetY = 0;
      } else {
        this.offsetX = this.layout.scrollLeft;
        this.offsetY = this.layout.scrollTop;
      }
    }
  }

  setLayout = (div) => {
    this.layout = div;
  }

  render() {
    const { className, active, fixX, fixY, ...restProps } = this.props;
    const style = {
      ...fixX && this.offsetX ? getTransformPropValue(getPxStyle(-this.offsetX, 'px', false)) : {},
      ...fixY && this.offsetY ? getTransformPropValue(getPxStyle(-this.offsetY, 'px', true)) : {},
    };

    return (
      <div className={className} {...restProps} style={style} ref={this.setLayout}>
        {restProps.children}
      </div>
    );
  }
}

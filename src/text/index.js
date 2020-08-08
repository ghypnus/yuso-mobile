import React from 'react';
import View from '../view/index';

class Text extends React.Component {
  render() {
    const { color, content, style, ...resetPorops } = this.props;
    const textStyle = { ...style };
    if (color) {
      textStyle.color = color;
    }
    return (
      <View style={textStyle} {...resetPorops}>
        { content }
      </View>
    );
  }
}

Text.defaultProps = {
  Component: 'div',
};

export default Text;

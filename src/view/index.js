import React from 'react';

class View extends React.Component {
  render() {
    const { Component, ...restProps } = this.props;
    return <Component {...restProps} />;
  }
}

View.defaultProps = {
  Component: 'div',
};

export default View;

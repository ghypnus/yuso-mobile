/**
 * Grid
 * @author john.gao
 */
import React from 'react';
import classnames from 'classnames';
import Item from './GridItem';

class Grid extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-grid',
    cols: 4,
  }

  getGridItem() {
    const { data, disabled, cols } = this.props;
    return data.map((item, index) => (
      <Item
        align={item.align}
        style={{ width: `calc(100%/${cols})`, height: item.height }}
        key={index}
        value={item.value}
        onClick={item.onClick}
        disabled={disabled}
      >
        { item.label }
      </Item>
    ));
  }

  render() {
    const { prefixCls, children, className, style } = this.props;
    return (
      <div style={style} className={classnames(prefixCls, className)}>
        { children || this.getGridItem() }
      </div>
    );
  }
}

Grid.Item = Item;

export default Grid;

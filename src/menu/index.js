import React from 'react';
import classnames from 'classnames';
import Scroller from '../scroller/index';
import Flex from '../flex/index';
import List from '../list/index';

export default class Menu extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-menu',
    direction: 'row',
    height: '3rem',
    data: [],
  }

  constructor(props) {
    super(props);

    this.state = {
      firstLevelSelectValue: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      if (this.state.firstLevelSelectValue !== nextProps.value) {
        this.setState({
          firstLevelSelectValue: nextProps.value,
        });
      }
    }
  }

  onClickFirstLevelItem(dataItem) {
    const { onChange } = this.props;
    this.setState({
      firstLevelSelectValue: dataItem.value,
    });
    if (onChange) {
      onChange([dataItem.value]);
    }
  }

  scrollToStart() {
    this.Scroller.scrollTo(0, 0);
  }

  scrollToEnd() {
    const maxScrollX = Math.abs(this.Scroller.getMaxScrollX());
    this.Scroller.scrollTo(maxScrollX, 0);
  }

  render() {
    const { className, style, data = [], height, prefixCls, direction, scroller, size = 'square', itemStyle, labelStyle } = this.props;
    const { firstLevelSelectValue, value } = this.state;

    const heightStyle = {
      height,
    };

    const contentList = (
      <List direction={direction}>
        { data.map((dataItem, index) => (
          <List.Item
            {...dataItem}
            size={size}
            style={itemStyle}
            wrap={!!(scroller === true && direction === 'row')}
            onClick={() => this.onClickFirstLevelItem(dataItem)}
            key={`listitem-1-${index}`}
            selected={dataItem.value === firstLevelSelectValue}
          >
            <div style={labelStyle}>{ dataItem.label }</div>
          </List.Item>
        )) }
      </List>
    );
    return (
      <Flex
        className={classnames(prefixCls, className)}
        style={({ ...style, ...heightStyle })}
        direction="row"
      >
        <Flex.Item style={heightStyle}>
          { scroller === true ? (
            <Scroller
              ref={(Comp) => this.Scroller = Comp}
              scrollX={direction === 'row'}
              scrollY={direction === 'column'}
            >
              { contentList }
            </Scroller>
          ) : contentList }
        </Flex.Item>
      </Flex>
    );
  }
}

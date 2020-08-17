/**
 * GridItem
 * @author john.gao
 */
import React from 'react';
import classnames from 'classnames';

export default class GridItem extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'yuso-grid',
    align: 'middle',
  }

  render() {
    // 前缀、样式名、对齐方式、不可编辑、分割线、children、点击事件、图片
    const { prefixCls, className, align, disabled, divider, children, onClick, thumb, value, ...restProps } = this.props;

    // 对齐、不可编辑
    const wrapCls = classnames(`${prefixCls}-item`, className, {
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-left`]: align === 'left',
      [`${prefixCls}-item-center`]: align === 'center',
      [`${prefixCls}-item-right`]: align === 'right',
      [`${prefixCls}-item-divider`]: divider,
    });

    return (
      <div
        {...restProps}
        className={wrapCls}
        onClick={(e) => {
          if (onClick) {
            onClick(value);
          }
        }}
      >
        { thumb ? <img src={thumb} /> : null }
        { children !== undefined
                 && (
                 <div className={`${prefixCls}-content`}>
                   { children }
                 </div>
                 ) }
      </div>
    );
  }
}

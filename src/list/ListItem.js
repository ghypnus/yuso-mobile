/**
 * ListItem
 * @author john.gao
 */
import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/index.js';

const errSrc = 'data:image/png;base64,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';

export default class ListItem extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-list',
    align: 'center',
    error: false,
    multipleLine: false,
    wrap: false,
  }

  render() {
    // 前缀、样式名、对齐方式、文本对齐方式、超出长度省略号、换行、样式、多行文本、箭头、错误、不可编辑、分割线、类型>title:标题
    const { prefixCls, className, align, textAlign, ellipsis, wrap, style, multipleLine, arrow, error, disabled, divider, type, size } = this.props;
    // children、选中、点击事件、右侧补充内容、图片、图片高亮、Icon、Icon大小、高亮底线
    const { children, selected, onClick, onClickCapture, extra, thumb, thumbLight, icon, iconSize, underline } = this.props;
    // 对齐、错误、不可编辑
    const wrapCls = classnames(`${prefixCls}-item`, className, {
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-error`]: error,
      [`${prefixCls}-item-top`]: align === 'top',
      [`${prefixCls}-item-center`]: align === 'center',
      [`${prefixCls}-item-bottom`]: align === 'bottom',
      [`${prefixCls}-item-text-left`]: textAlign === 'left',
      [`${prefixCls}-item-divider`]: divider,
      [`${prefixCls}-item-title`]: type === 'title',
      [`${prefixCls}-item-view`]: type === 'view',
    });
    // 图片
    const thumbCls = classnames(`${prefixCls}-thumb`, {
      [`${prefixCls}-thumb-large`]: size === 'large',
      [`${prefixCls}-thumb-small`]: size === 'small',
      [`${prefixCls}-thumb-normal`]: size === 'normal',
      [`${prefixCls}-thumb-square`]: size === 'square',
    });
    // iocn
    const iconCls = classnames(`${prefixCls}-icon`, {
      [`${prefixCls}-icon-active`]: selected,
      [`${prefixCls}-icon-unactive`]: !selected,
    });
    // 多行文本、文本换行方式
    const lineCls = classnames(`${prefixCls}-line`, {
      [`${prefixCls}-line-multiple`]: multipleLine,
      [`${prefixCls}-line-ellipsis`]: ellipsis,
      [`${prefixCls}-line-wrap`]: wrap,
      [`${prefixCls}-line-selected`]: selected,
    });
    // 箭头和它方向
    const arrowCls = classnames(`${prefixCls}-arrow`, {
      [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
      [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
      [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
    });
    // 当前选中
    const underlineCls = classnames(`${prefixCls}-underline`);
    return (
      <div
        style={style}
        className={wrapCls}
        onClick={(e) => onClick && onClick(e)}
        onClickCapture={(e) => onClickCapture && onClickCapture(e)}
      >
        {thumb
          ? (
            <img
              ref={(img) => this.img = img}
              onError={() => this.img.src = errSrc}
              className={thumbCls}
              src={selected ? thumbLight : thumb}
            />
          )
          : null}
        {icon && (
          <Icon
            type={icon}
            size={iconSize}
            className={iconCls}
          />
        )}
        {children !== undefined
          && (
            <div className={lineCls}>
              <div className={`${prefixCls}-content`}>
                {children}
              </div>
              {extra !== undefined && (
                <div className={`${prefixCls}-extra`}>
                  {extra}
                </div>
              )}
              {arrow && (
                <Icon
                  type="enter"
                  size="small"
                  className={arrowCls}
                />
              )}
              {underline && selected && <div className={underlineCls} />}
            </div>
          )}
      </div>
    );
  }
}

import React from 'react';
import classnames from 'classnames';

export default class Icon extends React.PureComponent {
    static defaultProps = {
      prefixCls: 'yuso-icon',
    }

    render() {
      const { value, type, size, onClick, prefixCls, className, style } = this.props;

      const wrapCls = classnames(prefixCls, className, {
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-${type}`]: type,
      });
      return (
        <svg
          style={style}
          className={wrapCls}
          aria-hidden="true"
          onClick={(e) => {
            onClick && onClick(e);
          }}
        >
          <use href={`#${value}`} />
        </svg>
      );
    }
}

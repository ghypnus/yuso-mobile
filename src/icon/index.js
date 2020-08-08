import React from 'react';
import classnames from 'classnames';

export default class Icon extends React.Component {
    static defaultProps = {
      prefixCls: 'wme-icon',
    }

    render() {
      const { type, size, onClick, prefixCls, className, style } = this.props;

      const wrapCls = classnames(prefixCls, className, {
        [`${prefixCls}-${size}`]: size
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
          <use href={`#${type}`} />
        </svg>
      );
    }
}

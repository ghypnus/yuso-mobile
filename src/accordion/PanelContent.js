import React, { Component } from 'react';
import classnames from 'classnames';
import isEqual from 'lodash/isEqual';

export default class PanelContent extends Component {
  shouldComponentUpdate(nextProps) {
    const { forceRender } = this.props;
    return forceRender || !isEqual(this.props, nextProps);
  }

  render() {
    const { prefixCls, isActive, children, destroyInactivePanel, forceRender, role, panelHeight } = this.props;
    this._isActived = forceRender || this._isActived || isActive;
    const contentCls = classnames({
      [`${prefixCls}-content`]: true,
      [`${prefixCls}-content-active`]: isActive,
      [`${prefixCls}-content-inactive`]: !isActive,
    });
    const child = !forceRender && !isActive && destroyInactivePanel ? null
      : <div className={`${prefixCls}-content-box`}>{children}</div>;
    let style = {};
    if(panelHeight){
      style.height = panelHeight;
    }
    return (
      <div
        ref={(el) => this.rootRef = el}
        style={style}
        className={contentCls}
        role={role}
      >
        {child}
      </div>
    );
  }
}

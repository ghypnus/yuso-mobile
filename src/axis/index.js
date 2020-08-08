/**
 * 时光轴
 * @author john.gao
 */


import React from 'react';
import classnames from 'classnames';

export default class Axis extends React.Component {
    static defaultProps = {
      prefixCls: 'yuso-axis',
    }

    render() {
      const { prefixCls, className, title, extra, data = [], line, lastLine = true } = this.props;
      const wrap = classnames(prefixCls, className);

      return (
        <div className={wrap}>
          {(title || extra) && (
          <div className={classnames(`${prefixCls}-header`, {
            [`${prefixCls}-header-undeline`]: data.length > 0,
          })}
          >
            <div>{ title || ' '}</div>
            <div className={`${prefixCls}-header-extra`}>
              {extra}
            </div>
          </div>
          ) }
          {data.length > 0 && (
          <div className={`${prefixCls}-container`}>
            { data.map((item, idx) => {
              const pointHeight = item.node ? item.node.props.style.height.replace('px', '') : 14;
              const lineHeight = `calc(100% - ${pointHeight}px)`;
              const titleWrap = classnames(`${prefixCls}-item-center-title`, {
                [`${prefixCls}-item-center-title-right`]: item.align === 'right',
              });
              return (
                <div
                  key={`${prefixCls}-${idx}`}
                  className={`${prefixCls}-item`}
                >
                  {line && (
                  <div className={`${prefixCls}-item-node`}>
                    { item.node ? item.node
                      : (
                        <div className={`${prefixCls}-item-node-point`}>
                          <i />
                        </div>
                      )}
                    { idx === data.length - 1
                      ? lastLine
                        ? (
                          <div
                            className={`${prefixCls}-item-node-line`}
                            style={{ top: `${pointHeight}px`, height: lineHeight }}
                          />
                        )
                        : null
                      : (
                        <div
                          className={`${prefixCls}-item-node-line`}
                          style={{ top: `${pointHeight}px`, height: lineHeight }}
                        />
                      )}

                  </div>
                  ) }
                  <div
                    className={`${prefixCls}-item-center`}
                    style={{ marginTop: `${(pointHeight - 21) / 2}px` }}
                  >
                    {item.date && (
                    <div className={`${prefixCls}-item-center-date`}>
                      {item.date}
                    </div>
                    ) }
                    {item.title && (
                    <div className={titleWrap}>
                      {item.title}
                      <div className={`${prefixCls}-item-center-title-extra`}>{item.extra}</div>
                    </div>
                    )}
                    <div className={`${prefixCls}-item-center-content`}>
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          )}
        </div>
      );
    }
}

/**
 * 头像
 * @author john.gao
 */


import React from 'react';
import classnames from 'classnames';

class Avatar extends React.Component {
  static defaultProps = {
    prefixCls: 'wme-avatar',
  }

  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('src' in nextProps) {
      this.setState({
        src: nextProps.src,
      });
    }
  }

  render() {
    const { prefixCls, style = {}, errSrc, title, className, size } = this.props;

    const wrap = classnames(prefixCls, className, {
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-large`]: size === 'large',
    });

    let newStyle = { ...style };
    if (typeof size === 'number') {
      newStyle.width = size;
      newStyle.height = size;
      newStyle.fontSize = '1rem'
    }

    let avaTitle = title;
    if (avaTitle) {
      const patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
      if (patrn.exec(avaTitle)) {
        avaTitle = avaTitle.slice(-2);
      } else {
        avaTitle = avaTitle.slice(0, 2);
      }
    }

    const cls = classnames(`${prefixCls}-content`, this.state.src ? `${prefixCls}-image` : `${prefixCls}-title`);

    return (
      <div
        className={wrap}
        style={newStyle}
      >
        <div className={cls}>
          {this.state.src ? '' : avaTitle}
          {this.state.src && <img
            src={this.state.src}
            onLoad={e => {
              let width = e.target.clientWidth;
              let height = e.target.clientHeight;
              if (width > height) {
                e.target.style.height = '100%';
              } else {
                e.target.style.width = '100%';
              }
            }}
            onError={(e) => {
              const url = title ? '' : errSrc;
              this.setState({
                src: url,
              });
            }}
          />}
        </div>

      </div>
    );
  }
}

export default Avatar;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/**
 * 图片九宫格
 * @author john
 */

import React from 'react';
import Upload from '../upload/index';
import Icon from '../icon/index';
import errorPng from './image/pic_error.png';
import { Consumer } from '../locale-provider/HrContext';
import ImageViewer from '../image-viewer/index';

class IMagePicker extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-image-picker',
    count: 9,
    onSelect: () => {
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      viewerVisible: false,
      viewerPosition: 0,
    };
  }

  destroy() {
    // TODO 销毁
  }

  getValue(value) {
    let result = [];
    if (value !== undefined && value !== '' && value !== null) {
      if (typeof value === 'string') {
        const array = value.split(',');
        result = array.map((item) => ({
          src: item,
        }));
      } else {
        result = value.map((item) => (!item.src ? {
          src: item,
        } : item));
      }
    }
    return result;
  }

  render() {
    const { prefixCls, title, uploadText, onSelect, ismust, onDelete, onClick, style, errSrc, count = 1, value, readOnly, placeholder, ...restProps } = this.props;
    const files = this.getValue(value);
    return (
      <Consumer>
        {({ ImagePicker }) => (
          <div className={prefixCls} style={style}>
            {title && (
              <div className={`${prefixCls}-title`}>
                <span>{ismust ? '*' : ''}</span>
                {title}
              </div>
            )}
            <ul>
              {files.length !== 0 ? files.map((item, index) => (
                <li key={`li-${index}`}>
                  <div className={`${prefixCls}-outer`}>
                    {onDelete && !readOnly && (
                      <Icon
                        className={`${prefixCls}-close`}
                        type="delete_fill"
                        onClick={() => {
                          onDelete(index);
                        }}
                      />
                    )}
                    <div className={`${prefixCls}-img-wrap`}>
                      <img
                        ref={(img) => this.img = img}
                        alt=""
                        onError={() => this.img.src = errSrc || errorPng}
                        onLoad={(e) => {
                          let width = e.target.clientWidth;
                          let height = e.target.clientHeight;
                          if (width > height) {
                            e.target.style.height = '100%';
                          } else {
                            e.target.style.width = '100%';
                          }
                        }}
                        onClick={() => {
                          this.setState({
                            viewerVisible: true,
                            viewerPosition: index,
                          });
                        }}
                        src={typeof item.src === 'string' ? item.src : window.URL.createObjectURL(item.src)}
                      />
                    </div>
                  </div>
                </li>
              )) : readOnly && <li className="noData">{ImagePicker.noData}</li>}
              {files.length < count && !readOnly ? (
                <li
                  className={`${prefixCls}-upload`}
                >
                  <div className={`${prefixCls}-upload-outer`}>
                    <Icon className={`${prefixCls}-upload-icon`} type="add" size="large" />
                  </div>
                  {/* <div>
                  {uploadText || ImagePicker.uploadText}
                </div> */}
                  <Upload
                    {...restProps}
                    refCb={(input) => this.upload = input}
                    readOnly={readOnly}
                    onSelect={(files) => onSelect(files)}
                  />
                </li>
              ) : null}
            </ul>
            {placeholder && <div className={`${prefixCls}-placeholder`}>{placeholder}</div>}
            <ImageViewer
              visible={this.state.viewerVisible}
              position={this.state.viewerPosition}
              onClose={() => {
                this.setState({
                  viewerVisible: false,
                });
              }}
            >
              {
                files.map((item, idx) => (
                  <img
                    key={idx}
                    alt=""
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                    src={item.src}
                    onClick={(_) => {
                      this.setState({
                        viewerVisible: false,
                      });
                    }}
                  />
                ))
              }
            </ImageViewer>
          </div>
        )}
      </Consumer>
    );
  }
}

export default IMagePicker;

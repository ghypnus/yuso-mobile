/**
 * 文件上传
 * @author john.gao
 */

import React from 'react';
import EXIF from 'exif-js';
import classnames from 'classnames';

class Upload extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-upload',
    fileTypes: '*.*', // 允许上传的文件类型，格式'*.jpg,*.doc'
    isPress: true, // 是否压缩
    multiple: false, // 是否允许选择多个文件
    pressSize: 200, // 超过200kB需要进行压缩
    pressMaxWidth: window.screen.width, // 压缩的最大宽度
    pressMaxHeight: window.screen.height, // 压缩的最大高度
    pressQuality: 1, // 压缩质量
    fileSizeLimit: 10240, // 允许上传的文件大小，单位KB
    onSelect: () => { // 文件选中
    },
    onError: () => { // limitError :文件超出大小 fileTypeError : 文件类型错误
    },
  }

  constructor(props) {
    super(props);

    this.imgDataList = []; // 压缩后的图片数据源
  }

  render() {
    const { prefixCls, className, multiple, fileTypes, refCb, isPress, readOnly, ...otherProps } = this.props;
    const { pressSize, pressMaxWidth, pressMaxHeight, pressQuality, fileSizeLimit, ...restProps } = otherProps;
    return (
      <input
        {...restProps}
        type="file"
        multiple={multiple}
        disabled={readOnly}
        className={classnames(prefixCls, className)}
        onChange={(e) => {
          this.handleChange(e);
        }}
        accept={this.getFileTypes()}
        ref={refCb ? (input) => refCb(input) : null}
      />
    );
  }

  // 将输入的文件类型字符串转化为数组,原格式为*.jpg,*.png
  getFileTypes() {
    const fileTypes = this.props.fileTypes;
    const result = [];
    const array = fileTypes.split(',');
    return array.map((item) => item.split('.').pop().toLowerCase());
  }

  handleChange(e) {
    const { onSelect, isPress } = this.props;
    const files = this.getFiles(e);
    if (files !== null && onSelect) {
      isPress ? this.compress(files, onSelect) : onSelect(files);
    }
    e.target.value = '';
  }

  getFiles(e) {
    const onError = this.props.onError;
    const files = this.filter(e.target.files);
    if (Array.isArray(files)) {
      return files;
    }
    onError && onError(files);
    return null;
  }

  filter(files) {
    const { fileTypes, fileSizeLimit } = this.props;
    const types = this.getFileTypes(fileTypes);
    if (types.length === 0) return [];
    const arr = [];
    for (let i = 0; i < files.length; i++) {
      const item = files[i];
      if (parseInt(this.formatFileSize(item.size, true)) <= fileSizeLimit) {
        const ext = item.name.split('.').pop().toLowerCase();
        if (types.indexOf('*') !== -1 || types.indexOf(ext) !== -1) {
          arr.push(item);
        } else {
          return {
            type: 'typeError',
            fileName: item.name,
          };
        }
      } else {
        return {
          type: 'limitError',
          fileName: item.name,
        };
      }
    }
    return arr;
  }

  /**
   * 将文件的单位由bytes转换为KB或MB，若第二个参数指定为true，则永远转换为KB
   * @param size
   * @param withKB
   * @return {*}
   */
  formatFileSize(size, withKB) {
    if (size > 1024 * 1024 && !withKB) {
      size = `${(Math.round(size * 100 / (1024 * 1024)) / 100).toString()}MB`;
    } else {
      size = `${(Math.round(size * 100 / 1024) / 100).toString()}KB`;
    }
    return size;
  }

  /**
   * 图片压缩
   * @param fileList file列表
   * @param {function} callback 回调函数
   */
  compress(fileList, callback) {
    if (!fileList || !fileList.length || !this.canvasSupport()) return null;
    const newFileList = Object.assign([], fileList);
    this.imgDataList = [];
    this.readerFiles(newFileList, callback);
  }

  /**
   * 读取图片
   * @param fileList
   */
  readerFiles(fileList, callback) {
    const { pressSize } = this.props;
    const file = fileList.pop();
    if (!file) {
      callback && callback(this.imgDataList);
      return;
    }
    EXIF.getData(file, () => {
      let orientation = EXIF.getTag(this, 'Orientation');
      orientation = orientation || 1;
      const newPressSize = 1024 * pressSize;
      let reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target.result;
        if (!result) return;
        if (file.size <= newPressSize) {
          this.imgDataList.push(result);
          this.readerFiles(fileList, callback);
        } else {
          const img = new Image();
          img.src = result;
          img.onload = (e) => {
            let degree = 0;
            let width;
            let height;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const ratio = this.getPressRatio(this);
            const imgWidth = e.target.naturalWidth;
            const imgHeight = e.target.naturalHeight;
            let drawWidth = imgWidth * ratio;
            let drawHeight = imgHeight * ratio;
            canvas.width = width = drawWidth;
            canvas.height = height = drawHeight;
            switch (orientation) {
              case 3: // 横屏
                degree = 180;
                drawWidth = -imgWidth * ratio;
                drawHeight = -imgHeight * ratio;
                break;
              case 6: // 竖屏 home键在下
                degree = 90;
                canvas.width = height;
                canvas.height = width;
                drawWidth = width;
                drawHeight = -height;
                break;
              case 8: // 竖屏 home键在上
                canvas.width = height;
                canvas.height = width;
                degree = 270;
                drawWidth = -width;
                drawHeight = height;
                break;
              default:
                break;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.rotate(degree * Math.PI / 180);
            ctx.drawImage(e.target, 0, 0, drawWidth, drawHeight);
            const newImgData = canvas.toDataURL(file.type, 0.8);
            this.imgDataList.push(newImgData);
            reader = null;
            this.readerFiles(fileList, callback);
          };
        }
      };
      reader.readAsDataURL(file);
    });
  }

  // 是否支持canvas
  canvasSupport() {
    return !!document.createElement('canvas').getContext;
  }

  getPressRatio(img) {
    const { pressMaxWidth, pressMaxHeight } = this.props;
    let ratio = 1;
    const maxWidth = pressMaxWidth;
    const maxHeight = pressMaxHeight;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    if (imgWidth > maxWidth * 2 || imgHeight > maxHeight * 2) {
      if (imgWidth > maxWidth * 2) {
        ratio = imgWidth / maxWidth > 4 ? 1 / parseInt(imgWidth / (maxWidth * 2)) : 0.5;
      } else if (imgHeight > maxHeight * 2) {
        ratio = imgHeight / maxHeight > 4 ? 1 / parseInt(imgHeight / (maxHeight * 2)) : 0.5;
      }
    }
    return ratio;
  }
}

export default Upload;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _exifJs = _interopRequireDefault(require("exif-js"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Upload = /*#__PURE__*/function (_React$Component) {
  _inherits(Upload, _React$Component);

  var _super = _createSuper(Upload);

  function Upload(props) {
    var _this;

    _classCallCheck(this, Upload);

    _this = _super.call(this, props);
    _this.imgDataList = []; // 压缩后的图片数据源

    return _this;
  }

  _createClass(Upload, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          multiple = _this$props.multiple,
          fileTypes = _this$props.fileTypes,
          refCb = _this$props.refCb,
          isPress = _this$props.isPress,
          readOnly = _this$props.readOnly,
          otherProps = _objectWithoutProperties(_this$props, ["prefixCls", "className", "multiple", "fileTypes", "refCb", "isPress", "readOnly"]);

      var pressSize = otherProps.pressSize,
          pressMaxWidth = otherProps.pressMaxWidth,
          pressMaxHeight = otherProps.pressMaxHeight,
          pressQuality = otherProps.pressQuality,
          fileSizeLimit = otherProps.fileSizeLimit,
          restProps = _objectWithoutProperties(otherProps, ["pressSize", "pressMaxWidth", "pressMaxHeight", "pressQuality", "fileSizeLimit"]);

      return /*#__PURE__*/_react["default"].createElement("input", _extends({}, restProps, {
        type: "file",
        multiple: multiple,
        disabled: readOnly,
        className: (0, _classnames["default"])(prefixCls, className),
        onChange: function onChange(e) {
          _this2.handleChange(e);
        },
        accept: this.getFileTypes(),
        ref: refCb ? function (input) {
          return refCb(input);
        } : null
      }));
    } // 将输入的文件类型字符串转化为数组,原格式为*.jpg,*.png

  }, {
    key: "getFileTypes",
    value: function getFileTypes() {
      var fileTypes = this.props.fileTypes;
      var result = [];
      var array = fileTypes.split(',');
      return array.map(function (item) {
        return item.split('.').pop().toLowerCase();
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _this$props2 = this.props,
          onSelect = _this$props2.onSelect,
          isPress = _this$props2.isPress;
      var files = this.getFiles(e);

      if (files !== null && onSelect) {
        isPress ? this.compress(files, onSelect) : onSelect(files);
      }

      e.target.value = '';
    }
  }, {
    key: "getFiles",
    value: function getFiles(e) {
      var onError = this.props.onError;
      var files = this.filter(e.target.files);

      if (Array.isArray(files)) {
        return files;
      }

      onError && onError(files);
      return null;
    }
  }, {
    key: "filter",
    value: function filter(files) {
      var _this$props3 = this.props,
          fileTypes = _this$props3.fileTypes,
          fileSizeLimit = _this$props3.fileSizeLimit;
      var types = this.getFileTypes(fileTypes);
      if (types.length === 0) return [];
      var arr = [];

      for (var i = 0; i < files.length; i++) {
        var item = files[i];

        if (parseInt(this.formatFileSize(item.size, true)) <= fileSizeLimit) {
          var ext = item.name.split('.').pop().toLowerCase();

          if (types.indexOf('*') !== -1 || types.indexOf(ext) !== -1) {
            arr.push(item);
          } else {
            return {
              type: 'typeError',
              fileName: item.name
            };
          }
        } else {
          return {
            type: 'limitError',
            fileName: item.name
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

  }, {
    key: "formatFileSize",
    value: function formatFileSize(size, withKB) {
      if (size > 1024 * 1024 && !withKB) {
        size = "".concat((Math.round(size * 100 / (1024 * 1024)) / 100).toString(), "MB");
      } else {
        size = "".concat((Math.round(size * 100 / 1024) / 100).toString(), "KB");
      }

      return size;
    }
    /**
     * 图片压缩
     * @param fileList file列表
     * @param {function} callback 回调函数
     */

  }, {
    key: "compress",
    value: function compress(fileList, callback) {
      if (!fileList || !fileList.length || !this.canvasSupport()) return null;

      var newFileList = _extends([], fileList);

      this.imgDataList = [];
      this.readerFiles(newFileList, callback);
    }
    /**
     * 读取图片
     * @param fileList
     */

  }, {
    key: "readerFiles",
    value: function readerFiles(fileList, callback) {
      var _this3 = this;

      var pressSize = this.props.pressSize;
      var file = fileList.pop();

      if (!file) {
        callback && callback(this.imgDataList);
        return;
      }

      _exifJs["default"].getData(file, function () {
        var orientation = _exifJs["default"].getTag(_this3, 'Orientation');

        orientation = orientation || 1;
        var newPressSize = 1024 * pressSize;
        var reader = new FileReader();

        reader.onload = function (e) {
          var result = e.target.result;
          if (!result) return;

          if (file.size <= newPressSize) {
            _this3.imgDataList.push(result);

            _this3.readerFiles(fileList, callback);
          } else {
            var img = new Image();
            img.src = result;

            img.onload = function (e) {
              var degree = 0;
              var width;
              var height;
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');

              var ratio = _this3.getPressRatio(_this3);

              var imgWidth = e.target.naturalWidth;
              var imgHeight = e.target.naturalHeight;
              var drawWidth = imgWidth * ratio;
              var drawHeight = imgHeight * ratio;
              canvas.width = width = drawWidth;
              canvas.height = height = drawHeight;

              switch (orientation) {
                case 3:
                  // 横屏
                  degree = 180;
                  drawWidth = -imgWidth * ratio;
                  drawHeight = -imgHeight * ratio;
                  break;

                case 6:
                  // 竖屏 home键在下
                  degree = 90;
                  canvas.width = height;
                  canvas.height = width;
                  drawWidth = width;
                  drawHeight = -height;
                  break;

                case 8:
                  // 竖屏 home键在上
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
              var newImgData = canvas.toDataURL(file.type, 0.8);

              _this3.imgDataList.push(newImgData);

              reader = null;

              _this3.readerFiles(fileList, callback);
            };
          }
        };

        reader.readAsDataURL(file);
      });
    } // 是否支持canvas

  }, {
    key: "canvasSupport",
    value: function canvasSupport() {
      return !!document.createElement('canvas').getContext;
    }
  }, {
    key: "getPressRatio",
    value: function getPressRatio(img) {
      var _this$props4 = this.props,
          pressMaxWidth = _this$props4.pressMaxWidth,
          pressMaxHeight = _this$props4.pressMaxHeight;
      var ratio = 1;
      var maxWidth = pressMaxWidth;
      var maxHeight = pressMaxHeight;
      var imgWidth = img.naturalWidth;
      var imgHeight = img.naturalHeight;

      if (imgWidth > maxWidth * 2 || imgHeight > maxHeight * 2) {
        if (imgWidth > maxWidth * 2) {
          ratio = imgWidth / maxWidth > 4 ? 1 / parseInt(imgWidth / (maxWidth * 2)) : 0.5;
        } else if (imgHeight > maxHeight * 2) {
          ratio = imgHeight / maxHeight > 4 ? 1 / parseInt(imgHeight / (maxHeight * 2)) : 0.5;
        }
      }

      return ratio;
    }
  }]);

  return Upload;
}(_react["default"].Component);

_defineProperty(Upload, "defaultProps", {
  prefixCls: 'wme-upload',
  fileTypes: '*.*',
  // 允许上传的文件类型，格式'*.jpg,*.doc'
  isPress: true,
  // 是否压缩
  multiple: false,
  // 是否允许选择多个文件
  pressSize: 200,
  // 超过200kB需要进行压缩
  pressMaxWidth: window.screen.width,
  // 压缩的最大宽度
  pressMaxHeight: window.screen.height,
  // 压缩的最大高度
  pressQuality: 1,
  // 压缩质量
  fileSizeLimit: 10240,
  // 允许上传的文件大小，单位KB
  onSelect: function onSelect() {// 文件选中
  },
  onError: function onError() {// limitError :文件超出大小 fileTypeError : 文件类型错误
  }
});

var _default = Upload;
exports["default"] = _default;
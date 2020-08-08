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

/**
 * 图片九宫格
 * @author john
 */
import React from 'react';
import Upload from '../upload/index';
import Icon from '../icon/index';

/* babel-plugin-inline-import './image/pic_error.png' */
var errorPng = "data:image/png;base64,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";
import { Consumer } from '../locale-provider/HrContext';
import ImageViewer from '../image-viewer/index';

var IMagePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(IMagePicker, _React$Component);

  var _super = _createSuper(IMagePicker);

  function IMagePicker(props) {
    var _this;

    _classCallCheck(this, IMagePicker);

    _this = _super.call(this, props);
    _this.state = {
      viewerVisible: false,
      viewerPosition: 0
    };
    return _this;
  }

  _createClass(IMagePicker, [{
    key: "destroy",
    value: function destroy() {// TODO 销毁
    }
  }, {
    key: "getValue",
    value: function getValue(value) {
      var result = [];

      if (value !== undefined && value !== '' && value !== null) {
        if (typeof value === 'string') {
          var array = value.split(',');
          result = array.map(function (item) {
            return {
              src: item
            };
          });
        } else {
          result = value.map(function (item) {
            return !item.src ? {
              src: item
            } : item;
          });
        }
      }

      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          title = _this$props.title,
          uploadText = _this$props.uploadText,
          _onSelect = _this$props.onSelect,
          ismust = _this$props.ismust,
          onDelete = _this$props.onDelete,
          onClick = _this$props.onClick,
          style = _this$props.style,
          errSrc = _this$props.errSrc,
          _this$props$count = _this$props.count,
          count = _this$props$count === void 0 ? 1 : _this$props$count,
          value = _this$props.value,
          readOnly = _this$props.readOnly,
          placeholder = _this$props.placeholder,
          restProps = _objectWithoutProperties(_this$props, ["prefixCls", "title", "uploadText", "onSelect", "ismust", "onDelete", "onClick", "style", "errSrc", "count", "value", "readOnly", "placeholder"]);

      var files = this.getValue(value);
      return /*#__PURE__*/React.createElement(Consumer, null, function (_ref) {
        var ImagePicker = _ref.ImagePicker;
        return /*#__PURE__*/React.createElement("div", {
          className: prefixCls,
          style: style
        }, title && /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, /*#__PURE__*/React.createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/React.createElement("ul", null, files.length !== 0 ? files.map(function (item, index) {
          return /*#__PURE__*/React.createElement("li", {
            key: "li-".concat(index)
          }, /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-outer")
          }, onDelete && !readOnly && /*#__PURE__*/React.createElement(Icon, {
            className: "".concat(prefixCls, "-close"),
            type: "delete_fill",
            onClick: function onClick() {
              onDelete(index);
            }
          }), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-img-wrap")
          }, /*#__PURE__*/React.createElement("img", {
            ref: function ref(img) {
              return _this2.img = img;
            },
            onError: function onError() {
              return _this2.img.src = errSrc || errorPng;
            },
            onLoad: function onLoad(e) {
              var width = e.target.clientWidth;
              var height = e.target.clientHeight;

              if (width > height) {
                e.target.style.height = '100%';
              } else {
                e.target.style.width = '100%';
              }
            },
            onClick: function onClick() {
              _this2.setState({
                viewerVisible: true,
                viewerPosition: index
              });
            },
            src: typeof item.src === 'string' ? item.src : window.URL.createObjectURL(item.src)
          }))));
        }) : readOnly && /*#__PURE__*/React.createElement("li", {
          className: "noData"
        }, ImagePicker.noData), files.length < count && !readOnly ? /*#__PURE__*/React.createElement("li", {
          className: "".concat(prefixCls, "-upload")
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-upload-outer")
        }, /*#__PURE__*/React.createElement(Icon, {
          className: "".concat(prefixCls, "-upload-icon"),
          type: "add",
          size: "large"
        })), /*#__PURE__*/React.createElement(Upload, _extends({}, restProps, {
          refCb: function refCb(input) {
            return _this2.upload = input;
          },
          readOnly: readOnly,
          onSelect: function onSelect(files) {
            return _onSelect(files);
          }
        }))) : null), placeholder && /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-placeholder")
        }, placeholder), /*#__PURE__*/React.createElement(ImageViewer, {
          visible: _this2.state.viewerVisible,
          position: _this2.state.viewerPosition,
          onClose: function onClose() {
            _this2.setState({
              viewerVisible: false
            });
          }
        }, files.map(function (item, idx) {
          return /*#__PURE__*/React.createElement("img", {
            key: idx,
            style: {
              maxHeight: '100%',
              maxWidth: '100%'
            },
            src: item.src,
            onClick: function onClick(_) {
              _this2.setState({
                viewerVisible: false
              });
            }
          });
        })));
      });
    }
  }]);

  return IMagePicker;
}(React.Component);

_defineProperty(IMagePicker, "defaultProps", {
  prefixCls: 'yuso-image-picker',
  count: 9,
  onSelect: function onSelect() {}
});

export default IMagePicker;
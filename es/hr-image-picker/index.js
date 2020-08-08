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
 * HrImagePicker
 * @author Groot.xie
 * @date 2020.3.13
 */
import React, { Component } from 'react';
import clone from 'lodash/clone';
import isArray from 'lodash/isArray';
import ImagePicker from '../image-picker/index';
import Toast from '../toast';
import { isEmpty } from '../_utils/data_util';

var HrImagePicker = /*#__PURE__*/function (_Component) {
  _inherits(HrImagePicker, _Component);

  var _super = _createSuper(HrImagePicker);

  function HrImagePicker(props) {
    var _this;

    _classCallCheck(this, HrImagePicker);

    _this = _super.call(this, props);
    _this.actionUrl = "/file.nolog?method=upload&temp=".concat(props.temp);
    _this.donwnLoadUrl = "".concat(process.env.REACT_APP_API_BASE_URL, "/file.nolog?method=download&fileId=");
    return _this;
  }

  _createClass(HrImagePicker, [{
    key: "handleSelect",
    value: function handleSelect(files) {
      var _this2 = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value;
      var PromiseArr = [];
      files.forEach(function (file) {
        var formData = new FormData();
        formData.append('files[]', file);
        PromiseArr.push(_this2.$axios.post(_this2.actionUrl, formData));
      });
      Promise.all(PromiseArr).then(function (res) {
        onChange && onChange((value || []).concat(res.map(function (file) {
          return +file.fileId;
        })));
      });
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(index) {
      var _this$props2 = this.props,
          value = _this$props2.value,
          onChange = _this$props2.onChange;
      var newValue = clone(isArray(value) ? value : [value]);
      newValue.splice(index, 1);
      onChange && onChange(newValue);
    }
  }, {
    key: "handleError",
    value: function handleError(_ref) {
      var type = _ref.type,
          fileName = _ref.fileName;

      if (type === 'typeError') {
        Toast.show("".concat(fileName, "\u7C7B\u578B\u9519\u8BEF"));
      } else if (type === 'limitError') {
        Toast.show("".concat(fileName, "\u8D85\u51FA\u5927\u5C0F"));
      }
    }
  }, {
    key: "getValue",
    value: function getValue(value) {
      var _this3 = this;

      var result = [];

      if (!isEmpty(value)) {
        if (typeof value === 'string' || typeof value === 'number') {
          var array = value.toString().split(',');
          result = array.map(function (item) {
            return {
              src: "".concat(_this3.donwnLoadUrl).concat(item)
            };
          });
        } else {
          result = value.map(function (item) {
            return !item.src ? {
              src: "".concat(_this3.donwnLoadUrl).concat(item)
            } : item;
          });
        }
      }

      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      // temp 是否为临时文件
      var _this$props3 = this.props,
          onDelete = _this$props3.onDelete,
          _onClick = _this$props3.onClick,
          temp = _this$props3.temp,
          value = _this$props3.value,
          readOnly = _this$props3.readOnly,
          placeholder = _this$props3.placeholder,
          restProps = _objectWithoutProperties(_this$props3, ["onDelete", "onClick", "temp", "value", "readOnly", "placeholder"]);

      var filesList = this.getValue(value);
      return /*#__PURE__*/React.createElement(ImagePicker, _extends({}, restProps, {
        value: filesList,
        isPress: false,
        readOnly: readOnly,
        placeholder: placeholder,
        onSelect: function onSelect(files) {
          return _this4.handleSelect(files);
        },
        onDelete: function onDelete(index) {
          return _this4.handleDelete(index);
        },
        onClick: function onClick(item, index) {
          return _onClick && _onClick(item, index);
        },
        onError: function onError(err) {
          return _this4.handleError(err);
        }
      }));
    }
  }]);

  return HrImagePicker;
}(Component);

_defineProperty(HrImagePicker, "defaultProps", {
  temp: false,
  fileTypes: '*.jpg,*.jpeg,*.gif,*.png,*.bmp'
});

export default HrImagePicker;
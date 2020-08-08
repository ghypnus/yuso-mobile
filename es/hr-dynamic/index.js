function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import React, { Component } from 'react';
import moment from 'moment';
import Input from '../input/index';
import TextArea from '../textarea/index';
import Checkbox from '../checkbox/index';
import DatePicker from '../date-picker/index';
import HrComboBox from '../hr-combo-box/index';
import HrConstantCode from '../hr-constant-code/index';
import HrSetId from '../hr-set-id/index';
import HrImagePicker from '../hr-image-picker/index';

var HrDynamic = /*#__PURE__*/function (_Component) {
  _inherits(HrDynamic, _Component);

  var _super = _createSuper(HrDynamic);

  function HrDynamic() {
    _classCallCheck(this, HrDynamic);

    return _super.apply(this, arguments);
  }

  _createClass(HrDynamic, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          name = _this$props.name,
          title = _this$props.title,
          ismust = _this$props.ismust,
          code = _this$props.code,
          width = _this$props.width,
          size = _this$props.size,
          rows = _this$props.rows,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          close = _this$props.close,
          multiple = _this$props.multiple,
          placeholder = _this$props.placeholder,
          tableName = _this$props.tableName,
          queryData = _this$props.queryData,
          defaultValue = _this$props.defaultValue,
          _onChange = _this$props.onChange;
      var newPlaceholder = readOnly ? '' : placeholder;
      return /*#__PURE__*/React.createElement("div", {
        className: "hr-dynamic"
      }, name === 'TEXT' && /*#__PURE__*/React.createElement(Input, {
        title: title,
        value: value,
        size: size,
        ismust: ismust,
        close: close,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        align: "right",
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'CHECKBOX' && /*#__PURE__*/React.createElement(Checkbox, {
        value: value,
        title: title,
        disabled: disabled,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'TEXTAREA' && /*#__PURE__*/React.createElement(TextArea, {
        title: title,
        value: value,
        ismust: ismust,
        size: size,
        align: "right",
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'NUMBER' && /*#__PURE__*/React.createElement(Input, {
        title: title,
        type: "decimal",
        ismust: ismust,
        value: value,
        size: size,
        align: "right",
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'YEARMONTH' && /*#__PURE__*/React.createElement(DatePicker, {
        value: value,
        title: title,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        type: "yyyy/MM",
        placeholder: newPlaceholder,
        onOk: function onOk(val) {
          _onChange && _onChange(val ? val.join('-') : val);
        }
      }), name === 'DATE' && /*#__PURE__*/React.createElement(DatePicker, {
        value: value,
        title: title,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        type: "yyyy/MM/dd",
        placeholder: newPlaceholder,
        onOk: function onOk(val) {
          _onChange && _onChange(val ? val.join('-') : '');
        }
      }), name === 'TIMEPICKERHRS' && /*#__PURE__*/React.createElement(DatePicker, {
        value: value,
        title: title,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        type: "HH:mm:ss",
        placeholder: newPlaceholder,
        onOk: function onOk(val) {
          _onChange && _onChange(val ? "".concat(moment().format('YYYY-MM-DD'), " ").concat(val.join(':')) : val);
        }
      }), name === 'TIMEPICKERHR' && /*#__PURE__*/React.createElement(DatePicker, {
        value: value,
        title: title,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        type: "HH:mm",
        placeholder: newPlaceholder,
        onOk: function onOk(val) {
          _onChange && _onChange(val ? "".concat(moment().format('YYYY-MM-DD'), " ").concat(val.join(':')) : val);
        }
      }), name === 'COMBOBOX' && /*#__PURE__*/React.createElement(HrComboBox, {
        value: value,
        allowClear: true,
        code: code,
        title: title,
        ismust: ismust,
        placeholder: newPlaceholder,
        readOnly: readOnly,
        multiple: multiple,
        disabled: disabled,
        queryData: queryData,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'CONSTANT' && /*#__PURE__*/React.createElement(HrConstantCode, {
        code: code,
        value: value,
        title: title,
        ismust: ismust,
        readOnly: readOnly,
        queryData: queryData,
        defaultValue: defaultValue,
        placeholder: newPlaceholder,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'SETID' && /*#__PURE__*/React.createElement(HrSetId, {
        value: value,
        tableName: tableName,
        placeholder: newPlaceholder,
        disabled: disabled,
        readOnly: readOnly,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'SELECTOR' && /*#__PURE__*/React.createElement(HrSearchHelper, {
        title: title,
        value: value,
        code: code,
        ismust: ismust,
        close: close,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        queryData: queryData,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), (name === 'SINGLEFILE' || name === 'IMG') && /*#__PURE__*/React.createElement(HrImagePicker, {
        title: title,
        value: value,
        count: 1,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        onChange: function onChange(val) {
          _onChange && _onChange(val && val.length ? val[0] : '');
        }
      }), (name === 'MUTIFILE' || name === 'MUTIIMG') && /*#__PURE__*/React.createElement(HrImagePicker, {
        title: title,
        value: value,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: newPlaceholder,
        onChange: function onChange(val) {
          _onChange && _onChange(val ? val.map(function (item) {
            return "".concat(item);
          }) : []);
        }
      }));
    }
  }]);

  return HrDynamic;
}(Component);

export { HrDynamic as default };
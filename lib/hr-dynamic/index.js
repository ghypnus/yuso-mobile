"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _index = _interopRequireDefault(require("../input/index"));

var _index2 = _interopRequireDefault(require("../textarea/index"));

var _index3 = _interopRequireDefault(require("../checkbox/index"));

var _index4 = _interopRequireDefault(require("../date-picker/index"));

var _index5 = _interopRequireDefault(require("../hr-combo-box/index"));

var _index6 = _interopRequireDefault(require("../hr-constant-code/index"));

var _index7 = _interopRequireDefault(require("../hr-set-id/index"));

var _index8 = _interopRequireDefault(require("../hr-image-picker/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "hr-dynamic"
      }, name === 'TEXT' && /*#__PURE__*/_react["default"].createElement(_index["default"], {
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
      }), name === 'CHECKBOX' && /*#__PURE__*/_react["default"].createElement(_index3["default"], {
        value: value,
        title: title,
        disabled: disabled,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'TEXTAREA' && /*#__PURE__*/_react["default"].createElement(_index2["default"], {
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
      }), name === 'NUMBER' && /*#__PURE__*/_react["default"].createElement(_index["default"], {
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
      }), name === 'YEARMONTH' && /*#__PURE__*/_react["default"].createElement(_index4["default"], {
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
      }), name === 'DATE' && /*#__PURE__*/_react["default"].createElement(_index4["default"], {
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
      }), name === 'TIMEPICKERHRS' && /*#__PURE__*/_react["default"].createElement(_index4["default"], {
        value: value,
        title: title,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        type: "HH:mm:ss",
        placeholder: newPlaceholder,
        onOk: function onOk(val) {
          _onChange && _onChange(val ? "".concat((0, _moment["default"])().format('YYYY-MM-DD'), " ").concat(val.join(':')) : val);
        }
      }), name === 'TIMEPICKERHR' && /*#__PURE__*/_react["default"].createElement(_index4["default"], {
        value: value,
        title: title,
        ismust: ismust,
        disabled: disabled,
        readOnly: readOnly,
        type: "HH:mm",
        placeholder: newPlaceholder,
        onOk: function onOk(val) {
          _onChange && _onChange(val ? "".concat((0, _moment["default"])().format('YYYY-MM-DD'), " ").concat(val.join(':')) : val);
        }
      }), name === 'COMBOBOX' && /*#__PURE__*/_react["default"].createElement(_index5["default"], {
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
      }), name === 'CONSTANT' && /*#__PURE__*/_react["default"].createElement(_index6["default"], {
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
      }), name === 'SETID' && /*#__PURE__*/_react["default"].createElement(_index7["default"], {
        value: value,
        tableName: tableName,
        placeholder: newPlaceholder,
        disabled: disabled,
        readOnly: readOnly,
        onChange: function onChange(val) {
          _onChange && _onChange(val);
        }
      }), name === 'SELECTOR' && /*#__PURE__*/_react["default"].createElement(HrSearchHelper, {
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
      }), (name === 'SINGLEFILE' || name === 'IMG') && /*#__PURE__*/_react["default"].createElement(_index8["default"], {
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
      }), (name === 'MUTIFILE' || name === 'MUTIIMG') && /*#__PURE__*/_react["default"].createElement(_index8["default"], {
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
}(_react.Component);

exports["default"] = HrDynamic;
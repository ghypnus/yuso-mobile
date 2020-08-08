"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _isObject = _interopRequireDefault(require("lodash/isObject"));

var _index = _interopRequireDefault(require("../select-picker/index"));

var _data_util = require("../_utils/data_util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HrConstantCode = /*#__PURE__*/function (_React$Component) {
  _inherits(HrConstantCode, _React$Component);

  var _super = _createSuper(HrConstantCode);

  function HrConstantCode(props) {
    var _this;

    _classCallCheck(this, HrConstantCode);

    _this = _super.call(this, props);
    _this.state = {
      visible: false,
      dataList: [],
      oriDataList: [],
      isTree: false
    };
    return _this;
  }

  _createClass(HrConstantCode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          code = _this$props.code,
          onDataChange = _this$props.onDataChange;
      this.$axios.get("/platform/code/getCodeSelectorDataDTO?typeCode=".concat(code)).then(function (res) {
        var dataList = _this2.dealDataList(res);

        _this2.setState({
          dataList: dataList,
          oriDataList: res.codeList,
          isTree: res.dataStructure === 'TREE'
        });

        if (onDataChange) {
          onDataChange(dataList);
        }
      });
    }
    /**
     * 值改变事件
     * @param {Any} val 值
     * @param {Array/Object} values 选中的值
     */

  }, {
    key: "onChange",
    value: function onChange(val, values) {
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          showSelectedType = _this$props2.showSelectedType;
      var val_key = 'value';

      if ((0, _isArray["default"])(values)) {
        val = values.map(function (item) {
          return {
            code: item[val_key],
            name: item.label
          };
        });

        if (showSelectedType === _index["default"].SHOW_CHILD) {
          val = val.slice(val.length - 1);
        }
      } else if ((0, _isObject["default"])(values)) {
        val = {
          code: values[val_key],
          name: values.label
        };
      }

      onChange && onChange(val);
    }
  }, {
    key: "getValue",
    value: function getValue(value) {
      var _this$state = this.state,
          isTree = _this$state.isTree,
          oriDataList = _this$state.oriDataList;

      if ((0, _isArray["default"])(value)) {
        value = value.map(function (item) {
          return item.code;
        });

        if (isTree) {
          if (value.length === 1) {
            value = (0, _data_util.recurrenceValue)(oriDataList, value[0]);
          }
        }
      } else if ((0, _isObject["default"])(value)) {
        if (isTree) {
          if (value.code) {
            value = (0, _data_util.recurrenceValue)(oriDataList, value.code);
          }
        } else {
          value = value.code;
        }
      }

      return value;
    }
    /**
     * 数据处理
     * @param {Object} res 服务器返回的数据
     */

  }, {
    key: "dealDataList",
    value: function dealDataList(res) {
      if (res.dataStructure === 'TREE') {
        return (0, _data_util.recurrence)(res.codeList);
      } else {
        return [res.codeList.map(function (item) {
          return {
            value: item.code,
            label: item.name
          };
        })];
      }
    }
    /**
     * 获取值集
     */

  }, {
    key: "getDataList",
    value: function getDataList() {
      return this.state.dataList;
    }
    /**
     * 设置值集
     * @param {Array} list 列表
     */

  }, {
    key: "setDataList",
    value: function setDataList(list) {
      this.setState({
        dataList: [list]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          dataList = _this$state2.dataList,
          isTree = _this$state2.isTree;
      var _this$props3 = this.props,
          title = _this$props3.title,
          ismust = _this$props3.ismust,
          showSelectedType = _this$props3.showSelectedType,
          readOnly = _this$props3.readOnly,
          placeholder = _this$props3.placeholder,
          value = _this$props3.value,
          defaultValue = _this$props3.defaultValue; // TODO 如果多选需要怎样？

      return /*#__PURE__*/_react["default"].createElement(_index["default"], {
        value: this.getValue(value),
        defaultValue: this.getValue(defaultValue),
        title: title,
        ismust: ismust,
        readOnly: readOnly,
        cascade: isTree,
        data: dataList,
        placeholder: placeholder,
        showSelectedType: showSelectedType,
        onOk: function onOk(val, values) {
          return _this3.onChange(val, values);
        }
      });
    }
  }]);

  return HrConstantCode;
}(_react["default"].Component);

exports["default"] = HrConstantCode;

_defineProperty(HrConstantCode, "defaultProps", {
  prefixCls: 'hr-constant-code',
  showSelectedType: _index["default"].SHOW_CHILD
});
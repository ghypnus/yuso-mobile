function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
 * @author dav i d.dai                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
 */
import React from 'react';
import isEqual from 'lodash/isEqual';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import qs from 'qs';
import SelectPicker from '../select-picker/index';

var HrComboBox = /*#__PURE__*/function (_React$Component) {
  _inherits(HrComboBox, _React$Component);

  var _super = _createSuper(HrComboBox);

  // 构造函数
  function HrComboBox(props) {
    var _this;

    _classCallCheck(this, HrComboBox);

    _this = _super.call(this, props);
    _this.state = {
      option: {},
      value: '',
      code: props.code,
      dataset: []
    };
    return _this;
  } // 页面渲染完成


  _createClass(HrComboBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getParam();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.code !== this.props.code) {
        this.getParam();
      } else if (!isEqual(prevProps.queryData, this.props.queryData)) {
        this.getDataSet();
      }
    }
    /**
     * 获取参数
     */

  }, {
    key: "getParam",
    value: function getParam() {
      var _this2 = this;

      var code = this.state.code;
      this.$axios.get("/platform/selector/info/getSelectorInfoByCode?code=".concat(code)).then(function (res) {
        // edit by john.gao 特殊处理缴费单位接口不去掉.search
        if (res.serviceUrl && res.serviceUrl.indexOf('getPayUnitForSelector') === -1) {
          res.serviceUrl = res.serviceUrl.replace('.search', '');
        }

        _this2.setState({
          option: res
        }, function () {
          _this2.getDataSet();
        });
      });
    } // 处理默认值

  }, {
    key: "getValue",
    value: function getValue(value) {
      var option = this.state.option;

      if (option) {
        if (isArray(value)) {
          value = value.map(function (item) {
            return isObject(item) ? item[option.valueField] || '' : item;
          });
        } else if (isObject(value)) {
          value = "".concat(value[option.valueField]) || '';
        } else {
          value = value || (value === 0 ? "".concat(this.value) : '');
        }
      }

      return value;
    } // 获取值集

  }, {
    key: "getDataSet",
    value: function getDataSet() {
      var _this3 = this;

      var option = this.state.option;
      var _this$props = this.props,
          queryData = _this$props.queryData,
          datasetChange = _this$props.datasetChange;

      if (option.serviceUrl) {
        var param = qs.parse(option.param) || {};
        this.$axios.post(option.serviceUrl, _objectSpread({}, queryData, {}, param)).then(function (res) {
          res = res || [];
          _this3.fullData = res;
          datasetChange && datasetChange(res);

          _this3.setState({
            dataset: [res.map(function (item) {
              return {
                value: item[option.valueField],
                label: item[option.displayField]
              };
            })]
          });
        });
      } else {
        this.setState({
          dataset: []
        });
        datasetChange && datasetChange([]);
      }
    }
    /**
     * 设置值集
     * @param {Array} list 列表
     */

  }, {
    key: "setDataSet",
    value: function setDataSet(list) {
      this.setState({
        dataset: [list]
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(val, values) {
      var onChange = this.props.onChange;

      if (isArray(values)) {
        val = values.map(function (o) {
          return o.value;
        });
      } else if (isObject(values)) {
        val = values.value;
      }

      onChange && onChange(val, this.fullData);
    } // 页面渲染

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var dataset = this.state.dataset;
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          value = _this$props2.value,
          title = _this$props2.title,
          ismust = _this$props2.ismust,
          readOnly = _this$props2.readOnly,
          placeholder = _this$props2.placeholder;
      return /*#__PURE__*/React.createElement(SelectPicker, {
        value: this.getValue(value),
        className: prefixCls,
        title: title,
        ismust: ismust,
        data: dataset,
        readOnly: readOnly,
        placeholder: placeholder,
        onOk: function onOk(val, values) {
          return _this4.handleChange(val, values);
        }
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};

      if (nextProps.code !== prevState.code) {
        newState.code = nextProps.code;
      }

      return newState;
    }
  }]);

  return HrComboBox;
}(React.Component);

_defineProperty(HrComboBox, "defaultProps", {
  prefixCls: 'hr-combo-box'
});

export { HrComboBox as default };
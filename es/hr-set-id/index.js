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

/**
 * @author david.dai
 */
import React from 'react';
import SelectPicker from '../select-picker/index';

var HrSetId = /*#__PURE__*/function (_React$Component) {
  _inherits(HrSetId, _React$Component);

  var _super = _createSuper(HrSetId);

  // 构造函数
  function HrSetId(props) {
    var _this;

    _classCallCheck(this, HrSetId);

    _this = _super.call(this, props);
    _this.state = {
      dataset: []
    };
    return _this;
  } // 页面渲染完成


  _createClass(HrSetId, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var tableName = this.props.tableName;
      this.getDataSet(tableName);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('tableName' in nextProps) {
        if (this.props.tableName !== nextProps.tableName) {
          this.getDataSet(nextProps.tableName);
        }
      }
    } // 过滤值集

  }, {
    key: "filterDataSet",
    value: function filterDataSet(fun) {
      var dataset = this.state.dataset;

      if (dataset.length && dataset[0] && dataset[0].length) {
        var _ds = dataset[0].filter(fun);

        if (_ds.length > 0) {
          dataset = [_ds];
        } else {
          dataset = [];
        }
      } else {
        dataset = [];
      }

      this.setState({
        dataset: dataset
      });
    } // 获取值集

  }, {
    key: "getDataSet",
    value: function getDataSet(tableName) {
      var _this2 = this;

      var option = this.state.option;
      this.setState({
        dataset: []
      });

      if (tableName) {
        this.$axios.get("/platform/setid/info/getSetIdDTOByTableName?tableName=".concat(tableName)).then(function (res) {
          res = res || [];

          _this2.setState({
            dataset: [res.map(function (_ref) {
              var id = _ref.id,
                  name = _ref.name;
              return {
                value: id,
                label: name ? name.currentLocaleValue : name
              };
            }) || []]
          });
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(val) {
      var onOk = this.props.onOk;
      onOk && onOk(val);
    } // 页面渲染

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var dataset = this.state.dataset;
      var _this$props = this.props,
          title = _this$props.title,
          ismust = _this$props.ismust,
          disabled = _this$props.disabled,
          value = _this$props.value,
          placeholder = _this$props.placeholder;
      return /*#__PURE__*/React.createElement(SelectPicker, {
        value: value,
        title: title,
        disabled: disabled,
        ismust: ismust,
        data: dataset,
        placeholder: placeholder,
        readOnly: readOnly,
        onOk: function onOk(val) {
          return _this3.onChange(val);
        }
      });
    }
  }]);

  return HrSetId;
}(React.Component);

export { HrSetId as default };
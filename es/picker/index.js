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
 * WmePicker
 * @author john.gao
 */
import React from 'react';
import MultiPicker from './MultiPicker';
import Picker from './Picker';
import { Consumer } from '../locale-provider/HrContext'; // 递归筛选树

function arrayRecurrenceFilter(data, filterFn, options) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  var children = data || [];
  var result = [];
  var level = 0;
  var foundItem;

  do {
    var foundItem = children.filter(function (item) {
      return filterFn(item, level);
    })[0];

    if (!foundItem) {
      break;
    }

    result.push(foundItem);
    children = foundItem[options.childrenKeyName] || [];
    level += 1;
  } while (children.length > 0);

  return result;
}

var WmePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(WmePicker, _React$Component);

  var _super = _createSuper(WmePicker);

  function WmePicker(props) {
    var _this;

    _classCallCheck(this, WmePicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setCasecadeScrollValue", function (v) {
      if (v && _this.scrollValue) {
        var length = _this.scrollValue.length;

        if (length === v.length && _this.scrollValue[length - 1] === v[length - 1]) {
          return;
        }
      }

      _this.setScrollValue(v);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (v, i) {
      _this.setScrollValue(v);

      if (_this.props.onChange) {
        _this.props.onChange(v, i);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCasecadeValueChange", function (value, index) {
      var _this$props = _this.props,
          cascade = _this$props.cascade,
          cols = _this$props.cols;
      var children = arrayRecurrenceFilter(_this.props.data, function (c, level) {
        return level <= index && c.value === value[level];
      });
      var data = children[index];
      var i;

      for (i = index + 1; data && data.children && data.children.length && i < cols; i++) {
        data = data.children[0];
        value[i] = data.value;
      }

      value.length = i;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      _this.onChange(value, index);
    });

    _this.state = {
      value: _this.getValue(props.data, props.defaultValue || props.value)
    };
    _this.scrollValue = null;
    return _this;
  }

  _createClass(WmePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {} // 组件接收新的props时触发，render时不触发

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: this.getValue(nextProps.data, nextProps.value)
        });
      }
    }
  }, {
    key: "getValue",
    value: function getValue(d, val) {
      var data = d || this.props.data;
      var value = val || this.props.value || this.props.defaultValue;

      if (!value || !value.length) {
        value = [];

        if (this.props.cascade) {
          for (var i = 0; i < this.props.cols; i++) {
            if (data && data.length) {
              value[i] = data[0].value;
              data = data[0].children;
            }
          }
        } else {
          for (var _i = 0; _i < data.length; _i++) {
            value[_i] = data[_i][0] && data[_i][0].value;
          }
        }
      }

      return value;
    }
  }, {
    key: "setScrollValue",
    value: function setScrollValue(v) {
      this.scrollValue = v;
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(value, index) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }

      this.onChange(value, index);
    } // 获取普通列

  }, {
    key: "getPickerCol",
    value: function getPickerCol() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          disabled = _this$props2.disabled;
      return data.map(function (col, index) {
        return /*#__PURE__*/React.createElement(Picker, {
          key: index,
          disabled: disabled,
          style: {
            flex: 1
          }
        }, col.map(function (item) {
          return /*#__PURE__*/React.createElement(Picker.Item, {
            key: item.value,
            value: item.value
          }, item.label);
        }));
      });
    } // 获取级联列

  }, {
    key: "getCascadeCols",
    value: function getCascadeCols() {
      var _this$props3 = this.props,
          data = _this$props3.data,
          cols = _this$props3.cols,
          disabled = _this$props3.disabled;
      var value = this.state.value;
      var childrenTree = arrayRecurrenceFilter(data, function (c, level) {
        return c.value === value[level];
      }).map(function (c) {
        return c.children;
      });
      var needPad = cols - childrenTree.length;

      if (needPad > 0) {
        for (var i = 0; i < needPad; i++) {
          childrenTree.push([]);
        }
      }

      childrenTree.length = cols - 1;
      childrenTree.unshift(data);
      return childrenTree.map(function () {
        var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var level = arguments.length > 1 ? arguments[1] : undefined;
        return /*#__PURE__*/React.createElement(Picker, {
          key: level,
          style: {
            flex: 1
          },
          disabled: disabled
        }, children.map(function (item) {
          return /*#__PURE__*/React.createElement(Picker.Item, {
            value: item.value,
            key: item.value
          }, item.label);
        }));
      });
    }
  }, {
    key: "onOk",
    value: function onOk(e) {
      var v;

      if (this.scrollValue !== null) {
        v = this.scrollValue;
      } else {
        v = this.state.value;
      }

      if (this.props.onOk) {
        this.props.onOk(v);
      }

      e.preventDefault();
    }
  }, {
    key: "onCancel",
    value: function onCancel(e) {
      if (this.props.onCancel) {
        this.props.onCancel();
      }

      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          title = _this$props4.title,
          okText = _this$props4.okText,
          cancelText = _this$props4.cancelText,
          cascade = _this$props4.cascade,
          restProps = _objectWithoutProperties(_this$props4, ["prefixCls", "title", "okText", "cancelText", "cascade"]);

      var value = this.state.value;
      return /*#__PURE__*/React.createElement(Consumer, null, function (_ref) {
        var Picker = _ref.Picker;
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-action")
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-action-cancel"),
          onClick: function onClick(e) {
            return _this2.onCancel(e);
          }
        }, cancelText || Picker.cancel), /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-action-title")
        }, title), /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-action-ok"),
          onClick: function onClick(e) {
            return _this2.onOk(e);
          }
        }, okText || Picker.ok)), /*#__PURE__*/React.createElement(MultiPicker, _extends({}, restProps, {
          cascade: cascade,
          selectedValue: value,
          onValueChange: function onValueChange(v, i) {
            cascade ? _this2.onCasecadeValueChange(v, i) : _this2.onValueChange(v, i);
          },
          onScrollChange: function onScrollChange(v) {
            cascade ? _this2.setCasecadeScrollValue(v) : _this2.setScrollValue(v);
          }
        }), cascade ? _this2.getCascadeCols() : _this2.getPickerCol()));
      });
    }
  }]);

  return WmePicker;
}(React.Component);

_defineProperty(WmePicker, "defaultProps", {
  prefixCls: 'wme-picker',
  cols: 3,
  // 列
  cascade: false,
  // 是否级联
  title: '',
  // 标题
  disabled: false,
  // 是否禁用
  onScrollChange: function onScrollChange() {},
  onChange: function onChange(v, i) {}
});

export { WmePicker as default };
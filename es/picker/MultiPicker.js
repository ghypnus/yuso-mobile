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

import React from 'react';
import classnames from 'classnames';

var MultiPicker = /*#__PURE__*/function (_React$Component) {
  _inherits(MultiPicker, _React$Component);

  var _super = _createSuper(MultiPicker);

  function MultiPicker() {
    var _this;

    _classCallCheck(this, MultiPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onValueChange", function (i, v) {
      _this.onChange(i, v, _this.props.onValueChange);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (i, v, cb) {
      var value = _this.getValue().concat();

      value[i] = v;

      if (cb) {
        cb(value, i);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onScrollChange", function (i, v) {
      _this.onChange(i, v, _this.props.onScrollChange);
    });

    return _this;
  }

  _createClass(MultiPicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style;
      var selectedValue = this.getValue();
      var colElements = React.Children.map(children, function (col, i) {
        return /*#__PURE__*/React.cloneElement(col, {
          selectedValue: selectedValue[i],
          onValueChange: function onValueChange() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return _this2.onValueChange.apply(_this2, [i].concat(args));
          },
          onScrollChange: _this2.onScrollChange && function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return _this2.onScrollChange.apply(_this2, [i].concat(args));
          }
        });
      });
      return /*#__PURE__*/React.createElement("div", {
        style: style,
        className: classnames(className, prefixCls)
      }, colElements);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          selectedValue = _this$props2.selectedValue;

      if (selectedValue && selectedValue.length) {
        return selectedValue;
      }

      if (!children) {
        return [];
      }

      return React.Children.map(function (children, c) {
        var cc = React.Children.toArray(c.children || c.props.children);
        return cc && cc[0] && cc[0].props.value;
      });
    }
  }]);

  return MultiPicker;
}(React.Component);

_defineProperty(MultiPicker, "defaultProps", {
  prefixCls: 'yuso-multi-picker',
  onValueChange: function onValueChange() {}
});

export { MultiPicker as default };
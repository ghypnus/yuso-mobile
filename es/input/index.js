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
 * 输入框
 * @author john.gao
 */
import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/index';

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      isEyeOpen: false // 是否显示明文

    };
    return _this;
  }

  _createClass(Input, [{
    key: "getValue",
    value: function getValue(e) {
      var value = e.target.value;
      var _this$props = this.props,
          type = _this$props.type,
          digit = _this$props.digit;

      switch (type) {
        case 'text':
          break;

        case 'phone':
          value = value.replace(/\D/g, '').substring(0, 11);
          break;

        case 'number':
          value = value.replace(/\D/g, '');
          break;

        case 'decimal':
          if (digit) {
            if (value) {
              value = Math.floor(value * 100) / 100;
            }
          }

          break;

        default:
          break;
      }

      return value;
    }
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      var value = this.getValue(e); // if (this.isComposing) return;

      var onChange = this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      this.fValue = e.target.value;
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      if (e.target.value === this.fValue) return;
      var value = this.getValue(e);
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    }
  }, {
    key: "onInputClear",
    value: function onInputClear() {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange('');
      }
    }
  }, {
    key: "formatThousand",
    value: function formatThousand(value) {
      if (value) {
        return value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
      }

      return value;
    }
  }, {
    key: "handleCapture",
    value: function handleCapture() {
      this.setState({
        isEyeOpen: !this.state.isEyeOpen
      });

      if (this.props.onClick) {
        this.props.onClick(this.props.type === 'password' ? 'text' : 'password');
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          value = _this$props2.value,
          className = _this$props2.className,
          icon = _this$props2.icon,
          eye = _this$props2.eye,
          type = _this$props2.type,
          size = _this$props2.size,
          search = _this$props2.search,
          onChange = _this$props2.onChange,
          onReset = _this$props2.onReset,
          readOnly = _this$props2.readOnly,
          refCb = _this$props2.refCb,
          active = _this$props2.active,
          onClick = _this$props2.onClick,
          close = _this$props2.close,
          otherProps = _objectWithoutProperties(_this$props2, ["prefixCls", "value", "className", "icon", "eye", "type", "size", "search", "onChange", "onReset", "readOnly", "refCb", "active", "onClick", "close"]);

      var style = otherProps.style,
          title = otherProps.title,
          maxLength = otherProps.maxLength,
          unit = otherProps.unit,
          align = otherProps.align,
          ismust = otherProps.ismust,
          disabled = otherProps.disabled,
          name = otherProps.name,
          placeholder = otherProps.placeholder,
          _otherProps$autoCompl = otherProps.autoComplete,
          autoComplete = _otherProps$autoCompl === void 0 ? 'new-password' : _otherProps$autoCompl;
      var wrapCls = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-icon"), icon !== undefined), _defineProperty(_classnames, "".concat(prefixCls, "-search"), icon === 'search'), _defineProperty(_classnames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classnames, "".concat(prefixCls, "-align-left"), align === 'left'), _defineProperty(_classnames, "".concat(prefixCls, "-align-center"), align === 'center'), _defineProperty(_classnames, "".concat(prefixCls, "-align-right"), align === 'right'), _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-read-only"), readOnly), _classnames));
      var iconCls = classnames("".concat(prefixCls, "-icon-").concat(icon), _defineProperty({}, "".concat(prefixCls, "-icon-").concat(icon, "-active"), active));
      var inputType = 'text';

      if (type === 'phone') {
        inputType = 'tel';
      } else if (type === 'password') {
        inputType = 'password';
      } else if (type === 'decimal') {
        inputType = 'number';
      } else if (type !== 'text' && type !== 'number') {
        inputType = type;
      }

      var patternProps;

      if (type === 'number') {
        patternProps = {
          pattern: '[0-9]*'
        };
      }

      var needClose = close && value && !disabled;
      return /*#__PURE__*/React.createElement("div", {
        className: wrapCls,
        style: style
      }, !!icon && /*#__PURE__*/React.createElement("i", {
        className: iconCls
      }), !!title && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/React.createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/React.createElement("input", _extends({}, patternProps, {
        name: name,
        placeholder: placeholder,
        disabled: disabled,
        maxLength: maxLength,
        onChange: function onChange(e) {
          return _this2.handleInput(e);
        },
        onFocus: function onFocus(e) {
          return _this2.handleFocus(e);
        },
        onBlur: function onBlur(e) {
          return _this2.handleBlur(e);
        },
        readOnly: readOnly,
        type: inputType,
        ref: function ref(input) {
          refCb ? refCb(input) : _this2.input = input;
        },
        autoComplete: autoComplete,
        value: value || ''
      })), !!unit && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-unit")
      }, unit), needClose && /*#__PURE__*/React.createElement(Icon, {
        className: "".concat(prefixCls, "-close"),
        type: "delete_fill",
        onClick: function onClick(e) {
          onReset && onReset();

          _this2.onInputClear(e);
        }
      }), eye && /*#__PURE__*/React.createElement("div", {
        className: "eye",
        onClick: function onClick(e) {
          return _this2.handleCapture(e);
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        type: this.state.isEyeOpen ? 'eye-close' : 'eye'
      })));
    }
  }]);

  return Input;
}(React.Component);

_defineProperty(Input, "defaultProps", {
  prefixCls: 'yuso-input',
  type: 'text',
  size: 'large',
  align: 'left'
});

export { Input as default };
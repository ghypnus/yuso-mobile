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
 * Textarea
 * @author john.gao
 */
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import classnames from 'classnames'; // 正则

var regexCharacters = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g; // 计算字符长度

function countCharacters() {
  var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var text = isEmpty(v) ? '' : v;
  return text.replace(regexCharacters, '_').length;
}

var TextArea = /*#__PURE__*/function (_React$Component) {
  _inherits(TextArea, _React$Component);

  var _super = _createSuper(TextArea);

  // 防止blur后focus或者focus后blur（反跳）
  // 重新布局可见区域
  function TextArea(props) {
    var _this;

    _classCallCheck(this, TextArea);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "textareaRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "debounceTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "scrollIntoViewTimeout", void 0);

    _this.state = {
      focus: false
    };
    return _this;
  }

  _createClass(TextArea, [{
    key: "destroy",
    value: function destroy() {// TODO 收键盘
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var autoHeight = this.props.autoHeight;

      if (autoHeight) {
        this.reAlignHeight();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var autoHeight = this.props.autoHeight;
      var focus = this.state.focus;

      if (autoHeight && focus) {
        this.reAlignHeight();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }

      if (this.scrollIntoViewTimeout) {
        clearTimeout(this.scrollIntoViewTimeout);
        this.scrollIntoViewTimeout = null;
      }
    }
  }, {
    key: "reAlignHeight",
    value: function reAlignHeight() {
      var textareaDom = this.textareaRef;
      textareaDom.style.height = ''; // 字数减少时能自动减小高度

      textareaDom.style.height = "".concat(textareaDom.scrollHeight, "px");
    }
  }, {
    key: "focus",
    value: function focus() {
      this.textareaRef.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.textareaRef.blur();
    }
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      var value = e.target.value;
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(value);
      } // 设置 defaultValue 时，用户输入不会触发 componentDidUpdate ，此处手工调用


      this.componentDidUpdate();
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var _this2 = this;

      var _this$props = this.props,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange;
      this.debounceTimeout = setTimeout(function () {
        if (document.activeElement !== _this2.textareaRef) {
          _this2.setState({
            focus: false
          });
        }
      }, 100);
      this.setState({
        focus: false
      });
      var value = e.target.value;

      if (onBlur) {
        onBlur(value);
      }

      if (value === this.fValue) return;

      if (onChange) {
        onChange(value, e.target.name);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }

      this.setState({
        focus: true
      });
      var value = e.target.value;
      this.fValue = value;

      if (this.props.onFocus) {
        this.props.onFocus(value);
      }

      if (document.activeElement.tagName.toLowerCase() === 'textarea') {
        this.scrollIntoViewTimeout = setTimeout(function () {
          try {
            document.activeElement.scrollIntoViewIfNeeded();
          } catch (ex) {
            console.log(ex);
          }
        }, 100);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this3 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          _this$props2$value = _this$props2.value,
          value = _this$props2$value === void 0 ? '' : _this$props2$value,
          className = _this$props2.className,
          style = _this$props2.style,
          length = _this$props2.length,
          autoHeight = _this$props2.autoHeight,
          title = _this$props2.title,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          ismust = _this$props2.ismust,
          restProps = _objectWithoutProperties(_this$props2, ["prefixCls", "value", "className", "style", "length", "autoHeight", "title", "disabled", "readOnly", "ismust"]);

      var focus = this.state.focus;
      var wrapCls = classnames(className, prefixCls, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classnames, "".concat(prefixCls, "-focus"), focus), _defineProperty(_classnames, "".concat(prefixCls, "-read-only"), readOnly), _classnames));
      var characterLength = countCharacters(value);
      var lengthCtrlProps = {};

      if (length > 0) {
        lengthCtrlProps.maxLength = length - characterLength + (value ? value.length : 0);
      }

      return /*#__PURE__*/React.createElement("div", {
        className: wrapCls,
        style: style
      }, !!title && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, /*#__PURE__*/React.createElement("span", null, ismust ? '*' : ''), title), /*#__PURE__*/React.createElement("textarea", _extends({
        ref: function ref(el) {
          return _this3.textareaRef = el;
        }
      }, lengthCtrlProps, restProps, {
        value: value || '',
        onChange: function onChange(e) {
          return _this3.handleInput(e);
        },
        onBlur: function onBlur(e) {
          return _this3.onBlur(e);
        },
        onFocus: function onFocus(e) {
          return _this3.onFocus(e);
        },
        readOnly: readOnly,
        disabled: disabled
      })), length > 0 && this.props.rows > 1 && /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-length")
      }, /*#__PURE__*/React.createElement("span", null, value ? characterLength : 0), "/", length));
    }
  }]);

  return TextArea;
}(React.Component);

_defineProperty(TextArea, "defaultProps", {
  prefixCls: 'yuso-textarea',
  autoHeight: false,
  disabled: false,
  rows: 2,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
});

export { TextArea as default };
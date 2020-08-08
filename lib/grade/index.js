"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../icon/index"));

var _index2 = _interopRequireDefault(require("../textarea/index"));

var _index3 = _interopRequireDefault(require("../button/index"));

var _HrContext = require("../locale-provider/HrContext");

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

var Grade = /*#__PURE__*/function (_React$Component) {
  _inherits(Grade, _React$Component);

  var _super = _createSuper(Grade);

  function Grade(props) {
    var _this;

    _classCallCheck(this, Grade);

    _this = _super.call(this, props);
    _this.state = {
      visible: false,
      score: 0,
      content: ''
    };
    return _this;
  }

  _createClass(Grade, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          title = _this$props.title,
          palceholder = _this$props.palceholder,
          onOk = _this$props.onOk,
          onClose = _this$props.onClose,
          okText = _this$props.okText,
          cancelText = _this$props.cancelText;
      var wrapCls = (0, _classnames2["default"])(prefixCls, className);
      var _this$state = this.state,
          score = _this$state.score,
          content = _this$state.content;
      return /*#__PURE__*/_react["default"].createElement(_HrContext.Consumer, null, function (_ref) {
        var Grade = _ref.Grade;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: wrapCls,
          style: style
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, title), /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-stars")
        }, [1, 2, 3, 4, 5].map(function (v) {
          return /*#__PURE__*/_react["default"].createElement(_index["default"], {
            type: "collection_fill",
            key: v,
            className: (0, _classnames2["default"])("".concat(prefixCls, "-star"), _defineProperty({}, "".concat(prefixCls, "-star-active"), score >= v)),
            onClick: function onClick() {
              _this2.setState({
                score: v
              });
            }
          });
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "".concat(prefixCls, "-content")
        }, score, Grade.tips), /*#__PURE__*/_react["default"].createElement(_index2["default"], {
          value: content,
          rows: 5,
          placeholder: palceholder,
          onChange: function onChange(v) {
            _this2.setState({
              content: v
            });
          }
        }), /*#__PURE__*/_react["default"].createElement(_index3["default"], {
          type: "primary",
          onClick: function onClick() {
            _this2.setState({
              score: 0,
              content: ''
            });

            onOk && onOk({
              score: _this2.state.score,
              content: _this2.state.content
            });
          }
        }, okText || Grade.ok), /*#__PURE__*/_react["default"].createElement(_index3["default"], {
          onClick: function onClick() {
            _this2.setState({
              score: 0,
              content: ''
            });

            onClose && onClose();
          }
        }, cancelText || Grade.cancel));
      });
    }
  }]);

  return Grade;
}(_react["default"].Component);

exports["default"] = Grade;

_defineProperty(Grade, "defaultProps", {
  prefixCls: 'yuso-grade',
  visible: false,
  title: '',
  value: function value() {}
});
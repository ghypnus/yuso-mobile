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

/**
 * 时光轴
 * @author john.gao
 */
import React from 'react';
import classnames from 'classnames';

var Axis = /*#__PURE__*/function (_React$Component) {
  _inherits(Axis, _React$Component);

  var _super = _createSuper(Axis);

  function Axis() {
    _classCallCheck(this, Axis);

    return _super.apply(this, arguments);
  }

  _createClass(Axis, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          title = _this$props.title,
          extra = _this$props.extra,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data,
          line = _this$props.line,
          _this$props$lastLine = _this$props.lastLine,
          lastLine = _this$props$lastLine === void 0 ? true : _this$props$lastLine;
      var wrap = classnames(prefixCls, className);
      return /*#__PURE__*/React.createElement("div", {
        className: wrap
      }, (title || extra) && /*#__PURE__*/React.createElement("div", {
        className: classnames("".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-header-undeline"), data.length > 0))
      }, /*#__PURE__*/React.createElement("div", null, title || ' '), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-header-extra")
      }, extra)), data.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-container")
      }, data.map(function (item, idx) {
        var pointHeight = item.node ? item.node.props.style.height.replace('px', '') : 14;
        var lineHeight = "calc(100% - ".concat(pointHeight, "px)");
        var titleWrap = classnames("".concat(prefixCls, "-item-center-title"), _defineProperty({}, "".concat(prefixCls, "-item-center-title-right"), item.align === 'right'));
        return /*#__PURE__*/React.createElement("div", {
          key: "".concat(prefixCls, "-").concat(idx),
          className: "".concat(prefixCls, "-item")
        }, line && /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-item-node")
        }, item.node ? item.node : /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-item-node-point")
        }, /*#__PURE__*/React.createElement("i", null)), idx === data.length - 1 ? lastLine ? /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-item-node-line"),
          style: {
            top: "".concat(pointHeight, "px"),
            height: lineHeight
          }
        }) : null : /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-item-node-line"),
          style: {
            top: "".concat(pointHeight, "px"),
            height: lineHeight
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-item-center"),
          style: {
            marginTop: "".concat((pointHeight - 21) / 2, "px")
          }
        }, item.date && /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-item-center-date")
        }, item.date), item.title && /*#__PURE__*/React.createElement("div", {
          className: titleWrap
        }, item.title, /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-item-center-title-extra")
        }, item.extra)), /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-item-center-content")
        }, item.content)));
      })));
    }
  }]);

  return Axis;
}(React.Component);

_defineProperty(Axis, "defaultProps", {
  prefixCls: 'yuso-axis'
});

export { Axis as default };
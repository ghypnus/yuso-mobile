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
 * 头像
 * @author john.gao
 */
import React from 'react';
import classnames from 'classnames';

var Avatar = /*#__PURE__*/function (_React$Component) {
  _inherits(Avatar, _React$Component);

  var _super = _createSuper(Avatar);

  function Avatar(props) {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _super.call(this, props);
    _this.state = {
      src: props.src
    };
    return _this;
  }

  _createClass(Avatar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('src' in nextProps) {
        this.setState({
          src: nextProps.src
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          errSrc = _this$props.errSrc,
          title = _this$props.title,
          className = _this$props.className,
          size = _this$props.size;
      var wrap = classnames(prefixCls, className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_classnames, "".concat(prefixCls, "-large"), size === 'large'), _classnames));

      var newStyle = _objectSpread({}, style);

      if (typeof size === 'number') {
        newStyle.width = size;
        newStyle.height = size;
        newStyle.fontSize = '1rem';
      }

      var avaTitle = title;

      if (avaTitle) {
        var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;

        if (patrn.exec(avaTitle)) {
          avaTitle = avaTitle.slice(-2);
        } else {
          avaTitle = avaTitle.slice(0, 2);
        }
      }

      var cls = classnames("".concat(prefixCls, "-content"), this.state.src ? "".concat(prefixCls, "-image") : "".concat(prefixCls, "-title"));
      return /*#__PURE__*/React.createElement("div", {
        className: wrap,
        style: newStyle
      }, /*#__PURE__*/React.createElement("div", {
        className: cls
      }, this.state.src ? '' : avaTitle, this.state.src && /*#__PURE__*/React.createElement("img", {
        src: this.state.src,
        onLoad: function onLoad(e) {
          var width = e.target.clientWidth;
          var height = e.target.clientHeight;

          if (width > height) {
            e.target.style.height = '100%';
          } else {
            e.target.style.width = '100%';
          }
        },
        onError: function onError(e) {
          var url = title ? '' : errSrc;

          _this2.setState({
            src: url
          });
        }
      })));
    }
  }]);

  return Avatar;
}(React.Component);

_defineProperty(Avatar, "defaultProps", {
  prefixCls: 'yuso-avatar'
});

export default Avatar;
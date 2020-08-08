function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * List
 * @author john.gao
 */
import React from 'react';
import classnames from 'classnames';
import Item from './ListItem';

var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);

  var _super = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super.apply(this, arguments);
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          children = _this$props.children,
          direction = _this$props.direction,
          className = _this$props.className,
          style = _this$props.style,
          type = _this$props.type;
      var _this$props2 = this.props,
          renderHeader = _this$props2.renderHeader,
          renderFooter = _this$props2.renderFooter;
      var bodyCls = classnames("".concat(prefixCls, "-body"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-body-row"), direction === 'row'), _defineProperty(_classnames, "".concat(prefixCls, "-body-column"), direction === 'column'), _defineProperty(_classnames, "".concat(prefixCls, "-body-view"), type === 'view'), _classnames));
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(prefixCls, className),
        style: style
      }, renderHeader ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, typeof renderHeader === 'function' ? renderHeader() : renderHeader) : null, children ? /*#__PURE__*/React.createElement("div", {
        className: bodyCls
      }, children) : null, renderFooter ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, typeof renderFooter === 'function' ? renderFooter() : renderFooter) : null);
    }
  }]);

  return List;
}(React.Component);

List.defaultProps = {
  prefixCls: 'yuso-list',
  direction: 'row'
};
List.Item = Item;
export default List;
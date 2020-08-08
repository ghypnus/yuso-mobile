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
 * Grid
 * @author john.gao
 */
import React from 'react';
import classnames from 'classnames';
import Item from './GridItem';

var Grid = /*#__PURE__*/function (_React$Component) {
  _inherits(Grid, _React$Component);

  var _super = _createSuper(Grid);

  function Grid() {
    _classCallCheck(this, Grid);

    return _super.apply(this, arguments);
  }

  _createClass(Grid, [{
    key: "getGridItem",
    value: function getGridItem() {
      var _this$props = this.props,
          data = _this$props.data,
          disabled = _this$props.disabled,
          cols = _this$props.cols;
      return data.map(function (item, index) {
        return /*#__PURE__*/React.createElement(Item, {
          align: item.align,
          style: {
            width: "calc(100%/".concat(cols, ")"),
            height: item.height
          },
          key: index,
          value: item.value,
          onClick: item.onClick,
          disabled: disabled
        }, item.label);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          children = _this$props2.children,
          className = _this$props2.className,
          style = _this$props2.style;
      return /*#__PURE__*/React.createElement("div", {
        style: style,
        className: classnames(prefixCls, className)
      }, children || this.getGridItem());
    }
  }]);

  return Grid;
}(React.Component);

_defineProperty(Grid, "defaultProps", {
  prefixCls: 'yuso-grid',
  cols: 4
});

Grid.Item = Item;
export default Grid;
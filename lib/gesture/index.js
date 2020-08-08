"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../toast/index"));

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

var Gesture = /*#__PURE__*/function (_React$Component) {
  _inherits(Gesture, _React$Component);

  var _super = _createSuper(Gesture);

  function Gesture(props) {
    var _this;

    _classCallCheck(this, Gesture);

    _this = _super.call(this, props);
    _this.space = 0; // 间隙

    _this.cvs = null; // canvas

    _this.ctx = null; // ctx

    _this.pointList = []; // 点数组

    _this.selectedList = []; // 选中的点数组

    _this.initImg = null; // 初始化图

    _this.result = ''; // 结果

    _this.touched = false; // 是否触摸

    return _this;
  }

  _createClass(Gesture, [{
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      e.stopPropagation();
      this.touched = true;
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e, tips) {
      var _this2 = this;

      var callback = this.props.callback;
      this.touched = false;

      for (var p in this.selectedList) {
        if (this.pointInList(this.selectedList[p], this.pointList)) {
          this.result += this.pointInList(this.selectedList[p], this.pointList).toString();
        }
      }

      if (this.result.length < 4) {
        _index["default"].show(tips);

        setTimeout(function (_) {
          _this2.clear();
        }, 500);
        return;
      }

      callback && callback(this.result, this);
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      var container = this.refs.container;

      if (this.touched) {
        var x = e.pageX || e.targetTouches[0].pageX;
        var y = e.pageY || e.targetTouches[0].pageY;
        x -= container.offsetLeft;
        y -= container.offsetTop;
        var p = this.isIn(x, y);

        if (p !== 0) {
          if (!this.pointInList(p, this.selectedList)) {
            this.selectedList.push(p);
          }
        }

        this.draw(x, y);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
      var color = this.props.color;
      this.cvs = this.refs.cvs;
      this.ctx = this.cvs.getContext('2d');
      this.ctx.width = width * 2;
      this.ctx.height = height * 2;
      this.ctx.scale(2, 2);
      this.ctx.translate(0.5, 0.5);
      this.initDraw();
    }
  }, {
    key: "initDraw",
    value: function initDraw() {
      var _this$props2 = this.props,
          color = _this$props2.color,
          width = _this$props2.width,
          height = _this$props2.height,
          lineWidth = _this$props2.lineWidth,
          space = _this$props2.space,
          roundRadii = _this$props2.roundRadii,
          pointRadii = _this$props2.pointRadii;

      var Point = function Point(x, y) {
        this.x = x;
        this.y = y;
      };

      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color;
      this.ctx.lineWidth = lineWidth; // 绘制外圆

      for (var j = 0; j < 3; j++) {
        for (var i = 0; i < 3; i++) {
          var iPath = this.space / 2 + roundRadii + i * (this.space + 2 * roundRadii);
          var jPath = this.space / 2 + roundRadii + j * (this.space + 2 * roundRadii); // 外圆

          this.ctx.beginPath();
          this.ctx.moveTo(iPath + roundRadii, jPath);
          this.ctx.arc(iPath, jPath, roundRadii, 0, 2 * Math.PI);
          this.ctx.closePath();
          this.ctx.stroke(); // 内圆

          this.ctx.beginPath();
          this.ctx.moveTo(iPath + pointRadii, jPath);
          this.ctx.arc(iPath, jPath, pointRadii, 0, 2 * Math.PI);
          this.ctx.closePath();
          this.ctx.fill(); // 存储圆点

          var circle = new Point(iPath, jPath);
          if (this.pointList.length < 9) this.pointList.push(circle);
        }
      }

      this.initImg = this.ctx.getImageData(0, 0, width * 2, height * 2);
    }
  }, {
    key: "isIn",
    value: function isIn(x, y) {
      var roundRadii = this.props.roundRadii;

      for (var p in this.pointList) {
        if (Math.pow(x - this.pointList[p].x, 2) + Math.pow(y - this.pointList[p].y, 2) < Math.pow(roundRadii, 2)) {
          return this.pointList[p];
        }
      }

      return 0;
    }
    /**
       * 绘制 - 圆
       * @param color 颜色
       */

  }, {
    key: "circleDraw",
    value: function circleDraw(color) {
      var roundRadii = this.props.roundRadii;

      if (color) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
      }

      for (var p in this.selectedList) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.selectedList[p].x + roundRadii, this.selectedList[p].y);
        this.ctx.arc(this.selectedList[p].x, this.selectedList[p].y, roundRadii, 0, 2 * Math.PI);
        this.ctx.stroke();
      }
    }
    /**
       * 绘制 - 点
       * @param color 颜色
       */

  }, {
    key: "pointDraw",
    value: function pointDraw(color) {
      var _this$props3 = this.props,
          lineWidth = _this$props3.lineWidth,
          pointRadii = _this$props3.pointRadii;

      if (color) {
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
      }

      for (var p in this.selectedList) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.selectedList[p].x + pointRadii, this.selectedList[p].y);
        this.ctx.arc(this.selectedList[p].x, this.selectedList[p].y, pointRadii, 0, 2 * Math.PI);
        this.ctx.fill();
      }
    }
    /**
     * 绘制 - 线
     * @param color 颜色
     */

  }, {
    key: "lineDraw",
    value: function lineDraw(color) {
      var pointRadii = this.props.pointRadii;

      if (color) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = pointRadii * 1.5;
      }

      this.ctx.beginPath();

      if (this.selectedList.length > 0) {
        for (var p in this.selectedList) {
          if (p == 0) {
            this.ctx.moveTo(this.selectedList[p].x, this.selectedList[p].y);
            continue;
          }

          this.ctx.lineTo(this.selectedList[p].x, this.selectedList[p].y);
        }
      }
    }
    /**
       * 全部重绘
       * @param color 内外圆的颜色
       * @param routeColor 路径的颜色
       */

  }, {
    key: "allDraw",
    value: function allDraw(color, routeColor) {
      if (color || routeColor) {
        this.lineDraw(routeColor);
        this.ctx.stroke();
        this.circleDraw(color);
        this.pointDraw(color);
      } else {
        this.lineDraw();
        this.circleDraw();
        this.pointDraw();
      }
    }
    /**
       * 根据手势绘制
       * @param x
       * @param y
       */

  }, {
    key: "draw",
    value: function draw(x, y) {
      var _this$props4 = this.props,
          width = _this$props4.width,
          height = _this$props4.height,
          routeColor = _this$props4.routeColor,
          successColor = _this$props4.successColor;
      this.ctx.clearRect(0, 0, width, height);
      this.ctx.putImageData(this.initImg, 0, 0);
      this.lineDraw(routeColor);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.circleDraw(successColor);
      this.pointDraw(successColor);
    }
    /**
     * 判断点是否在列表中
     * @param poi 点
     * @param list 所有的点
     * @returns {*} 下标
     */

  }, {
    key: "pointInList",
    value: function pointInList(poi, list) {
      for (var p in list) {
        if (poi.x == list[p].x && poi.y == list[p].y) {
          return ++p;
        }
      }

      return false;
    }
    /**
     * 成功
     */

  }, {
    key: "success",
    value: function success() {
      var _this$props5 = this.props,
          width = _this$props5.width,
          height = _this$props5.height,
          successColor = _this$props5.successColor,
          routeColor = _this$props5.routeColor;
      this.ctx.clearRect(0, 0, width, height);
      this.ctx.beginPath();
      this.ctx.putImageData(this.initImg, 0, 0);
      this.allDraw(successColor, routeColor);
      this.result = '';
      this.pointList = [];
      this.selectedList = [];
    }
    /**
      *失败
      */

  }, {
    key: "fail",
    value: function fail() {
      var _this$props6 = this.props,
          width = _this$props6.width,
          height = _this$props6.height,
          failColor = _this$props6.failColor,
          routeFailColor = _this$props6.routeFailColor;
      this.ctx.clearRect(0, 0, width, height);
      this.ctx.beginPath();
      this.ctx.putImageData(this.initImg, 0, 0);
      this.allDraw(failColor, routeFailColor);
      this.result = '';
      this.pointList = [];
      this.selectedList = [];
    }
    /**
     * 清除
     */

  }, {
    key: "clear",
    value: function clear() {
      var _this3 = this;

      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _this$props7 = this.props,
          width = _this$props7.width,
          height = _this$props7.height;
      this.result = '';
      this.pointList = [];
      this.selectedList = [];
      setTimeout(function (_) {
        _this3.ctx.clearRect(0, 0, width, height);

        _this3.ctx.beginPath();

        _this3.initDraw();
      }, timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props8 = this.props,
          prefixCls = _this$props8.prefixCls,
          width = _this$props8.width,
          height = _this$props8.height,
          roundRadii = _this$props8.roundRadii,
          tips = _this$props8.tips;
      this.space = parseInt((width - roundRadii * 2 * 3) / 3); // 间隙

      return /*#__PURE__*/_react["default"].createElement(_HrContext.Consumer, null, function (_ref) {
        var Gesture = _ref.Gesture;
        return /*#__PURE__*/_react["default"].createElement("div", {
          ref: "container",
          className: prefixCls,
          style: {
            width: width,
            height: height
          },
          onTouchStart: function onTouchStart(e) {
            return _this4.handleTouchStart(e);
          },
          onTouchEnd: function onTouchEnd(e) {
            return _this4.handleTouchEnd(e, tips || Gesture.tips);
          },
          onTouchMove: function onTouchMove(e) {
            return _this4.handleTouchMove(e);
          }
        }, /*#__PURE__*/_react["default"].createElement("canvas", {
          ref: "cvs",
          style: {
            zoom: 0.5
          },
          width: width * 2,
          height: height * 2
        }));
      });
    }
  }]);

  return Gesture;
}(_react["default"].Component);

exports["default"] = Gesture;

_defineProperty(Gesture, "defaultProps", {
  prefixCls: 'yuso-gesture',
  roundRadii: 30,
  // 大圆点的半径
  pointRadii: 10,
  // 大圆点被选中时显示的圆心的半径
  width: document.body.clientWidth * 0.83,
  // 整个组件的宽度百分比
  height: document.body.clientWidth * 0.83,
  // 整个组件的高度百分比
  lineWidth: 1,
  // 线条宽度
  color: '#9f9a9a',
  // 内外圆默认颜色
  successColor: '#a8c885',
  // 内外圆成功的颜色
  failColor: '#ff7878',
  // 内外圆失败的颜色
  routeColor: '#e0e0e0',
  // 路径默认颜色
  routeFailColor: '#faaaaa' // 失败的路径颜色

});
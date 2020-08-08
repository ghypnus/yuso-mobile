/**
 * 手势
 * @author john.gao
 */


import React from 'react';
import Toast from '../toast/index';
import { Consumer } from '../locale-provider/HrContext';

export default class Gesture extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-gesture',
    roundRadii: 30, // 大圆点的半径
    pointRadii: 10, // 大圆点被选中时显示的圆心的半径
    width: document.body.clientWidth * 0.83, // 整个组件的宽度百分比
    height: document.body.clientWidth * 0.83, // 整个组件的高度百分比
    lineWidth: 1, // 线条宽度
    color: '#9f9a9a', // 内外圆默认颜色
    successColor: '#a8c885', // 内外圆成功的颜色
    failColor: '#ff7878', // 内外圆失败的颜色
    routeColor: '#e0e0e0', // 路径默认颜色
    routeFailColor: '#faaaaa', // 失败的路径颜色
  }

  constructor(props) {
    super(props);

    this.space = 0; // 间隙
    this.cvs = null; // canvas
    this.ctx = null; // ctx
    this.pointList = []; // 点数组
    this.selectedList = []; // 选中的点数组
    this.initImg = null; // 初始化图
    this.result = ''; // 结果
    this.touched = false; // 是否触摸
  }

  handleTouchStart(e) {
    e.stopPropagation();
    this.touched = true;
  }

  handleTouchEnd(e, tips) {
    const { callback } = this.props;
    this.touched = false;
    for (const p in this.selectedList) {
      if (this.pointInList(this.selectedList[p], this.pointList)) {
        this.result += (this.pointInList(this.selectedList[p], this.pointList)).toString();
      }
    }
    if (this.result.length < 4) {
      Toast.show(tips);
      setTimeout((_) => {
        this.clear();
      }, 500);
      return;
    }
    callback && callback(this.result, this);
  }

  handleTouchMove(e) {
    const container = this.refs.container;
    if (this.touched) {
      let x = e.pageX || e.targetTouches[0].pageX;
      let y = e.pageY || e.targetTouches[0].pageY;
      x -= container.offsetLeft;
      y -= container.offsetTop;
      const p = this.isIn(x, y);
      if (p !== 0) {
        if (!this.pointInList(p, this.selectedList)) {
          this.selectedList.push(p);
        }
      }
      this.draw(x, y);
    }
  }

  componentDidMount() {
    const { width, height } = this.props;
    const { color } = this.props;
    this.cvs = this.refs.cvs;
    this.ctx = this.cvs.getContext('2d');
    this.ctx.width = width * 2;
    this.ctx.height = height * 2;
    this.ctx.scale(2, 2);
    this.ctx.translate(0.5, 0.5);
    this.initDraw();
  }

  initDraw() {
    const { color, width, height, lineWidth, space, roundRadii, pointRadii } = this.props;
    const Point = function (x, y) {
      this.x = x;
      this.y = y;
    };
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
    this.ctx.lineWidth = lineWidth;
    // 绘制外圆
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        const iPath = this.space / 2 + roundRadii + i * (this.space + 2 * roundRadii);
        const jPath = this.space / 2 + roundRadii + j * (this.space + 2 * roundRadii);
        // 外圆
        this.ctx.beginPath();
        this.ctx.moveTo(iPath + roundRadii, jPath);
        this.ctx.arc(iPath, jPath, roundRadii, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.stroke();
        // 内圆
        this.ctx.beginPath();
        this.ctx.moveTo(iPath + pointRadii, jPath);
        this.ctx.arc(iPath, jPath, pointRadii, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
        // 存储圆点
        const circle = new Point(iPath, jPath);
        if (this.pointList.length < 9) this.pointList.push(circle);
      }
    }
    this.initImg = this.ctx.getImageData(0, 0, width * 2, height * 2);
  }

  isIn(x, y) {
    const roundRadii = this.props.roundRadii;
    for (const p in this.pointList) {
      if ((Math.pow((x - this.pointList[p].x), 2) + Math.pow((y - this.pointList[p].y), 2)) < Math.pow(roundRadii, 2)) {
        return this.pointList[p];
      }
    }
    return 0;
  }

  /**
     * 绘制 - 圆
     * @param color 颜色
     */
  circleDraw(color) {
    const roundRadii = this.props.roundRadii;
    if (color) {
      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = 2;
    }
    for (const p in this.selectedList) {
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
  pointDraw(color) {
    const { lineWidth, pointRadii } = this.props;
    if (color) {
      this.ctx.lineWidth = lineWidth;
      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color;
    }
    for (const p in this.selectedList) {
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
  lineDraw(color) {
    const pointRadii = this.props.pointRadii;
    if (color) {
      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = pointRadii * 1.5;
    }
    this.ctx.beginPath();
    if (this.selectedList.length > 0) {
      for (const p in this.selectedList) {
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
  allDraw(color, routeColor) {
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
  draw(x, y) {
    const { width, height, routeColor, successColor } = this.props;
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
  pointInList(poi, list) {
    for (let p in list) {
      if (poi.x == list[p].x && poi.y == list[p].y) {
        return ++p;
      }
    }
    return false;
  }

  /**
   * 成功
   */
  success() {
    const { width, height, successColor, routeColor } = this.props;
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
  fail() {
    const { width, height, failColor, routeFailColor } = this.props;
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
  clear(timeout = 0) {
    const { width, height } = this.props;
    this.result = '';
    this.pointList = [];
    this.selectedList = [];
    setTimeout((_) => {
      this.ctx.clearRect(0, 0, width, height);
      this.ctx.beginPath();
      this.initDraw();
    }, timeout);
  }

  render() {
    const { prefixCls, width, height, roundRadii, tips } = this.props;
    this.space = parseInt((width - roundRadii * 2 * 3) / 3); // 间隙
    return (
      <Consumer>
        {({ Gesture }) => (
          <div
            ref="container"
            className={prefixCls}
            style={{ width, height }}
            onTouchStart={(e) => this.handleTouchStart(e)}
            onTouchEnd={(e) => this.handleTouchEnd(e, tips || Gesture.tips)}
            onTouchMove={(e) => this.handleTouchMove(e)}
          >
            <canvas
              ref="cvs"
              style={{ zoom: 0.5 }}
              width={width * 2}
              height={height * 2}
            />
          </div>
        )}
      </Consumer>
    );
  }
}

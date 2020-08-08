"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTransform = setTransform;
exports.setPxStyle = exports.getPxStyle = exports.getTransformPropValue = void 0;

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

var getTransformPropValue = function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
};

exports.getTransformPropValue = getTransformPropValue;

var getPxStyle = function getPxStyle(value) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  var vertical = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  value = vertical ? "0px, ".concat(value).concat(unit, ", 0px") : "".concat(value).concat(unit, ", 0px, 0px");
  return "translate3d(".concat(value, ")");
};

exports.getPxStyle = getPxStyle;

var setPxStyle = function setPxStyle(el, value) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'px';
  var vertical = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var useLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (useLeft) {
    if (vertical) {
      el.style.top = "".concat(value).concat(unit);
    } else {
      el.style.left = "".concat(value).concat(unit);
    }
  } else {
    setTransform(el.style, getPxStyle(value, unit, vertical));
  }
};

exports.setPxStyle = setPxStyle;
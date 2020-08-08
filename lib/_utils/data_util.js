"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recurrenceValue = exports.recurrence = exports.isEmpty = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isEmpty = function isEmpty(v) {
  if (v && _typeof(v) === 'object') {
    return Object.keys(v).length === 0;
  } else {
    return v === undefined || v === null || v === '';
  }
};
/**
* 递归
* @param {Array} data 数组
* @param {Object} opts 参数
* @param {String} childrenKey 子集的key名
* @param {String} idKey 唯一编号ID
* @param {String} parentKey 父级ID
* @param {String} valueKey 显示ID
* @param {String} labelKey 显示Label
*/


exports.isEmpty = isEmpty;

var recurrence = function recurrence() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var idKey = opts.idKey || 'code';
  var nameKey = opts.nameKey || 'name';
  var parentKey = opts.parentKey || 'parentCode';
  var childrenKey = opts.childrenKey || 'children';
  var valueKey = opts.valueKey || 'value';
  var labelKey = opts.labelKey || 'label';
  var dataList = data.map(function (item) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, valueKey, item[idKey]), _defineProperty(_ref, labelKey, item[nameKey]), _defineProperty(_ref, parentKey, item[parentKey]), _ref;
  });

  var __recurrenceList = function __recurrenceList(list) {
    return list.map(function (item) {
      var childList = dataList.filter(function (child) {
        return child[parentKey] === item[valueKey];
      });

      var array = __recurrenceList(childList);

      return array.length > 0 ? _extends({}, item, _defineProperty({
        path: []
      }, childrenKey, array)) : item;
    });
  };

  var result = dataList.filter(function (item) {
    return item[parentKey] == '-1';
  }).map(function (item) {
    return _extends({}, item, {
      path: [item[valueKey]]
    });
  });
  return __recurrenceList(result);
};
/**
 * 根据最后层级的值，递归获取所有层级的值
 * @param {Array} data 数组
 * @param {Any} value 值
 * @param {Object} opts 参数
 * @param {String} idKey 唯一编号ID
 * @param {String} parentKey 父级ID
 */


exports.recurrence = recurrence;

var recurrenceValue = function recurrenceValue() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var idKey = opts.idKey || 'code';
  var parentKey = opts.parentKey || 'parentCode';
  var result = [];

  var __recurrenceList = function __recurrenceList(list, val) {
    var item = list.find(function (obj) {
      return obj[idKey] === val;
    });
    result.unshift(item[idKey]);

    if (item[parentKey] !== '-1') {
      __recurrenceList(data, item[parentKey]);
    }

    return result;
  };

  return __recurrenceList(data, value);
};

exports.recurrenceValue = recurrenceValue;
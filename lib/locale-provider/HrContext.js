"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Consumer = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _React$createContext = /*#__PURE__*/_react["default"].createContext(),
    Consumer = _React$createContext.Consumer,
    Provider = _React$createContext.Provider;

exports.Provider = Provider;
exports.Consumer = Consumer;
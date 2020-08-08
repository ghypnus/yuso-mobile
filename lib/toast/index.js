"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Toast = _interopRequireDefault(require("./Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Toast
 * @author john.gao
 */
var toastInstance;
var prefixCls = 'yuso-toast';

function newInstance(content, duration, _onClose) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Toast["default"], {
    prefixCls: prefixCls,
    content: content,
    duration: duration,
    onClose: function onClose() {
      if (_onClose) {
        _onClose();
      }

      toastInstance.destroy();
      toastInstance = null;
    }
  }), div);

  return {
    destroy: function destroy() {
      _reactDom["default"].unmountComponentAtNode(div);

      document.body.removeChild(div);
    }
  };
}

var _default = {
  show: function show(content, duration, onClose) {
    this.destroy();
    toastInstance = newInstance(content, duration, onClose);
  },
  destroy: function destroy() {
    if (toastInstance) {
      toastInstance.destroy();
      toastInstance = null;
    }
  }
};
exports["default"] = _default;
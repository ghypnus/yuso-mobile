"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Loading = _interopRequireDefault(require("./Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Loading
 * @author john.gao
 */
var loadingInstance;
var prefixCls = 'wme-loading';

function newInstance() {
  var div = document.createElement('div');
  document.body.appendChild(div);

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Loading["default"], {
    prefixCls: prefixCls
  }), div);

  return {
    destroy: function destroy() {
      _reactDom["default"].unmountComponentAtNode(div);

      document.body.removeChild(div);
    }
  };
}

var _default = {
  show: function show() {
    this.hide();
    loadingInstance = newInstance();
  },
  hide: function hide() {
    if (loadingInstance) {
      loadingInstance.destroy();
      loadingInstance = null;
    }
  }
};
exports["default"] = _default;
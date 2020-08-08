/**
 * Toast
 * @author john.gao
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Toast from './Toast';
var toastInstance;
var prefixCls = 'yuso-toast';

function newInstance(content, duration, _onClose) {
  var div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render( /*#__PURE__*/React.createElement(Toast, {
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
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
}

export default {
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
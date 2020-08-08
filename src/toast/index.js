/**
 * Toast
 * @author john.gao
 */


import React from 'react';
import ReactDOM from 'react-dom';
import Toast from './Toast';

let toastInstance;
const prefixCls = 'wme-toast';


function newInstance(content, duration, onClose) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(
    <Toast
      prefixCls={prefixCls}
      content={content}
      duration={duration}
      onClose={() => {
        if (onClose) {
          onClose();
        }
        toastInstance.destroy();
        toastInstance = null;
      }}
    />,
    div,
  );
  return {
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
}

export default {
  show(content, duration, onClose) {
    this.destroy();
    toastInstance = newInstance(content, duration, onClose);
  },
  destroy() {
    if (toastInstance) {
      toastInstance.destroy();
      toastInstance = null;
    }
  },
};

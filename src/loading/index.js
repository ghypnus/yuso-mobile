/**
 * Loading
 * @author john.gao
 */


import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';

let loadingInstance;

const prefixCls = 'wme-loading';


function newInstance() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(
    <Loading
      prefixCls={prefixCls}
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
  show() {
    this.hide();
    loadingInstance = newInstance();
  },
  hide() {
    if (loadingInstance) {
      loadingInstance.destroy();
      loadingInstance = null;
    }
  },
};

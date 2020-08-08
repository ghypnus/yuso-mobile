/**
 * Loading
 * @author john.gao
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';
var loadingInstance;
var prefixCls = 'wme-loading';

function newInstance() {
  var div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render( /*#__PURE__*/React.createElement(Loading, {
    prefixCls: prefixCls
  }), div);
  return {
    destroy: function destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
}

export default {
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
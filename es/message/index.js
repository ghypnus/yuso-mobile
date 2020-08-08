function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Message
 * @author john.gao
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
var messageInstance;
var prefixCls = 'wme-message';
/**
 * opts: 参数
 * @param {String}  title       标题
 * @param {String}  content     内容
 * @param {Array}   action      按钮数组[{label:'是', onClick:()=>{}]
 * @param {Number}  duration    弹窗停留时长 单位(秒)
 * @param {String}  direction   方向 row、column
 * @param {bool}    isMaskClose 点击遮罩是否可以关闭弹窗
 */

function newInstance(opts) {
  var icon = opts.icon,
      title = opts.title,
      content = opts.content,
      action = opts.action,
      restProps = _objectWithoutProperties(opts, ["icon", "title", "content", "action"]);

  var div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render( /*#__PURE__*/React.createElement(Message, _extends({
    prefixCls: prefixCls,
    icon: icon,
    title: title,
    content: content,
    action: action
  }, restProps, {
    onClose: function onClose() {
      messageInstance && messageInstance.destroy();
      messageInstance = null;
    }
  })), div);
  return {
    destroy: function destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
}

export default {
  alert: function alert(opts) {
    this.destroy();
    messageInstance = newInstance(opts);
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
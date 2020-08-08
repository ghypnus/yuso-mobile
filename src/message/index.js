/**
 * Message
 * @author john.gao
 */


import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

let messageInstance;
const prefixCls = 'wme-message';


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
  const { icon, title, content, action, ...restProps } = opts;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(
    <Message
      prefixCls={prefixCls}
      icon={icon}
      title={title}
      content={content}
      action={action}
      {...restProps}
      onClose={() => {
        messageInstance && messageInstance.destroy();
        messageInstance = null;
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
  alert(opts) {
    this.destroy();
    messageInstance = newInstance(opts);
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};

/**
 * 评分组件
 * @author john.gao
 * @date 2020-03-31
 */


import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/index';
import TextArea from '../textarea/index';
import Button from '../button/index';
import { Consumer } from '../locale-provider/HrContext';

export default class Grade extends React.Component {
  static defaultProps = {
    prefixCls: 'yuso-grade',
    visible: false,
    title: '',
    value: () => { },
  }

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      content: '',
    };
  }

  render() {
    const { prefixCls, className, style, title, palceholder, onOk, onClose, okText, cancelText } = this.props;
    const wrapCls = classnames(prefixCls, className);
    const { score, content } = this.state;
    return (
      <Consumer>
        {({ Grade }) => (
          <div
            className={wrapCls}
            style={style}
          >
            <div className={`${prefixCls}-title`}>{title}</div>
            <div className={`${prefixCls}-stars`}>
              {[1, 2, 3, 4, 5].map((v) => (
                <Icon
                  value="collection_fill"
                  key={v}
                  className={classnames(`${prefixCls}-star`, {
                    [`${prefixCls}-star-active`]: score >= v,
                  })}
                  onClick={() => {
                    this.setState({
                      score: v,
                    });
                  }}
                />
              ))}
            </div>
            <div className={`${prefixCls}-content`}>
              {score}
              {Grade.tips}
            </div>
            <TextArea
              value={content}
              rows={5}
              placeholder={palceholder}
              onChange={(v) => {
                this.setState({
                  content: v,
                });
              }}
            />
            <Button
              type="primary"
              onClick={() => {
                this.setState({
                  score: 0,
                  content: '',
                });
                onOk && onOk({
                  score: this.state.score,
                  content: this.state.content,
                });
              }}
            >
              {okText || Grade.ok}
            </Button>
            <Button
              onClick={() => {
                this.setState({
                  score: 0,
                  content: '',
                });
                onClose && onClose();
              }}
            >
              {cancelText || Grade.cancel}
            </Button>
          </div>
        )}
      </Consumer>
    );
  }
}

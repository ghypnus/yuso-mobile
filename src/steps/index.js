import React from 'react';
import classnames from 'classnames';
import Step from './Step';
import Icon from '../icon/index';

class Steps extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'yuso-steps',
    direction: 'horizontal',
    status: 'process',
    current: 0,
  }

  render() {
    const { prefixCls, className, current, direction, status, size, children } = this.props;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-${direction}`]: direction,
    });

    const filterChildren = [];
    if (children && children.length) {
      children.forEach((item) => {
        if (React.isValidElement(item)) {
          filterChildren.push(item);
        }
      });
    }

    const newChildren = React.Children.map(filterChildren, (item, index) => {
      let className = item.props.className;
      if (index < filterChildren.length - 1 && filterChildren[index + 1].props.status === 'error') {
        className = className ? `${className} error-tail` : 'error-tail';
      }
      let icon = item.props.icon;
      if (!icon) {
        if (index < current) {
          // icon = 'right' 正确
        }
        if ((status === 'error' && index === current) || item.props.status === 'error') {
          // icon = 'cross-circle-o'; 错误
        }
      }
      icon = typeof icon === 'string' ? <Icon value={icon} size={size} /> : icon;

      if (!item.props.status) {
        if (index === current) {
          item.props.status = status;
        } else if (index < current) {
          item.props.status = 'finish';
        } else {
          item.props.status = 'wait';
        }
      }
      item.props.stepNumber = `${index + 1}`;
      return React.cloneElement(item, {
        icon,
        className,
      });
    });
    return (
      <div className={wrapCls}>
        {newChildren}
      </div>
    );
  }
}
Steps.Step = Step;

export default Steps;

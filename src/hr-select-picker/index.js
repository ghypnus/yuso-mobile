import React from 'react';
import SelectPicker from '../select-picker/index';

export default class HrSelectPicker extends React.Component {
  static defaultProps = {
    prefixCls: 'hr-select-picker',
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    const { code } = this.props;
    this.$axios.get(`/platform/code/getCodeSelectorDataDTO?typeCode=${code}`).then((res) => {
      console.log(res);
    });
  }

  render() {
    const { value, title, onOk, placeholder, readOnly } = this.props;
    return (
      <SelectPicker
        value={value}
        title={title}
        placeholder={placeholder}
        readOnly={readOnly}
        onOk={() => onOk()}
      />
    );
  }
}

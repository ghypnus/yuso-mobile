import React from 'react';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import SelectPicker from '../select-picker/index';
import { recurrence, recurrenceValue } from '../_utils/data_util';

export default class HrConstantCode extends React.Component {
  static defaultProps = {
    prefixCls: 'hr-constant-code',
    showSelectedType: SelectPicker.SHOW_CHILD
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      dataList: [],
      oriDataList: [],
      isTree: false,
    };
  }

  componentDidMount() {
    const { code, onDataChange } = this.props;
    this.$axios.get(`/platform/code/getCodeSelectorDataDTO?typeCode=${code}`).then((res) => {
      let dataList = this.dealDataList(res)
      this.setState({
        dataList: dataList,
        oriDataList: res.codeList,
        isTree: res.dataStructure === 'TREE'
      });
      if (onDataChange) {
        onDataChange(dataList);
      }
    });
  }

  /**
   * 值改变事件
   * @param {Any} val 值
   * @param {Array/Object} values 选中的值
   */
  onChange(val, values) {
    const { onChange, showSelectedType } = this.props;
    const val_key = 'value';
    if (isArray(values)) {
      val = values.map((item) => ({ code: item[val_key], name: item.label }));
      if (showSelectedType === SelectPicker.SHOW_CHILD) {
        val = val.slice(val.length - 1);
      }
    } else if (isObject(values)) {
      val = { code: values[val_key], name: values.label };
    }
    onChange && onChange(val);
  }

  getValue(value) {
    const { isTree, oriDataList } = this.state;
    if (isArray(value)) {
      value = value.map(item => item.code);
      if(isTree){
        if(value.length === 1){
          value = recurrenceValue(oriDataList, value[0]);
        }
      }
    } else if (isObject(value)) {
      if (isTree) {
        if (value.code) {
          value = recurrenceValue(oriDataList, value.code);
        }
      } else {
        value = value.code
      }
    }
    return value;
  }

  /**
   * 数据处理
   * @param {Object} res 服务器返回的数据
   */
  dealDataList(res) {
    if (res.dataStructure === 'TREE') {
      return recurrence(res.codeList);
    } else {
      return [res.codeList.map((item) => ({ value: item.code, label: item.name }))]
    }
  }

  /**
   * 获取值集
   */
  getDataList() {
    return this.state.dataList;
  }

  /**
   * 设置值集
   * @param {Array} list 列表
   */
  setDataList(list) {
    this.setState({
      dataList: [list]
    })
  }

  render() {
    const { dataList, isTree } = this.state;
    const { title, ismust, showSelectedType, readOnly, placeholder, value, defaultValue } = this.props;
    // TODO 如果多选需要怎样？
    return (
      <SelectPicker
        value={this.getValue(value)}
        defaultValue={this.getValue(defaultValue)}
        title={title}
        ismust={ismust}
        readOnly={readOnly}
        cascade={isTree}
        data={dataList}
        placeholder={placeholder}
        showSelectedType={showSelectedType}
        onOk={(val, values) => this.onChange(val, values)}
      />
    );
  }
}
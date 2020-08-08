/**
 * @author david.dai
 */
import React from 'react';
import SelectPicker from '../select-picker/index';

export default class HrSetId extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      dataset: [],
    };
  }

  // 页面渲染完成
  componentDidMount() {
    const { tableName } = this.props;
    this.getDataSet(tableName);
  }

  componentWillReceiveProps(nextProps) {
    if ('tableName' in nextProps) {
      if (this.props.tableName !== nextProps.tableName) {
        this.getDataSet(nextProps.tableName);
      }
    }
  }

  // 过滤值集
  filterDataSet(fun) {
    let { dataset } = this.state;
    if (dataset.length && dataset[0] && dataset[0].length) {
      const _ds = dataset[0].filter(fun);
      if (_ds.length > 0) {
        dataset = [_ds];
      } else {
        dataset = [];
      }
    } else {
      dataset = [];
    }
    this.setState({
      dataset,
    });
  }

  // 获取值集
  getDataSet(tableName) {
    const { option } = this.state;
    this.setState({
      dataset: [],
    });
    if (tableName) {
      this.$axios
        .get(
          `/platform/setid/info/getSetIdDTOByTableName?tableName=${tableName}`,
        )
        .then((res) => {
          res = res || [];
          this.setState({
            dataset: [
              res.map(({ id, name }) => ({
                value: id,
                label: name ? name.currentLocaleValue : name,
              })) || [],
            ],
          });
        });
    }
  }

  onChange(val) {
    const { onOk } = this.props;
    onOk && onOk(val);
  }

  // 页面渲染
  render() {
    const { dataset } = this.state;
    const { title, ismust, disabled, value, placeholder } = this.props;
    return (
      <SelectPicker
        value={value}
        title={title}
        disabled={disabled}
        ismust={ismust}
        data={dataset}
        placeholder={placeholder}
        readOnly={readOnly}
        onOk={(val) => this.onChange(val)}
      />
    );
  }
}

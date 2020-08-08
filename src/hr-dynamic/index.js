import React, { Component } from 'react';
import moment from 'moment';
import Input from '../input/index';
import TextArea from '../textarea/index';
import Checkbox from '../checkbox/index';
import DatePicker from '../date-picker/index';
import HrComboBox from '../hr-combo-box/index';
import HrConstantCode from '../hr-constant-code/index';
import HrSetId from '../hr-set-id/index';
import HrImagePicker from '../hr-image-picker/index';

export default class HrDynamic extends Component {
  render() {
    const {
      value,
      name,
      title,
      ismust,
      code,
      width,
      size,
      rows,
      disabled,
      readOnly,
      close,
      multiple,
      placeholder,
      tableName,
      queryData,
      defaultValue,
      onChange,
    } = this.props;

    const newPlaceholder = readOnly ? '' : placeholder;
    return (
      <div className="hr-dynamic">
        {name === 'TEXT' && (
          <Input
            title={title}
            value={value}
            size={size}
            ismust={ismust}
            close={close}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={newPlaceholder}
            align="right"
            onChange={(val) => {
              onChange && onChange(val);
            }}
          />
        )}
        {
          name === 'CHECKBOX' && (
            <Checkbox
              value={value}
              title={title}
              disabled={disabled}
              onChange={(val) => {
                onChange && onChange(val);
              }}
            />
          )
        }
        {
          name === 'TEXTAREA' && (
            <TextArea
              title={title}
              value={value}
              ismust={ismust}
              size={size}
              align="right"
              disabled={disabled}
              readOnly={readOnly}
              placeholder={newPlaceholder}
              onChange={(val) => {
                onChange && onChange(val);
              }}
            />
          )
        }
        {name === 'NUMBER' && (
          <Input
            title={title}
            type="decimal"
            ismust={ismust}
            value={value}
            size={size}
            align="right"
            disabled={disabled}
            readOnly={readOnly}
            placeholder={newPlaceholder}
            onChange={(val) => {
              onChange && onChange(val);
            }}
          />
        )}
        {/* 年月 */}
        {
          name === 'YEARMONTH' && (
            <DatePicker
              value={value}
              title={title}
              ismust={ismust}
              disabled={disabled}
              readOnly={readOnly}
              type="yyyy/MM"
              placeholder={newPlaceholder}
              onOk={(val) => {
                onChange && onChange(val ? val.join('-') : val);
              }}
            />
          )
        }
        {/* 年月日 */}
        {name === 'DATE' && (
          <DatePicker
            value={value}
            title={title}
            ismust={ismust}
            disabled={disabled}
            readOnly={readOnly}
            type="yyyy/MM/dd"
            placeholder={newPlaceholder}
            onOk={(val) => {
              onChange && onChange(val ? val.join('-') : '');
            }}
          />
        )}
        {/* 年月日时分秒 */}
        {name === 'TIMEPICKERHRS' && (
          <DatePicker
            value={value}
            title={title}
            ismust={ismust}
            disabled={disabled}
            readOnly={readOnly}
            type="HH:mm:ss"
            placeholder={newPlaceholder}
            onOk={(val) => {
              onChange && onChange(val ? `${moment().format('YYYY-MM-DD')} ${val.join(':')}` : val);
            }}
          />
        )}
        {/* 年月日时分 */}
        {name === 'TIMEPICKERHR' && (
          <DatePicker
            value={value}
            title={title}
            ismust={ismust}
            disabled={disabled}
            readOnly={readOnly}
            type="HH:mm"
            placeholder={newPlaceholder}
            onOk={(val) => {
              onChange && onChange(val ? `${moment().format('YYYY-MM-DD')} ${val.join(':')}` : val);
            }}
          />
        )}
        {
          name === 'COMBOBOX' && (
            <HrComboBox
              value={value}
              allowClear
              code={code}
              title={title}
              ismust={ismust}
              placeholder={newPlaceholder}
              readOnly={readOnly}
              multiple={multiple}
              disabled={disabled}
              queryData={queryData}
              onChange={(val) => {
                onChange && onChange(val);
              }}
            />
          )
        }
        {name === 'CONSTANT' && (
          <HrConstantCode
            code={code}
            value={value}
            title={title}
            ismust={ismust}
            readOnly={readOnly}
            queryData={queryData}
            defaultValue={defaultValue}
            placeholder={newPlaceholder}
            onChange={(val) => {
              onChange && onChange(val);
            }}
          />
        )}
        {
          name === 'SETID' && <HrSetId
            value={value}
            tableName={tableName}
            placeholder={newPlaceholder}
            disabled={disabled}
            readOnly={readOnly}
            onChange={(val) => {
              onChange && onChange(val);
            }} />
        }
        {name === 'SELECTOR' && (
          <HrSearchHelper
            title={title}
            value={value}
            code={code}
            ismust={ismust}
            close={close}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={newPlaceholder}
            queryData={queryData}
            onChange={(val) => {
              onChange && onChange(val);
            }}
          />
        )}
        {
          (name === 'SINGLEFILE' || name === 'IMG') && (
            <HrImagePicker
              title={title}
              value={value}
              count={1}
              ismust={ismust}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={newPlaceholder}
              onChange={(val) => {
                onChange && onChange(val && val.length ? val[0] : '');
              }}
            />
          )
        }
        {
          (name === 'MUTIFILE' || name === 'MUTIIMG') && (
            <HrImagePicker
              title={title}
              value={value}
              ismust={ismust}
              disabled={disabled}
              readOnly={readOnly}
              placeholder={newPlaceholder}
              onChange={(val) => {
                onChange && onChange(val ? val.map(item => `${item}`) : []);
              }}
            />
          )
        }
        {/* 
        {
          name === 'RADIO' && <Radio
            value={value}
            disabled={disabled}
            onChange={e => {
              this.$emit('change', e.target.checked);
            }} />
        }

        {
          name === 'SWITCH' && <Switch
            checked={value}
            disabled={disabled}
            onChange={val => {
              this.$emit('change', val);
            }} />
        }
        {
          name === 'EMPSINGLE' && <HrSelectEmp
            value={value}
            disabled={disabled}
            disabled={disabled}
            queryData={queryData}
            placeholder={placeholder}
            onChange={val => {
              this.$emit('change', val);
            }} />
        } */}
      </div>
    );
  }
}

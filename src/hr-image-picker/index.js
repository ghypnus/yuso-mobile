/**
 * HrImagePicker
 * @author Groot.xie
 * @date 2020.3.13
 */

import React, { Component } from 'react'
import clone from 'lodash/clone';
import isArray from 'lodash/isArray';
import ImagePicker from '../image-picker/index'
import Toast from '../toast'
import { isEmpty } from '../_utils/data_util'

class HrImagePicker extends Component {
    static defaultProps = {
        temp: false,
        fileTypes: '*.jpg,*.jpeg,*.gif,*.png,*.bmp'
    }

    constructor(props) {
        super(props)
        this.actionUrl = `/file.nolog?method=upload&temp=${props.temp}`
        this.donwnLoadUrl = `${process.env.REACT_APP_API_BASE_URL}/file.nolog?method=download&fileId=`
    }

    handleSelect(files) {
        const { onChange, value } = this.props
        const PromiseArr = []
        files.forEach((file) => {
            const formData = new FormData()
            formData.append('files[]', file)
            PromiseArr.push(this.$axios.post(this.actionUrl, formData))
        })

        Promise.all(PromiseArr).then((res) => {
            onChange && onChange((value || []).concat(res.map(file => +file.fileId)))
        })
    }

    handleDelete(index) {
        const { value, onChange } = this.props
        const newValue = clone(isArray(value) ? value : [value]);
        newValue.splice(index, 1)
        onChange && onChange(newValue)
    }

    handleError({type, fileName}) {
        if (type === 'typeError') {
            Toast.show(`${fileName}类型错误`)
        } else if (type === 'limitError') {
            Toast.show(`${fileName}超出大小`)
        }
    }

    getValue(value) {
        let result = []
        if (!isEmpty(value)) {
            if (typeof value === 'string' || typeof value === 'number') {
                const array = value.toString().split(',')
                result = array.map((item) => ({
                    src: `${this.donwnLoadUrl}${item}`,
                }))
            } else {
                result = value.map(item =>
                    !item.src
                        ? {
                            src: `${this.donwnLoadUrl}${item}`,
                        }
                        : item
                )
            }
        }
        return result
    }

    render() {
        // temp 是否为临时文件
        const {
            onDelete,
            onClick,
            temp,
            value,
            readOnly,
            placeholder,
            ...restProps
        } = this.props
        const filesList = this.getValue(value)

        return (
            <ImagePicker
                {...restProps}
                value={filesList}
                isPress={false}
                readOnly={readOnly}
                placeholder={placeholder}
                onSelect={(files) => this.handleSelect(files)}
                onDelete={(index) => this.handleDelete(index)}
                onClick={(item, index) => onClick && onClick(item, index)}
                onError={err => this.handleError(err)}
            />
        )
    }
}

export default HrImagePicker

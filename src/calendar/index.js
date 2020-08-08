/**
 * 日历
 * @author david.dai
 */
import React from 'react'
import classnames from 'classnames'
import moment from 'moment'
import Checkbox from '../checkbox/index';
import Icon from '../icon/index';
import List from '../list/index';

export default class Calendar extends React.Component {
  static defaultProps = {
    prefixCls: 'wme-calendar',
    zIndex: 2,
    week: ['一', '二', '三', '四', '五', '六', '日'],
    onlyCurrentMonth: true,  //只显示当月日期
    selectedValue: [],  //选中的日期
    view: 'grid', //显示方式 grid/list
    mode: 'view', //模式 view/edit
  }

  constructor(props) {
    super(props)
    this.state = {
      currentDate: moment(),
    } 
  }

  componentDidMount() {
    let { value } = this.props
    this.valueChange(value)
  }

  valueChange(value) {
    let currentDate = value ? moment(value) : moment()
    this.setState(
      {
        currentDate,
      },
      () => {
        let days = this.getDaysData()
        this.setState({ days })
      }
    )
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.value &&
      (!prevProps.value ||
        moment(prevProps.value).valueOf() != moment(this.props.value).valueOf())
    ) {
      this.valueChange(this.props.value)
    }
  }

  /**
   * 产生数组
   */
  rangeArr(n) {
    return Array.apply(null, { length: n }).map((_, n) => n)
  }

  /**
   * 返回当月第一天周几
   */
  getFirstDayOfMonth(date) {
    return date.startOf('month').day()
  }
  /**
   * 返回上月最后几天
   */
  getPrevMonthLastDays(date, amount) {
    if (amount <= 0) return []
    const temp = new Date(date.valueOf())
    temp.setDate(0)
    const lastDay = temp.getDate()
    return this.rangeArr(amount).map(
      (_, index) => lastDay - (amount - index - 1)
    )
  }
  /**
   * 返回当月日期数组
   */
  getMonthDays(date) {
    const days = date.endOf('month').date()
    return this.rangeArr(days).map((_, index) => index + 1)
  }

  /**
   * 返回星期
   */
  getWeek({ text, type }) {
    let date = this.getFormateDate(text, type)
    return this.props.week[
      moment(date).format('E') - 1
    ]
  }
  /**
   * 生成多维数组
   */
  toNestedArr(days) {
    return this.rangeArr(days.length / 7).map((_, index) => {
      const start = index * 7
      return days.slice(start, start + 7)
    })
  }

  /**
   * 返回当月面板日历数据
   */
  getDaysData() {
    const { onlyCurrentMonth } = this.props
    let { currentDate } = this.state
    currentDate = currentDate.clone()
    // 获取当月第一天
    const firstDay = this.getFirstDayOfMonth(currentDate)
    // 根据当月第一天计算当月中上个月显示几天
    const prevMonthDays = this.getPrevMonthLastDays(
      currentDate,
      firstDay - 1
    ).map((day) => ({
      text: !onlyCurrentMonth && day,
      type: 'prev',
    }))
    // 获取本月多少天
    const currentMonthDays = this.getMonthDays(currentDate).map((day) => ({
      text: day,
      type: 'current',
    }))
    let days = [...prevMonthDays, ...currentMonthDays]
    //下月天数=42-上月-当月
    let nextNum = 42 - days.length
    if (!!onlyCurrentMonth && nextNum > 6) {
      nextNum = nextNum - 7
    }
    const nextMonthDays = this.rangeArr(nextNum).map((_, index) => ({
      text: !onlyCurrentMonth && index + 1,
      type: 'next',
    }))
    // 连起来共多少天
    days = days.concat(nextMonthDays)
    return days
  }

  /**
   * 返回格式化日期
   */
  getFormateDate(day, type) {
    if (!day || ['prev', 'current', 'next'].indexOf(type) === -1) {
      return
    }
    const { currentDate } = this.state
    let prefix
    if (type === 'prev') {
      prefix = moment(currentDate).date(0).format('YYYY-MM')
    } else if (type === 'next') {
      prefix = moment(currentDate)
        .date(moment(currentDate).endOf('month').date() + 1)
        .format('YYYY-MM')
    } else {
      prefix = moment(currentDate).format('YYYY-MM')
    }
    day = `00${day}`.slice(-2)
    return `${prefix}-${day}`
  }

  /**
   * 点击单元格
   */
  clickCell({ text, type }) {
    const { onSelect, onClick, selectedValue = [], mode, view } = this.props
    let formatValue = this.getFormateDate(text, type)
    let value = moment(formatValue)
    onClick && onClick(value)
    if (mode !== 'edit') return
    let tempSelectedValue = [...selectedValue]
    let curIndex = tempSelectedValue.indexOf(formatValue)
    if (curIndex > -1) {
      tempSelectedValue.splice(curIndex, 1)
    } else {
      tempSelectedValue.push(formatValue)
    }
    onSelect && onSelect(tempSelectedValue, value)
  }

  /**
   * 返回单元格样式
   */
  getCellClass(cell, isDisabled, prefixCls) {
    return classnames(prefixCls, {
      [`${prefixCls}-in-view`]: cell.type === 'current',
      [`${prefixCls}-disabled`]: isDisabled,
      [`${prefixCls}-selected`]: this.isSelected(cell),
      [`${prefixCls}-current`]: this.isCurrentDay(cell),
    })
  }

  /**
   * 是否已选中
   */
  isSelected({ text, type }) {
    const { selectedValue = [] } = this.props
    let cur = this.getFormateDate(text, type)
    return selectedValue.some((item) => {
      return item === cur
    })
  }

  /**
   * 是否为当前日期
   */
  isCurrentDay({ text, type }) { 
    const { currentDate } = this.state
    return currentDate.format('YYYY-MM-DD') === this.getFormateDate(text, type)
  }

  /**
   * 渲染单元格
   */
  renderCell({ text, type }) {
    const { dateCellRender, prefixCls } = this.props
    let cell
    if (dateCellRender) {
      cell = dateCellRender(moment(this.getFormateDate(text, type)))
    }
    return cell || <div className={`${prefixCls}-grid-cell-inner`}>{text}</div>
  }
  /**
   * 渲染星期
   */
  renderWeek() {
    const { prefixCls, week } = this.props
    return (
      <tr className={`${prefixCls}-week`}>
        {week.map((item, index) => (
          <th className={`${prefixCls}-week-${index}`} key={`week-li-${index}`}>
            {item}
          </th>
        ))}
      </tr>
    )
  }

  /**
   * 渲染网格日历
   */
  renderGrid() {
    const { days = [] } = this.state
    const { prefixCls, disabledDate, mode } = this.props
    if (!days.length) return null
    let gridData = this.toNestedArr(days)
    return (
      <table cellSpacing="0" className={`${prefixCls}-grid`}>
        <thead>{this.renderWeek()}</thead>
        <tbody>
          {gridData.map((rows, rowIndex) => {
            return (
              <tr key={`row-${rowIndex}`}>
                {rows.map((col, colIndex) => {

                let isDisabled = false
                if (mode === 'edit' && disabledDate) {
                  isDisabled = !!disabledDate(
                    moment(this.getFormateDate(col.text, col.type))
                  )
                }
                  return (
                    <td
                      onClick={() => {
                        col.text && !isDisabled && this.clickCell(col)
                      }}
                      key={`${rowIndex}-${colIndex}`}
                      className={this.getCellClass(col, isDisabled, `${prefixCls}-grid-cell`)}
                    >
                      {!!col.text && this.renderCell(col, isDisabled)}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
  /**
   * 切换月份
   */
  switchMonth(i) {
    const { onChange } = this.props
    const { currentDate } = this.state
    let value = currentDate.clone().add('month', i)
    onChange && onChange(value)
  }
  /**
   * 渲染日历头部
   */
  renderTitle() {
    const { prefixCls, Left, Right, headerRender, onChange, view, mode } = this.props
    const { currentDate } = this.state
    
    return (
      headerRender ? headerRender({value: currentDate, view, mode , onChange}) :  <div className={`${prefixCls}-header`}>
        {Left}
        <div className={`${prefixCls}-title`}>
          <div
            className="prev-btn"
            onClick={() => {
              this.switchMonth(-1)
            }}
          >
            <Icon type="return"></Icon>
          </div>
          <div className="current-month">
            {moment(currentDate).format('YYYY-MM')}
          </div>
          <div
            className="next-btn"
            onClick={() => {
              this.switchMonth(1)
            }}
          >
            <Icon type="enter"></Icon>
          </div>
        </div>
        {Right}
      </div>
    )
  }

  /**
   * 渲染列表日历
   */
  renderList() {
    const { days = [] } = this.state
    const { prefixCls, mode, dateCellRender, disabledDate } = this.props
    if (!days.length) return null
    let listData = days.filter((item) => {
      return item.type === 'current'
    })
    return (
      <List direction="column" className={`${prefixCls}-list`}>
        {listData.map((cell, index) => {
          let isDisabled = false
          if (mode === 'edit' && disabledDate) {
            isDisabled = !!disabledDate(
              moment(this.getFormateDate(cell.text, cell.type))
            )
          }
         return <List.Item
            key={cell.text}
            divider
            style={{ textAlign: 'center' }}
            onClick={() => {
              !isDisabled && this.clickCell(cell)
            }}
          >
            <div className={this.getCellClass(cell, isDisabled, `${prefixCls}-list-item`)}>
              {mode === 'edit' && (
                <div className={`${prefixCls}-list-item-check`}>
                 <Checkbox
                   disabled={isDisabled}
                    value={this.isSelected(cell)}
                    onChange={() => {
                      !isDisabled && this.clickCell(cell)
                    }}
                  />
                </div>
              )}
              <div className={`${prefixCls}-list-item-day`}>
                <div className="day-text">{cell.text}</div>
                <div className="day-week">{this.getWeek(cell)}</div>
              </div>
              {dateCellRender &&
                dateCellRender(
                  moment(this.getFormateDate(cell.text, cell.type))
                )}
            </div>
          </List.Item>
        })}
      </List>
    )
  }

  render() {
    const { prefixCls, className, zIndex, view } = this.props
    let { currentDate} = this.state
    if(!currentDate) return null
    return (
      <div className={classnames(`${prefixCls}`, className)} style={{ zIndex }}>
        {this.renderTitle()}
        {view === 'grid' && this.renderGrid()}
        {view === 'list' && this.renderList()}
      </div>
    )
  }
}

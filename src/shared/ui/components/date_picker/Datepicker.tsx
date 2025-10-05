/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import ReactDatePicker, { DatePickerProps as ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { TooltipPopover } from '../popover'
import { Select } from '../form'
import { Button } from '../button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { customDatePickerStyles as styles } from './datepicker.styles'
import { useCallback } from 'react'
import { Input } from '../form/input/Input'
import moment from 'moment'

export type DatePickerProps = Omit<ReactDatePickerProps, 'renderCustomHeader' | 'showTimeCaption'>

export const DatePicker = ({ inline = false, selected, dateFormat, ...rest }: ReactDatePickerProps) => {
  const renderCustomHeader = useCallback(
    ({
      date,
      changeYear,
      changeMonth,
      decreaseMonth,
      increaseMonth,
      prevMonthButtonDisabled,
      nextMonthButtonDisabled,
    }: any) => {
      const currentYear = new Date().getFullYear()
      const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i)
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]

      return (
        <>
          <Button onClick={decreaseMonth} color="transparent" disabled={prevMonthButtonDisabled}>
            <ChevronLeft width={16} height={16} strokeWidth={2} />
          </Button>

          <Select
            value={months[date.getMonth()]}
            options={months.map((m) => ({ value: m, name: m }))}
            onChange={(value) => changeMonth(months.indexOf(value.toString()))}
            compressed
          />

          <Select
            value={date.getFullYear()}
            options={years.map((y) => ({ value: y, name: y.toString() }))}
            onChange={(value) => changeYear(parseInt(value))}
            compressed
          />

          <Button onClick={increaseMonth} color="transparent" disabled={nextMonthButtonDisabled}>
            <ChevronRight width={16} height={16} strokeWidth={2} />
          </Button>
        </>
      )
    },
    [],
  )

  const CustomInputButton = (
    <Input
      readOnly
      value={selected ? moment(selected).format(Array.isArray(dateFormat) ? dateFormat[0] : dateFormat) : ''}
      style={{ border: 'none', cursor: 'pointer' }}
    />
  )

  if (inline) {
    return (
      <div css={css(styles)}>
        <ReactDatePicker
          selected={selected}
          showTimeCaption={false}
          renderCustomHeader={renderCustomHeader}
          inline
          {...rest}
        />
      </div>
    )
  }

  return (
    <TooltipPopover button={CustomInputButton}>
      <div css={css(styles)}>
        <ReactDatePicker
          selected={selected}
          showTimeCaption={false}
          renderCustomHeader={renderCustomHeader}
          inline
          {...rest}
        />
      </div>
    </TooltipPopover>
  )
}

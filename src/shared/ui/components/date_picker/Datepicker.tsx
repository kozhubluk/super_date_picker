/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { theme } from '../../theme'
import { TooltipPopover } from '../popover'
import { Select } from '../form'
import Button from '../button/Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const customDatePickerStyles = css({
  '.react-datepicker': {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'stretch',
    border: 0,
    fontFamily: theme.typography.fontFamily,
    '*': {
      transition: '0.2s',
    },
  },
  '.react-datepicker__day': {
    fontSize: theme.typography.size.small,
    color: theme.colors.text.main,
    fontWeight: theme.typography.weight.regular,
    '&:hover': {
      backgroundColor: theme.colors.background.primary,
      color: theme.colors.primary,
      textDecoration: 'underline',
      transform: 'scale(1.1)',
    },
  },
  '.react-datepicker__day--outside-month': {
    color: theme.colors.text.muted,
  },

  '.react-datepicker__day--keyboard-selected': {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text.inverted,
    '&:hover': {
      backgroundColor: theme.colors.primary,
      color: theme.colors.text.inverted,
      textDecoration: 'none',
      transform: 'scale(1.1)',
    },
  },

  '.react-datepicker__day-name': {
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text.muted,
    fontSize: theme.typography.size.small,
    fontWeight: theme.typography.weight.regular,
  },

  '.react-datepicker__month': {
    margin: '0',
    paddingTop: theme.spacing(1),
  },

  '.react-datepicker__header': {
    boxSizing: 'border-box',
    backgroundColor: theme.colors.background.light,
    borderBottom: 0,
    width: '100%',
    padding: theme.spacing(1),
    display: 'flex',
    gap: theme.spacing(1),

    '*': {
      flexGrow: 1,
    },
    button: {
      flexGrow: 0,
    },
  },

  // Timeselect

  '.react-datepicker__time-container ': {
    border: 0,
  },

  '.react-datepicker__time': {
    display: 'flex',
    height: '100%',
  },

  '.react-datepicker__time-box': {
    backgroundColor: theme.colors.background.blue,
    borderRadius: theme.borders.radius,
    display: 'flex',
    flexDirection: 'column',
  },

  '.react-datepicker__time-list': {
    flexGrow: 1,
    scrollbarColor: theme.colors.grey + ' transparent',
    scrollbarWidth: 'thin',
  },

  '.react-datepicker__time-list-item ': {
    padding: theme.spacing(2) + ' !important',
    height: 'auto !important',
    margin: 0,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.size.small,
    fontWeight: theme.typography.weight.regular,
    color: theme.colors.text.main,

    '&:hover': {
      backgroundColor: theme.colors.background.blue + ' !important',
      textDecoration: 'underline',
    },
  },
})

export const DatePicker = () => {
  const renderCustomHeader = ({
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
  }

  return (
    <TooltipPopover button={<div>2</div>}>
      <div css={css(customDatePickerStyles)}>
        <ReactDatePicker renderCustomHeader={renderCustomHeader} showTimeSelect showTimeCaption={false} inline />
      </div>
    </TooltipPopover>
  )
}

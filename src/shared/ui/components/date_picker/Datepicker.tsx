/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { theme } from '../../theme'

const customDatePickerStyles = css({
  '.react-datepicker': {
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
})

export const DatePicker = () => {
  return (
    <div css={css(customDatePickerStyles)}>
      <ReactDatePicker inline />
    </div>
  )
}

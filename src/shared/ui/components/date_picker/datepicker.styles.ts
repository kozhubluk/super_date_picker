import { css } from '@emotion/react'
import { theme } from '../../theme'

export const customDatePickerStyles = css({
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
  '.react-datepicker__day, .react-datepicker__day--keyboard-selected': {
    backgroundColor: theme.colors.background.light,
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

  '.react-datepicker__day--selected': {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text.inverted,
    '&:hover': {
      backgroundColor: theme.colors.primary + ' !important',
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
    padding: theme.spacing(1) + ' !important',
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
    padding: theme.spacing(1.5) + ' !important',
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

  '.react-datepicker__time-list-item--selected': {
    backgroundColor: theme.colors.primary + ' !important',
    borderRadius: theme.borders.radius,
    fontWeight: theme.typography.weight.medium,

    ':hover': {
      backgroundColor: theme.colors.primary + ' !important',
      textDecoration: 'underline',
    },
  },
})

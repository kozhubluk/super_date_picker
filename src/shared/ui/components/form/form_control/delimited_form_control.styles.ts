import { css } from '@emotion/react'
import { theme } from '../../../theme'

export const delimitedFormControlStyles = {
  base: css({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
  }),

  startControl: css({
    display: 'flex',
    height: '100%',
    width: '100%',

    'input, button': {
      borderTopRightRadius: theme.borders.radius,
      borderBottomRightRadius: theme.borders.radius,
    },
  }),

  endControl: css({
    display: 'flex',
    height: '100%',
    width: '100%',

    'input, button': {
      borderTopLeftRadius: theme.borders.radius,
      borderBottomLeftRadius: theme.borders.radius,
    },
  }),

  delimiter: css({
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.text.muted,
  }),
}

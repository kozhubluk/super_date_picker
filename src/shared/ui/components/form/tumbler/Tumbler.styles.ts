import { css } from '@emotion/react'
import { theme } from '../../../theme'
import { spacing } from '../../../theme/spacing'

export const tumblerStyles = {
  tumbler: css({
    cursor: 'pointer',
    position: 'relative',
    width: theme.form.tumbler.width,
    height: theme.form.tumbler.height,
    borderRadius: theme.form.tumbler.borderRadius,
    backgroundColor: theme.colors.secondary,
    transition: '0.2s',

    '> button': {
      cursor: 'pointer',
      position: 'absolute',
      border: '0',
      width: theme.form.tumbler.elementSize,
      height: theme.form.tumbler.elementSize,
      top: 0,
      bottom: 0,
      margin: 'auto',
      left: spacing(0.5),
      borderRadius: '100%',
      backgroundColor: theme.colors.background.light,
      transition: '0.3s ease-in-out',
    },
  }),

  active: {
    backgroundColor: theme.colors.primary,

    '> button': {
      right: spacing(0.5),
      left: 'auto',
      transition: '0.3s ease-in-out',
    },
  },
}

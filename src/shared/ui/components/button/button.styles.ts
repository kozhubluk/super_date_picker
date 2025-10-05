import { css } from '@emotion/react'
import { theme } from '../../theme'
import { spacing } from '../../theme/spacing'

export const buttonStyles = {
  base: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.weight.regular,
    border: 0,
    cursor: 'pointer',
    borderRadius: theme.borders.radius,
    transition: '0.1s',
  }),

  size: {
    s: css({
      height: theme.form.size.small,
      fontSize: theme.typography.size.small,
      padding: `${spacing(1)} ${spacing(2)}`,
    }),
    m: css({
      height: theme.form.size.medium,
      fontSize: theme.typography.size.base,
      padding: `${spacing(1)} ${spacing(2)}`,
    }),
    l: css({
      height: theme.form.size.large,
      fontSize: theme.typography.size.large,
      padding: `${spacing(1)} ${spacing(2)}`,
    }),
  },

  color: {
    primary: css({
      backgroundColor: theme.colors.primary,
      color: theme.colors.text.inverted,
    }),
    transparent: css({
      backgroundColor: 'transparent',
      color: theme.colors.text.main,

      ':hover': {
        backgroundColor: theme.colors.background.primary,
      },
    }),
    green: css({
      backgroundColor: theme.colors.success,
      color: theme.colors.text.inverted,
    }),
    red: css({
      backgroundColor: theme.colors.danger,
      color: theme.colors.text.inverted,
    }),
  },
}

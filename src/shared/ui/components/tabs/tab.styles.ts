import { css } from '@emotion/react'
import { theme } from '../../theme'

export const tabStyles = {
  base: css({
    border: 'none',
    backgroundColor: 'transparent',
    color: theme.colors.text.main,
    fontWeight: theme.typography.weight.regular,
    fontFamily: theme.typography.fontFamily,
    cursor: 'pointer',
  }),

  isSelected: css({
    borderBottom: `${1.5}px solid ${theme.colors.primary}`,
    color: theme.colors.primary,
    fontWeight: theme.typography.weight.medium,
  }),

  expand: css({
    flexGrow: 1,
  }),

  sizes: {
    s: css({
      fontSize: theme.typography.size.small,
      padding: theme.spacing(0.5),
    }),
    m: css({
      fontSize: theme.typography.size.base,
      padding: theme.spacing(1),
    }),
    l: css({
      fontSize: theme.typography.size.large,
      padding: theme.spacing(1.5),
    }),
  },
}

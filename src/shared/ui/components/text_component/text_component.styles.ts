import { css } from '@emotion/react'
import { theme } from '../../theme'

export const textComponentStyles = {
  base: css({
    fontFamily: theme.typography.fontFamily,
  }),

  size: {
    s: css({
      fontSize: theme.typography.size.small,
    }),
    m: css({
      fontSize: theme.typography.size.base,
    }),
    l: css({
      fontSize: theme.typography.size.large,
    }),
  },

  color: {
    main: css({
      color: theme.colors.text.main,
    }),
    primary: css({
      color: theme.colors.primary,
    }),
    secondary: css({
      color: theme.colors.secondary,
    }),
  },

  weight: {
    light: css({
      fontWeight: theme.typography.weight.light,
    }),
    regular: css({
      fontWeight: theme.typography.weight.regular,
    }),
    medium: css({
      fontWeight: theme.typography.weight.medium,
    }),
    bold: css({
      fontWeight: theme.typography.weight.bold,
    }),
  },
}

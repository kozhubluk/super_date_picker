import { css } from '@emotion/react'
import { theme } from '../../theme'

export const tabsStyles = {
  base: css({
    position: 'relative',
    display: 'flex',
    width: '100%',
    background: theme.colors.background.light,
    overflow: 'auto',
  }),

  borderBottom: css({
    boxShadow: `${theme.colors.secondary} 0px -1px 0px inset`,
  }),

  expand: css({
    justifyContent: 'space-between',
  }),

  sizes: {
    s: css({
      gap: theme.spacing(1),
    }),
    m: css({
      gap: theme.spacing(2),
    }),
    l: css({
      gap: theme.spacing(3),
    }),
  },
}

import { css } from '@emotion/react'
import { theme } from '../../../theme'

export const formControlStyles = {
  base: css({
    position: 'relative',
    height: theme.form.height,
    display: 'flex',
    boxSizing: 'border-box',
    overflow: 'hidden',
    borderRadius: theme.borders.radius,

    '&::after': {
      content: '""',
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: `${theme.borders.width.thin} solid ${theme.colors.secondary}`,
      borderRadius: theme.borders.radius,
      pointerEvents: 'none',
    },

    'input, button, select': {
      position: 'relative',
      zIndex: '10',
      width: '100%',
      height: '100%',
      paddingInlineStart: theme.spacing(1),
      paddingInlineEnd: theme.spacing(1),
      boxSizing: 'border-box',
      // backgroundColor: theme.colors.background.light,
      borderRadius: theme.borders.radius,
      border: 'none',
      outlineOffset: `-${theme.borders.width.thin}`,
      outline: `${theme.borders.width.thin} solid ${theme.colors.secondary}`,
      fontFamily: theme.typography.fontFamily,

      '&:focus': {
        outlineOffset: `-${theme.borders.width.thick}`,
        outline: `${theme.borders.width.thick} solid ${theme.colors.primary}`,
      },
    },
  }),

  isDisabled: css({
    'input, button, select': {
      backgroundColor: theme.colors.background.dark + ' !important',
      color: theme.colors.text.muted,
    },
  }),

  isInvalid: css({
    'input, button, select': {
      outlineColor: theme.colors.red,
    },
  }),

  compressed: css({
    height: theme.form.compressedHeight,
  }),

  formWrapper: css({
    label: 'form_wrapper',
    position: 'relative',
    flexGrow: '1',
    height: '100%',
    width: '100%',
  }),

  // Кнопки сбоку от формы

  append: css({
    borderRight: `${theme.borders.width.thin} solid ${theme.colors.secondary}`,
    display: 'flex',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.size.base,
    fontWeight: theme.typography.weight.regular,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.primary,
    color: theme.colors.text.main,
  }),

  hasAppend: css({
    'input, button, select': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  }),

  hasPrepend: css({
    'input, button, select': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  }),

  prepend: css({
    borderLeft: `${theme.borders.width.thin} solid ${theme.colors.secondary}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.size.base,
    fontWeight: theme.typography.weight.regular,
    backgroundColor: theme.colors.background.primary,
    color: theme.colors.text.main,
    outline: 'none',
  }),

  // Иконки

  iconContainer: css({
    label: 'icon_container',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: '11',
    top: '0',
    right: '0',
    gap: theme.spacing(1),
    paddingRight: theme.spacing(1),
    pointerEvents: 'none',

    '> *': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),

  idInvalidIcon: css({
    color: theme.colors.red,
  }),

  // error message
  error: css({
    color: theme.colors.danger,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.weight.regular,
    fontSize: theme.typography.size.small,
    marginTop: theme.spacing(1),
  }),
}

/* eslint-disable eqeqeq */
/** @jsxImportSource @emotion/react */

import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { formControlStyles as styles } from './form_controll.styles'
import { TriangleAlert } from 'lucide-react'

export interface FormControlProps {
  children?: ReactNode
  prepend?: ReactNode
  append?: ReactNode
  icon?: ReactNode
  isInvalid?: boolean
  isDisabled?: boolean
  compressed?: boolean
  errorMessage?: string
}

export const FormControl = ({
  children,
  prepend,
  append,
  icon,
  isInvalid = false,
  isDisabled = false,
  compressed = false,
  errorMessage,
}: FormControlProps) => {
  const hasAppend = !!append
  const hasPrepend = !!prepend

  const formControlCss = css([
    styles.base,
    isInvalid && styles.isInvalid,
    isDisabled && styles.isDisabled,
    compressed && styles.compressed,
    hasAppend && styles.hasAppend,
    hasPrepend && styles.hasPrepend,
  ])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div css={formControlCss}>
        {append && <div css={css(styles.append)}>{append}</div>}
        <div css={css(styles.formWrapper)}>
          {children}
          <div css={css(styles.iconContainer)}>{!!icon && icon}</div>
        </div>

        {prepend && <div css={css(styles.prepend)}>{prepend}</div>}
      </div>
      {errorMessage && <div css={css(styles.error)}>{errorMessage}</div>}
    </div>
  )
}

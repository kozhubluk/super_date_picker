/** @jsxImportSource @emotion/react */

import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { FormControl, FormControlProps } from './FormControl'
import { MoveRightIcon } from 'lucide-react'
import { delimitedFormControlStyles as styles } from './delimited_form_control.styles'

export interface DelimitedFormControlProps extends Omit<FormControlProps, 'children'> {
  startControl: ReactNode
  endControl: ReactNode
}

const fromControlCss = css([styles.base])

export const DelimitedFormControl = ({
  icon,
  isInvalid,
  isDisabled,
  compressed,
  startControl,
  endControl,
  ...rest
}: DelimitedFormControlProps) => {
  return (
    <FormControl icon={icon} isInvalid={true} isDisabled={isDisabled} compressed={compressed} {...rest}>
      <div css={css(fromControlCss)}>
        <div css={css(styles.startControl)}>{startControl}</div>
        <div css={css(styles.delimiter)}>
          <MoveRightIcon strokeWidth={1.6} width={20} height={20} />
        </div>
        <div css={css(styles.endControl)}> {endControl}</div>
      </div>
    </FormControl>
  )
}

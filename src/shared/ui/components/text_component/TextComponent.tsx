/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { textComponentStyles as styles } from './text_component.styles'

export interface TextComponentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  text?: string
  size?: 's' | 'm' | 'l'
  color?: 'main' | 'primary' | 'secondary' | 'error'
  weight?: 'light' | 'regular' | 'medium' | 'bold'
}

export const TextComponent = ({
  text,
  size = 'm',
  color = 'main',
  weight = 'regular',
  ...rest
}: TextComponentProps) => {
  const textComponentCss = css([styles.base, styles.size[size], styles.color[color], styles.weight[weight]])

  return (
    <div css={textComponentCss} {...rest}>
      {text}
    </div>
  )
}

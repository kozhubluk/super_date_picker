/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { textComponentStyles as styles } from './text_component.styles'

export interface TextComponentProps {
  text?: string
  size?: 's' | 'm' | 'l'
  color?: 'main' | 'primary' | 'secondary'
  weight?: 'light' | 'regular' | 'medium' | 'bold'
}

export const TextComponent = ({ text, size = 'm', color = 'main', weight = 'regular' }: TextComponentProps) => {
  const textComponentCss = css([styles.base, styles.size[size], styles.color[color], styles.weight[weight]])

  return <div css={textComponentCss}>{text}</div>
}

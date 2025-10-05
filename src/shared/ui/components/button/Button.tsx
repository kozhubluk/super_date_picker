/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import React from 'react'
import { buttonStyles as styles } from './button.styles'

export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'green' | 'red' | 'transparent' | 'primary'
  size?: 's' | 'm' | 'l'
  outline?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ size = 'm', color = 'primary', outline = false, children, ...rest }, ref) => {
    const buttonCss = css([styles.base], styles.size[size], styles.color[color])

    return (
      <button css={buttonCss} ref={ref} {...rest}>
        {children}
      </button>
    )
  },
)

export default Button

import React, { forwardRef } from 'react'
import { FormControl, FormControlProps } from '../FormControl'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'>,
    Omit<FormControlProps, 'children'> {
  icon?: React.ReactNode
  prepend?: React.ReactNode
  append?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isInvalid, isDisabled, compressed, icon, prepend, append, ...rest }, ref) => {
    return (
      <FormControl
        isInvalid={isInvalid}
        compressed={compressed}
        isDisabled={isDisabled}
        icon={icon}
        prepend={prepend}
        append={append}
      >
        <input
          ref={ref}
          disabled={isDisabled}
          {...rest}
          style={{
            paddingInlineStart: '10px',
          }}
        />
      </FormControl>
    )
  },
)

Input.displayName = 'Input'

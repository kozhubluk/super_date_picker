import React, { forwardRef } from 'react'
import { FormControl, FormControlProps } from '../form_control/FormControl'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children' | 'onChange'>,
    Omit<FormControlProps, 'children'> {
  icon?: React.ReactNode
  prepend?: React.ReactNode
  append?: React.ReactNode
  onChange?: (value: string) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isInvalid, isDisabled, compressed, icon, prepend, append, onChange, errorMessage, ...rest }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
    }

    return (
      <FormControl
        isInvalid={isInvalid}
        compressed={compressed}
        isDisabled={isDisabled}
        icon={icon}
        prepend={prepend}
        append={append}
        errorMessage={errorMessage}
      >
        <input ref={ref} disabled={isDisabled} onChange={handleChange} {...rest} />
      </FormControl>
    )
  },
)

Input.displayName = 'Input'

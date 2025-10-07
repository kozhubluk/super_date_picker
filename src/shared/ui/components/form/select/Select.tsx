import React from 'react'
import { FormControl, FormControlProps } from '../form_control/FormControl'
import { ChevronDown } from 'lucide-react'
import { theme } from '../../../theme'

export interface Option<T> {
  value: T
  name: string
}

interface SelectProps<T>
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'>,
    Omit<FormControlProps, 'children'> {
  options: Option<T>[]
  value?: T
  onChange?: (value: string) => void
}

export function Select<T extends number | string>({
  value,
  options,
  isInvalid,
  isDisabled,
  compressed,
  onChange,
  ...rest
}: SelectProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <FormControl isInvalid={isInvalid} compressed={compressed} isDisabled={isDisabled}>
      <select
        style={{ cursor: 'pointer', paddingInlineStart: '4px', ...rest.style }}
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </FormControl>
  )
}

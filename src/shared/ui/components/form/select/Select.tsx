import React, { FC } from 'react'
import { FormControl, FormControlProps } from '../FormControl'
import { ChevronDown } from 'lucide-react'
import { theme } from '../../../theme'

interface Option {
  value: string | number
  name: string
}

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>,
    Omit<FormControlProps, 'children'> {
  options: Option[]
  value?: string | number
  onChange?: (value: string | number) => void
}

export const Select: FC<SelectProps> = ({
  value,
  options,
  isInvalid,
  isDisabled,
  compressed,
  className,
  onChange,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <FormControl
      isInvalid={isInvalid}
      compressed={compressed}
      isDisabled={isDisabled}
      icon={<ChevronDown width={16} color={theme.colors.grey} />}
    >
      <select style={{ appearance: 'none', cursor: 'pointer' }} value={value} onChange={handleChange} {...rest}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </FormControl>
  )
}

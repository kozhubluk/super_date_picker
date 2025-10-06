import { useEffect, useState } from 'react'
import { Input } from '../../../form'
import { DatePicker } from '../../Datepicker'
import datemath from '@elastic/datemath'
import { Button } from '../../../button'

interface AbsoluteTabProps {
  value?: string
  roundUp?: boolean
  updateValue?: boolean
}

export const AbsoluteTab = ({ roundUp = false, value, updateValue }: AbsoluteTabProps) => {
  const [dateValue, setDateValue] = useState(datemath.parse(value || '', { roundUp }))
  const [textValue, setTextValue] = useState(datemath.parse(value || '', { roundUp })?.toISOString())

  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(true)

  useEffect(() => {}, [value])

  const onTextChange = (value: string) => {
    // При начале печати скрываем сообщение об ошибке и показываем кнопку для "отправки"
    setIsValid(true)
    setIsEditMode(true)
    setTextValue(value)
  }

  // todo отправляем строку в iso string формате
  const onButtonSubmit = () => {
    if (!isValid) return

    // todo проверку валидности и отправки форматированной даты
    const newIsValid = true
    setIsValid(newIsValid)
  }

  const onDateUpdate = (date: Date) => {}

  return (
    <div>
      <DatePicker selected={dateValue?.toDate() || new Date()} inline showTimeSelect />
      <Input value={textValue} onChange={onTextChange} append={roundUp ? 'End date' : 'Start date'} />
      {isEditMode && <Button onClick={onButtonSubmit}>OK</Button>}
    </div>
  )
}

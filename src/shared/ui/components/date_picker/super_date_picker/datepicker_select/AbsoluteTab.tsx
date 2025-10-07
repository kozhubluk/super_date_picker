/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import { Input } from '../../../form'
import { DatePicker } from '../../Datepicker'
import datemath from '@elastic/datemath'
import { Button } from '../../../button'
import moment from 'moment'
import { useUpdateEffect } from '../../../../../hooks/useUpdateEffect'
import { datepickerSelectStyles } from './datepicker_select.styles'
import { TextComponent } from '../../../text_component/TextComponent'
import { isValidDate } from '../../../../../utils'

interface AbsoluteTabProps {
  value?: string
  roundUp?: boolean
  dateFormat: string
  timeFormat: string
  updateValue?: (newValue: string) => void
}

export const AbsoluteTab = ({ roundUp = false, value, updateValue, dateFormat, timeFormat }: AbsoluteTabProps) => {
  // Вермя в календаре
  const [dateValue, setDateValue] = useState<Date | null>(
    (() => {
      const parsed = datemath.parse(value || '', { roundUp })
      const date = parsed?.toDate?.()

      return date && isValidDate(date) ? date : new Date()
    })(),
  )

  // Время в поле ввода
  const [textValue, setTextValue] = useState<string>(
    (() => {
      const parsed = value ? datemath.parse(value, { roundUp }) : moment()
      return parsed && !parsed?.isValid ? parsed?.format?.(dateFormat) : ''
    })(),
  )

  const [isEditMode, setIsEditMode] = useState(false)
  const [isValid, setIsValid] = useState(true)

  useUpdateEffect(() => {
    const parsed = value ? datemath.parse(value, { roundUp }) : null

    const date = parsed?.toDate()
    const text = parsed && parsed.isValid() ? parsed?.format(dateFormat) : ''

    setDateValue(date && isValidDate(date) ? date : new Date())
    setTextValue(text)
    setIsValid(true)
    setIsEditMode(false)
  }, [value, roundUp])

  const onTextChange = (val: string) => {
    setTextValue(val)
    setIsEditMode(true)
    setIsValid(true)
  }

  const onButtonSubmit = () => {
    let m = moment(textValue, moment.ISO_8601, true)

    if (!m.isValid()) {
      m = moment(textValue, dateFormat, true)
    }

    if (m.isValid()) {
      updateValue?.(m.toISOString())
      setIsEditMode(false)
      return
    }
    setIsValid(false)
  }

  const onDateUpdate = (date: Date | null) => {
    if (!date) return

    setDateValue(date)
    updateValue?.(date.toISOString())
    setIsValid(true)
  }

  return (
    <div css={datepickerSelectStyles.tab}>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '6px' }}>
        <DatePicker
          timeFormat={timeFormat}
          selected={dateValue || new Date()}
          onChange={onDateUpdate}
          inline
          showTimeSelect
        />
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <div style={{ flexGrow: '1' }}>
          <Input
            value={textValue}
            isInvalid={!isValid}
            onChange={onTextChange}
            append={
              <div style={{ display: 'flex', justifyContent: 'center', width: '75px' }}>
                {roundUp ? 'End date' : 'Start date'}
              </div>
            }
          />
        </div>
        {isEditMode && (
          <div>
            <Button size="l" onClick={onButtonSubmit}>
              OK
            </Button>
          </div>
        )}
      </div>
      {isEditMode && (
        <TextComponent
          style={{ marginTop: '6px', minWidth: '100%', width: 'min-content' }}
          text={`Allowed formats: ${dateFormat}, ISO 8601.`}
          size="s"
          color={isValid ? 'secondary' : 'error'}
        />
      )}
      {isEditMode && <TextComponent />}
    </div>
  )
}

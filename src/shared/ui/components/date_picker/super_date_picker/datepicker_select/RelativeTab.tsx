/** @jsxImportSource @emotion/react */

import datemath from '@elastic/datemath'
import { Input, Select, Tumbler } from '../../../form'
import { useTimeOptions } from '../TimeOptionsContext'
import { useEffect, useRef, useState } from 'react'
import { QuickSelect, RelativeTimeUnit } from '../types'
import { parseRelative, relativeUnitToDatemath } from '../datepickerUtils'
import moment from 'moment'
import { datepickerSelectStyles } from './datepicker_select.styles'
import { TextComponent } from '../../../text_component/TextComponent'
import { unitNames } from '../constants'

const COUNT_ERROR_MESSAGE = 'Must be >= 0'

interface RelativeTabProps {
  value?: string
  roundUp?: boolean
  dateFormat?: string
  quickSelect?: QuickSelect
  updateValue?: (value: string) => void
}

export const RelativeTab = ({ value, roundUp = false, updateValue, dateFormat, quickSelect }: RelativeTabProps) => {
  const { relativeUnitOptions } = useTimeOptions()

  const { count: defaultCount, relativeTimeUnit } = parseRelative(value)

  const [count, setCount] = useState<string>(defaultCount.toString())
  const [unit, setUnit] = useState<RelativeTimeUnit>(relativeTimeUnit)
  const [isRound, setIsRound] = useState<boolean>(false)

  const isChanged = useRef<boolean>(false)
  const isValid = parseInt(count) >= 0

  const onCountUpdate = (value: string) => {
    setCount(value)
    isChanged.current = true
  }

  const onUnitUpdate = (value: string) => {
    setUnit(value as RelativeTimeUnit)
    isChanged.current = true
  }

  const onRoundUpdate = () => {
    setIsRound((prev) => !prev)
    isChanged.current = true
  }

  const formattedDate = (value ? datemath.parse(value, { roundUp }) || moment() : moment()).format(dateFormat)

  useEffect(() => {
    if (isChanged.current && isValid) {
      updateValue?.(relativeUnitToDatemath(unit, parseInt(count), isRound))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, unit, isRound])

  return (
    <div css={datepickerSelectStyles.tab} style={{ display: 'flex', gap: '6px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '6px' }}>
        <div style={{ flexGrow: 1 }}>
          <Input
            isInvalid={!isValid}
            errorMessage={isValid ? '' : COUNT_ERROR_MESSAGE}
            value={count}
            onChange={onCountUpdate}
            type="number"
          />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Select onChange={onUnitUpdate} options={relativeUnitOptions} value={unit} />
        </div>
      </div>
      <div>
        <Input
          append={
            <div style={{ display: 'flex', justifyContent: 'center', width: '75px' }}>
              {roundUp ? 'End date' : 'Start date'}
            </div>
          }
          value={isValid ? formattedDate : ''}
          disabled
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Tumbler state={isRound} onClick={onRoundUpdate} />
        <TextComponent size="m" weight="light" text={`Round to the ${unitNames[unit[1]]}s`} />
      </div>
    </div>
  )
}

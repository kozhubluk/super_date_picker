import datemath from '@elastic/datemath'
import { Input, Select, Tumbler } from '../../../form'
import { useTimeOptions } from '../TimeOptionsContext'
import { useState } from 'react'
import { RelativeTimeUnit } from '../types'

interface RelativeTabProps {
  value?: string
  roundUp?: boolean
  updateValue?: boolean
}

// TODO добавить поддержку определения default init value по аналогии с quick select
export const RelativeTab = ({ value, roundUp = false, updateValue }: RelativeTabProps) => {
  const { relativeUnitOptions } = useTimeOptions()

  const [count, setCount] = useState<number>(0)
  const [unit, setUnit] = useState<RelativeTimeUnit>('+M')
  const [isRound, setIsRound] = useState<boolean>(false)

  const onCountUpdate = (value: string) => {
    setCount(parseInt(value))
  }

  const onUnitUpdate = (value: string) => {
    setUnit(value as RelativeTimeUnit)
  }

  const onRoundUpdate = () => {
    setIsRound((prev) => !prev)
  }

  // TODO Добавить поддержку разных форматов даты и round up
  const formattedDate = datemath.parse(value || '')!.toISOString()

  return (
    <div>
      <div>
        <Input onChange={onCountUpdate} type="number" />
        <Select onChange={onUnitUpdate} options={relativeUnitOptions} value={relativeUnitOptions[0].value} />
      </div>
      <div>
        <Input prepend={roundUp ? 'End date' : 'Start date'} value={formattedDate} readOnly disabled />
      </div>
      <div>
        <Tumbler state={isRound} onClick={onRoundUpdate} />
      </div>
    </div>
  )
}

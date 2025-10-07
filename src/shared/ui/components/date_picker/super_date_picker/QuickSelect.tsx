import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../../button'
import { TextComponent } from '../../text_component/TextComponent'
import { Input, Select } from '../../form'
import { useTimeOptions } from './TimeOptionsContext'
import { onApplyClickProps, QuickSelect as QuickSelectType, TimeDirection, TimeUnit } from './types'
import { useState } from 'react'
import { parseQuickSelect } from './datepickerUtils'
import datemath from '@elastic/datemath'

interface QuickSelectProps {
  start?: string
  end?: string
  quickSelect?: QuickSelectType
  closePopover?: () => void
  handleApply?: (quickSelect: onApplyClickProps) => void
}

export const QuickSelect = ({ start, end, quickSelect, handleApply, closePopover }: QuickSelectProps) => {
  const { timeUnitOptions, timeDirectionOptions } = useTimeOptions()

  const defaultQuickSelect = parseQuickSelect(start, end)
  const [tempQuickSelect, setTempQuickSelect] = useState<QuickSelectType>(quickSelect || defaultQuickSelect)

  // update temp state
  const updateUnit = (unit: string) => {
    setTempQuickSelect((prev) => ({ ...prev, unit: unit as TimeUnit }))
  }
  const updateDirection = (direction: string) => {
    setTempQuickSelect((prev) => ({ ...prev, direction: direction as TimeDirection }))
  }
  const updateNumber = (number: string) => {
    setTempQuickSelect((prev) => ({ ...prev, value: parseInt(number) }))
  }

  // prev/next time window

  const startMoment = datemath.parse(start || '')
  const endMoment = datemath.parse(end || '', { roundUp: true })

  const diff = startMoment && endMoment ? endMoment.diff(startMoment) : 0

  const clickNext = () => {
    handleApply?.({
      start: endMoment?.toISOString()!,
      end: endMoment?.add(diff, 'ms').toISOString()!,
    })
  }
  const clickPrev = () => {
    handleApply?.({
      end: startMoment?.toISOString()!,
      start: startMoment?.add(-diff, 'ms').toISOString()!,
    })
  }

  // update external state
  const onClickApply = () => {
    const { direction, value, unit } = tempQuickSelect

    if (direction === TimeDirection.LAST) {
      handleApply?.({ start: `now-${value}${unit}`, end: 'now', quickSelect: tempQuickSelect })
      return
    }
    handleApply?.({
      start: 'now',
      end: `now+${value}${unit}`,
      quickSelect: tempQuickSelect,
    })

    closePopover?.()
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '4px',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '4px',
        }}
      >
        <TextComponent text="Quick select" weight="medium" />
        <div style={{ display: 'flex', gap: '4px' }}>
          <Button onClick={clickPrev} color="transparent">
            <ChevronLeft strokeWidth={1} />
          </Button>
          <Button onClick={clickNext} color="transparent">
            <ChevronRight strokeWidth={1} />
          </Button>
        </div>
      </div>
      <div style={{ display: 'grid', gap: '4px', gridTemplateColumns: '1fr 1fr 1fr 0.75fr' }}>
        <Select value={tempQuickSelect.direction} options={timeDirectionOptions} onChange={updateDirection} />
        <Input value={tempQuickSelect.value} type="number" onChange={updateNumber} />
        <Select value={tempQuickSelect.unit} options={timeUnitOptions} onChange={updateUnit} />

        <Button size="l" color="primary" onClick={onClickApply}>
          Apply
        </Button>
      </div>
    </div>
  )
}

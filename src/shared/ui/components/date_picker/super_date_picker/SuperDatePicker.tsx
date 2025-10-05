import { useEffect, useState } from 'react'
import { DelimitedFormControl } from '../../form/form_control/DelimitedFormControl'
import { QuickSelectPopover } from './QuickSelectPopover'
import { TimeOptionsProvider } from './TimeOptionsContext'
import { onTimeChangeProps, startEndOption, SuperDatePickerState } from './types'

export interface SuperDatePickerProps {
  start?: string
  end?: string
  onTimeChange?: (time: onTimeChangeProps) => void
  recentlyUsedOptions?: startEndOption[]
}

export const SuperDatePicker = ({
  start = 'now-15m',
  end = 'now',
  onTimeChange,
  recentlyUsedOptions,
}: SuperDatePickerProps) => {
  // todo: прокинуть в quick select одноим. парм.
  const [datepickerState, setDatepickerState] = useState<SuperDatePickerState>({ start, end })

  useEffect(() => {
    setDatepickerState((prev) => ({ ...prev, start, end }))
  }, [start, end])

  // update state
  const applyChanges = ({ start, end, quickSelect }: SuperDatePickerState) => {
    if (quickSelect) {
      setDatepickerState((prev) => ({ ...prev, quickSelect }))
    }
    onTimeChange?.({ start: start!, end: end! })
  }

  const updateStart = (newStart: string) => {
    setDatepickerState((prev) => ({ ...prev, start: newStart }))
  }

  const updateEnd = (newEnd: string) => {
    setDatepickerState((prev) => ({ ...prev, end: newEnd }))
  }

  const renderQuickSelect = () => {
    return <QuickSelectPopover start={start} end={end} handleApply={applyChanges} />
  }
  return (
    <TimeOptionsProvider recentlyUsedOptions={recentlyUsedOptions}>
      <DelimitedFormControl
        append={renderQuickSelect()}
        startControl={<input readOnly value={start} />}
        endControl={<input readOnly value={end} />}
      />
    </TimeOptionsProvider>
  )
}

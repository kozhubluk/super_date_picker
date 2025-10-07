/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react'
import { DelimitedFormControl } from '../../form/form_control/DelimitedFormControl'
import { QuickSelectPopover } from './QuickSelectPopover'
import { TimeOptionsProvider } from './TimeOptionsContext'
import { onTimeChangeProps, startEndOption, SuperDatePickerState } from './types'
import { DatepickerSelectPopover } from './datepicker_select/DatepickerSelectPopver'
import { Button } from '../../button'
import datemath from '@elastic/datemath'

export interface SuperDatePickerProps {
  start?: string
  end?: string
  onTimeChange: (time: onTimeChangeProps) => void
  recentlyUsedOptions?: startEndOption[]
  dateFormat?: string
  timeFormat?: string
  compressed?: boolean
}

export const SuperDatePicker = ({
  start = '',
  end = '',
  onTimeChange,
  recentlyUsedOptions,
  compressed = false,
  dateFormat = 'MMM D, YYYY @ HH:mm:ss.SSS',
  timeFormat = 'HH:mm',
}: SuperDatePickerProps) => {
  const [datepickerState, setDatepickerState] = useState<SuperDatePickerState>({ start, end })

  useEffect(() => {
    setDatepickerState((prev) => ({ ...prev, start, end }))
  }, [start, end])

  // update state
  const applyChanges = ({ start, end, quickSelect }: SuperDatePickerState) => {
    if (quickSelect) {
      setDatepickerState((prev) => ({ ...prev, quickSelect }))
    }
    onTimeChange({ start: start!, end: end! })
  }

  const updateStart = (newStart: string) => {
    setDatepickerState((prev) => ({ ...prev, start: newStart }))
  }

  const updateEnd = (newEnd: string) => {
    setDatepickerState((prev) => ({ ...prev, end: newEnd }))
  }

  const renderQuickSelect = () => {
    return (
      <QuickSelectPopover
        quickSelect={datepickerState.quickSelect}
        dateFormat={dateFormat}
        start={datepickerState.start}
        end={datepickerState.end}
        handleApply={applyChanges}
      />
    )
  }

  const isInvalid =
    !datepickerState.start ||
    !datepickerState.end ||
    !datemath.parse(datepickerState.start)?.isValid() ||
    !datemath.parse(datepickerState.end)?.isValid() ||
    datemath.parse(datepickerState.start)?.isAfter(datemath.parse(datepickerState.end))

  return (
    <TimeOptionsProvider recentlyUsedOptions={recentlyUsedOptions}>
      <div style={{ display: 'flex', gap: '4px', justifyContent: 'stretch' }}>
        <DelimitedFormControl
          isInvalid={isInvalid}
          compressed={compressed}
          append={renderQuickSelect()}
          startControl={
            <DatepickerSelectPopover
              timeFormat={timeFormat}
              quickSelect={datepickerState.quickSelect}
              dateFormat={dateFormat}
              updateValue={updateStart}
              value={datepickerState.start}
            />
          }
          endControl={
            <DatepickerSelectPopover
              timeFormat={timeFormat}
              quickSelect={datepickerState.quickSelect}
              dateFormat={dateFormat}
              updateValue={updateEnd}
              value={datepickerState.end}
              roundUp
            />
          }
        />
        <Button
          size={compressed ? 'm' : 'l'}
          disabled={isInvalid}
          onClick={() => applyChanges({ start: datepickerState.start, end: datepickerState.end })}
        >
          Apply
        </Button>
      </div>
    </TimeOptionsProvider>
  )
}

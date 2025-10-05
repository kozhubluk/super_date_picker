import { Option } from '../../form/select/Select'

export type TimeUnit = 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'

export enum TimeDirection {
  LAST = 'Last',
  NEXT = 'Next',
}

export interface QuickSelect {
  unit: TimeUnit
  value: number
  direction: TimeDirection
}

export interface SuperDatePickerState {
  start?: string
  end?: string
  quickSelect?: QuickSelect
}

export interface onTimeChangeProps {
  start: string
  end: string
}

export interface onApplyClickProps extends onTimeChangeProps {
  quickSelect?: QuickSelect
}

export interface startEndOption {
  start: string
  end: string
  name?: string
}

export interface TimeOptions {
  timeUnitOptions: Option<TimeUnit>[]
  timeDirectionOptions: Option<TimeDirection>[]
  commonUsedOptions: startEndOption[]
  recentlyUsedOptions?: startEndOption[]
}

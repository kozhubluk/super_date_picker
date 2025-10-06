import { createContext, ReactNode, useContext } from 'react'
import { RelativeTimeUnit, startEndOption, TimeDirection, TimeOptions, TimeUnit } from './types'
import { Option } from '../../form/select/Select'

const TimeOptionsContext = createContext<TimeOptions>({
  timeDirectionOptions: [],
  timeUnitOptions: [],
  commonUsedOptions: [],
  relativeUnitOptions: [],
})

// Quick select panel options

const timeUnitOptions: Option<TimeUnit>[] = [
  { value: 's', name: 'Seconds' },
  { value: 'm', name: 'Minutes' },
  { value: 'h', name: 'Hours' },
  { value: 'd', name: 'Days' },
  { value: 'w', name: 'Weeks' },
  { value: 'M', name: 'Months' },
  { value: 'y', name: 'Years' },
]

const timeDirectionOptions: Option<TimeDirection>[] = [
  { value: TimeDirection.LAST, name: 'Last' },
  { value: TimeDirection.NEXT, name: 'Next' },
]

// Common used panel options

export const commonUsedOptions: startEndOption[] = [
  { name: 'Today', start: 'now/d', end: 'now/d' },
  { name: 'This week', start: 'now/w', end: 'now/w' },
  { name: 'This month', start: 'now/M', end: 'now/M' },
  { name: 'This year', start: 'now/y', end: 'now/y' },
  { name: 'Yesterday', start: 'now-1d/d', end: 'now-1d/d' },
  { name: 'Week to date', start: 'now/w', end: 'now' },
  { name: 'Month to date', start: 'now/m', end: 'now' },
  { name: 'Year to date', start: 'now/y', end: 'now' },
]

// relative options

export const relativeUnitOptions: Option<RelativeTimeUnit>[] = [
  { value: '+s', name: 'Seconds ago' },
  { value: '+m', name: 'Minutes ago' },
  { value: '+h', name: 'Hours ago' },
  { value: '+d', name: 'Days ago' },
  { value: '+w', name: 'Weeks ago' },
  { value: '+M', name: 'Months ago' },
  { value: '+y', name: 'Years ago' },
  { value: '-s', name: 'Seconds from now' },
  { value: '-m', name: 'Minutes from now' },
  { value: '-h', name: 'Hours from now' },
  { value: '-d', name: 'Days from now' },
  { value: '-w', name: 'Weeks from now' },
  { value: '-M', name: 'Months from now' },
  { value: '-y', name: 'Years from now' },
]

export const TimeOptionsProvider = ({
  children,
  recentlyUsedOptions,
}: {
  children: ReactNode
  recentlyUsedOptions?: startEndOption[]
}) => {
  return (
    <TimeOptionsContext.Provider
      value={{ timeUnitOptions, timeDirectionOptions, commonUsedOptions, recentlyUsedOptions, relativeUnitOptions }}
    >
      {children}
    </TimeOptionsContext.Provider>
  )
}

export const useTimeOptions = () => {
  const timeOptions = useContext(TimeOptionsContext)

  return timeOptions
}

import { QuickSelect, TimeDirection, TimeUnit } from './types'

// TODO: парсинг из формата relative date
export const parseQuickSelect = (start?: string, end?: string): QuickSelect => {
  const defaultValue = {
    unit: 'm' as TimeUnit,
    value: 15,
    direction: TimeDirection.LAST,
  }

  return defaultValue
}

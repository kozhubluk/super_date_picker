import moment from 'moment'
import { MIN_SECONDS_TO_SHOW, ROUND_LIMIT, unitMap, unitNames } from './constants'
import { QuickSelect, RelativeTimeUnit, TimeDirection, TimeUnit } from './types'
import datemath from '@elastic/datemath'

export const parseQuickSelect = (start?: string, end?: string): QuickSelect => {
  const defaultValue = {
    unit: 'm' as TimeUnit,
    value: 15,
    direction: TimeDirection.LAST,
  }
  return defaultValue
}

export const parseRelative = (date?: string): { relativeTimeUnit: RelativeTimeUnit; count: number } => {
  const defaultValue = {
    relativeTimeUnit: '-m' as RelativeTimeUnit,
    count: 15,
  }

  if (!date) return defaultValue

  const match = date
    .trim()
    .replace(/\/[smhdwMy]$/, '')
    .match(/^now(?:(?:([+-])(?:(\d+)?([smhdwMy]))?)?)?$/)

  if (!match) return defaultValue

  let sign = match[1]
  let num = match[2]
  let unit = match[3] || 's'

  if (!num) num = sign ? '1' : '0'
  if (!sign) sign = '-'

  const count = num ? parseInt(num) : 0
  const relativeTimeUnit = (sign + unit) as RelativeTimeUnit

  return { relativeTimeUnit, count }
}

export const relativeUnitToDatemath = (date: string, count: number, isRound: boolean = false): string => {
  const [, sign = '-', unit = 'm'] = date.match(/([+-])([smhdwMy])/) || []

  if (count <= 0) return isRound ? `now/${unit}` : 'now'
  return `now${sign}${count}${unit}${isRound ? `/${unit}` : ''}`
}

// "Красивая дата"
export function formatPrettyDate(value: string, dateFormat: string, roundUp: boolean = false): string {
  if (value === 'now') return 'now'

  // 1-й вариант: строка пришла в iso формате
  const isoMoment = moment(value, moment.ISO_8601, true)
  if (isoMoment.isValid()) {
    return isoMoment.format(dateFormat)
  }

  // 2-й вариант: в формате datemath
  const parsed = datemath.parse(value, { roundUp })
  if (!parsed) return value

  const now = moment()
  const diffSec = parsed.diff(now, 'seconds')
  const isFuture = diffSec > 0
  const totalSec = Math.abs(diffSec)

  const softRound = (val: number) => (val - Math.floor(val) >= ROUND_LIMIT ? Math.ceil(val) : Math.floor(val))

  const valueStr = Object.entries(unitMap).reduce<string>((acc, [u, sec]) => {
    const exact = totalSec / sec
    if (exact < ROUND_LIMIT) return acc

    const rounded = softRound(exact)
    const unitName = unitNames[u]

    if (unitName === 'second' && rounded < MIN_SECONDS_TO_SHOW) return 'a few seconds'
    if (rounded === 1) {
      const article = /^[aeiou]/.test(unitName) ? 'an' : 'a'
      return `${article} ${unitName}`
    }

    return `${rounded || 0} ${unitName}${rounded > 1 ? 's' : ''}`
  }, 'a few seconds')

  return isFuture ? `In ${valueStr}` : `${valueStr} ago`
}

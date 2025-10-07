import { startEndOption } from './types'

export const unitMap: Record<string, number> = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400,
  w: 604800,
  M: 2592000,
  y: 31536000,
}

export const unitNames: Record<string, string> = {
  s: 'second',
  m: 'minute',
  h: 'hour',
  d: 'day',
  w: 'week',
  M: 'month',
  y: 'year',
}

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

export const ROUND_LIMIT = 0.75
export const MIN_SECONDS_TO_SHOW = 30

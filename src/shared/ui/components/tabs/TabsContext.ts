import { createContext } from 'react'

export interface TabsContextValues {
  expand: boolean
  size: 's' | 'm' | 'l'
}

export const contextDefaults: TabsContextValues = {
  expand: false,
  size: 'm',
}

export const TabsContext = createContext<TabsContextValues>(contextDefaults)

/** @jsxImportSource @emotion/react */

import { ReactNode } from 'react'
import { tabsStyles as styles } from './tabs.styles'
import { TabsContext } from './TabsContext'

export interface TabsProps {
  children?: ReactNode
  size?: 's' | 'm' | 'l'
  borderBottom?: boolean
  expand?: boolean
}

export const Tabs = ({ children, size = 'm', borderBottom = true, expand = false }: TabsProps) => {
  const tabsCss = [styles.base, borderBottom && styles.borderBottom, styles.sizes[size], expand && styles.expand]

  return (
    <TabsContext.Provider value={{ size, expand }}>
      <div css={tabsCss}>{children}</div>
    </TabsContext.Provider>
  )
}

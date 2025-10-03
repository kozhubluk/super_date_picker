/** @jsxImportSource @emotion/react */

import { ReactNode, useContext } from 'react'
import { TabsContext } from './TabsContext'
import { tabStyles as styles } from './tab.styles'

export interface TabProps {
  children?: ReactNode
  isSelected?: boolean
  onClick?: () => void
}

export const Tab = ({ children, isSelected = false, onClick }: TabProps) => {
  const { expand, size } = useContext(TabsContext)
  const tabCss = [styles.base, isSelected && styles.isSelected, styles.sizes[size], expand && styles.expand]

  return (
    <button css={tabCss} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

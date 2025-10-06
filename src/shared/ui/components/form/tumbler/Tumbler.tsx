/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { tumblerStyles } from './Tumbler.styles'

interface TumblerProps {
  state?: boolean
  onClick?: () => void
}

export const Tumbler = ({ state = true, onClick }: TumblerProps) => {
  const tumblerCss = css([tumblerStyles.tumbler, !!state && tumblerStyles.active])

  return (
    <div onClick={onClick} css={tumblerCss}>
      <button></button>
    </div>
  )
}

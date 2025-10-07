/** @jsxImportSource @emotion/react */

import { Button } from '../../../button'
import { TextComponent } from '../../../text_component/TextComponent'
import { datepickerSelectStyles } from './datepicker_select.styles'

const NOW_TEXT =
  'Setting the time to "now" means that on every refresh this time will be set to the time of the refresh.'

export const NowTab = ({ updateValue }: { updateValue?: (value: string) => void }) => {
  return (
    <div css={datepickerSelectStyles.tab} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <TextComponent size="m" color="secondary" weight="light" text={NOW_TEXT} />
      <Button
        onClick={() => {
          updateValue?.('now')
        }}
      >
        Now
      </Button>
    </div>
  )
}

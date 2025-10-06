import { Button } from '../../../button'
import { TextComponent } from '../../../text_component/TextComponent'

const NOW_TEXT =
  'Setting the time to "now" means that on every refresh this time will be set to the time of the refresh.'

export const NowTab = ({ updateValue }: { updateValue?: (value: string) => void }) => {
  return (
    <div>
      <TextComponent size="s" color="secondary" weight="light" text={NOW_TEXT} />
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

import { Button } from '../../button'
import { TextComponent } from '../../text_component/TextComponent'
import { useTimeOptions } from './TimeOptionsContext'
import { onApplyClickProps } from './types'

interface CommonUsedProps {
  handleApply?: (quickSelect: onApplyClickProps) => void
}

export const CommonUsed = ({ handleApply }: CommonUsedProps) => {
  const { commonUsedOptions } = useTimeOptions()
  return (
    <div>
      <TextComponent weight="medium" text="Common used" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {commonUsedOptions.map(({ name, start, end }) => (
          <div>
            <Button
              isLink
              onClick={() => {
                handleApply?.({ start, end })
              }}
            >
              {name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

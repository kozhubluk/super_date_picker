import { Button } from '../../button'
import { TextComponent } from '../../text_component/TextComponent'
import { useTimeOptions } from './TimeOptionsContext'
import { onApplyClickProps } from './types'

interface CommonUsedProps {
  handleApply?: (quickSelect: onApplyClickProps) => void
  closePopover?: () => void
}

export const CommonUsed = ({ handleApply, closePopover }: CommonUsedProps) => {
  const { commonUsedOptions } = useTimeOptions()
  return (
    <div>
      <TextComponent weight="medium" text="Common used" style={{ marginBottom: '4px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {commonUsedOptions.map(({ name, start, end }, index) => (
          <div key={index}>
            <Button
              isLink
              onClick={() => {
                handleApply?.({ start, end })
                closePopover?.()
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

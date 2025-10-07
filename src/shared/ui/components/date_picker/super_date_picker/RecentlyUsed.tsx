import { Button } from '../../button'
import { TextComponent } from '../../text_component/TextComponent'
import { formatPrettyDate } from './datepickerUtils'
import { useTimeOptions } from './TimeOptionsContext'
import { onApplyClickProps } from './types'

interface ResentlyUsedProps {
  handleApply?: (quickSelect: onApplyClickProps) => void
  closePopover?: () => void
  dateFormat: string
}

export const ResentlyUsed = ({ handleApply, dateFormat, closePopover }: ResentlyUsedProps) => {
  const { recentlyUsedOptions } = useTimeOptions()
  return (
    <div>
      <TextComponent weight="medium" text="Recently used date ranges" style={{ marginBottom: '4px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
        {recentlyUsedOptions?.map(({ start, end }, index) => (
          <div key={index}>
            <Button
              isLink
              onClick={() => {
                handleApply?.({ start, end })
                closePopover?.()
              }}
            >
              {`${formatPrettyDate(start, dateFormat, false)} ${formatPrettyDate(end, dateFormat, true)}`}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

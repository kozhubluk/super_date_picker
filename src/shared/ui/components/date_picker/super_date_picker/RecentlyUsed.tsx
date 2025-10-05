import { Button } from '../../button'
import { TextComponent } from '../../text_component/TextComponent'
import { useTimeOptions } from './TimeOptionsContext'
import { onApplyClickProps } from './types'

interface ResentlyUsedProps {
  handleApply?: (quickSelect: onApplyClickProps) => void
}

export const ResentlyUsed = ({ handleApply }: ResentlyUsedProps) => {
  const { recentlyUsedOptions } = useTimeOptions()
  return (
    <div>
      <TextComponent weight="medium" text="Recently used date ranges" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
        {recentlyUsedOptions?.map(({ start, end }) => (
          <div>
            <Button
              isLink
              onClick={() => {
                handleApply?.({ start, end })
              }}
            >
              {/* // TODO: добавить на вывод перевод в "красивый" формат */}
              {`${start} ${end}`}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

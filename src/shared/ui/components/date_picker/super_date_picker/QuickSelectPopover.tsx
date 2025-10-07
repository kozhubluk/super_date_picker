import { Calendar, ChevronDown } from 'lucide-react'
import { TooltipPopover } from '../../popover'
import { QuickSelect } from './QuickSelect'
import { onApplyClickProps, QuickSelect as QuickSelectType } from './types'
import { CommonUsed } from './CommonUsed'
import { ResentlyUsed } from './RecentlyUsed'
import { useState } from 'react'

interface QuickSelectPopoverProps {
  start?: string
  end?: string
  quickSelect?: QuickSelectType
  handleApply?: (time: onApplyClickProps) => void
  dateFormat: string
}

interface QuickSelectPanelProps extends QuickSelectPopoverProps {
  closePopover?: () => void
}

export const QuickSelectPopover = (props: QuickSelectPopoverProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const closePopover = () => {
    setIsOpen(false)
  }

  const quickSelectButton = (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%', padding: '0 8px', cursor: 'pointer' }}>
      <Calendar width={18} height={18} style={{ cursor: 'pointer' }} />
      <ChevronDown width={18} height={18} style={{ cursor: 'pointer' }} />
    </div>
  )

  return (
    <TooltipPopover isOpen={isOpen} setIsOpen={setIsOpen} button={quickSelectButton}>
      <QuickeSelectPanel {...props} closePopover={closePopover} />
    </TooltipPopover>
  )
}

const QuickeSelectPanel = ({
  start,
  end,
  handleApply,
  dateFormat,
  quickSelect,
  closePopover,
}: QuickSelectPanelProps) => {
  return (
    <div style={{ padding: '8px', width: '340px', display: 'grid', gap: '12px' }}>
      <QuickSelect
        closePopover={closePopover}
        quickSelect={quickSelect}
        start={start}
        end={end}
        handleApply={handleApply}
      />
      <CommonUsed handleApply={handleApply} closePopover={closePopover} />
      <ResentlyUsed dateFormat={dateFormat} handleApply={handleApply} closePopover={closePopover} />
    </div>
  )
}

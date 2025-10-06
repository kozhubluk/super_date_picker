import { Calendar, ChevronDown } from 'lucide-react'
import { TooltipPopover } from '../../popover'
import { QuickSelect } from './QuickSelect'
import { onApplyClickProps, QuickSelect as QuickSelectType } from './types'
import { CommonUsed } from './CommonUsed'
import { ResentlyUsed } from './RecentlyUsed'

interface QuickSelectPopoverProps {
  start?: string
  end?: string
  quickSelect?: QuickSelectType
  handleApply?: (time: onApplyClickProps) => void
}

interface QuickSelectPanelProps extends QuickSelectPopoverProps {}

export const QuickSelectPopover = (props: QuickSelectPopoverProps) => {
  const quickSelectButton = (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%', padding: '0 8px', cursor: 'pointer' }}>
      <Calendar width={18} height={18} style={{ cursor: 'pointer' }} />
      <ChevronDown width={18} height={18} style={{ cursor: 'pointer' }} />
    </div>
  )

  return (
    <TooltipPopover button={quickSelectButton}>
      <QuickeSelectPanel {...props} />
    </TooltipPopover>
  )
}

const QuickeSelectPanel = ({ start, end, handleApply }: QuickSelectPanelProps) => {
  return (
    <div style={{ padding: '8px', minWidth: '200px' }}>
      <QuickSelect start={start} end={end} handleApply={handleApply} />
      <CommonUsed handleApply={handleApply} />
      <ResentlyUsed handleApply={handleApply} />
    </div>
  )
}

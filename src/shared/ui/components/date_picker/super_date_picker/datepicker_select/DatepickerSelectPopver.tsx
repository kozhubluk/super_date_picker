import { useMemo, useState } from 'react'
import { TooltipPopover } from '../../../popover'
import { Tabs } from '../../../tabs'
import { Tab } from '../../../tabs/Tab'
import { AbsoluteTab } from './AbsoluteTab'
import { RelativeTab } from './RelativeTab'
import { NowTab } from './NowTab'

interface DatepickerSelectPopoverProps {
  value?: string
  roundUp?: boolean
  updateValue?: (value: string) => void
}

export const DatepickerSelectPopover = ({ value, roundUp, updateValue }: DatepickerSelectPopoverProps) => {
  const tabs = useMemo(
    () => [
      { id: 'absolute', name: 'Absolute', content: <AbsoluteTab roundUp={roundUp} value={value} /> },
      { id: 'relative', name: 'Relative', content: <RelativeTab roundUp={roundUp} value={value} /> },
      { id: 'now', name: 'Now', content: <NowTab updateValue={updateValue} /> },
    ],
    [roundUp, updateValue, value],
  )

  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0].id)
  const selectedTabContent = useMemo(() => tabs.find((tab) => tab.id === selectedTabId)?.content, [selectedTabId, tabs])

  const popoverButton = <input readOnly value={value} />

  return (
    <TooltipPopover button={popoverButton}>
      <div style={{ minWidth: '300px' }}>
        <Tabs expand>
          {tabs.map(({ id, name }) => (
            <Tab
              key={id}
              isSelected={id === selectedTabId}
              onClick={() => {
                setSelectedTabId(id)
              }}
            >
              {name}
            </Tab>
          ))}
        </Tabs>
        <div>{selectedTabContent}</div>
      </div>
    </TooltipPopover>
  )
}

import { useMemo, useState } from 'react'
import { TooltipPopover } from '../../../popover'
import { Tabs } from '../../../tabs'
import { Tab } from '../../../tabs/Tab'
import { AbsoluteTab } from './AbsoluteTab'
import { RelativeTab } from './RelativeTab'
import { NowTab } from './NowTab'
import { formatPrettyDate } from '../datepickerUtils'
import { QuickSelect } from '../types'

interface DatepickerSelectPopoverProps {
  value?: string
  roundUp?: boolean
  dateFormat?: string
  timeFormat?: string
  quickSelect?: QuickSelect
  updateValue?: (value: string) => void
}

export const DatepickerSelectPopover = ({
  value,
  roundUp,
  updateValue,
  quickSelect,
  dateFormat = 'MMM D, YYYY @ HH:mm:ss.SSS',
  timeFormat = 'HH:mm',
}: DatepickerSelectPopoverProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const tabs = useMemo(
    () => [
      {
        id: 'absolute',
        name: 'Absolute',
        content: (
          <AbsoluteTab
            dateFormat={dateFormat}
            timeFormat={timeFormat}
            roundUp={roundUp}
            value={value}
            updateValue={updateValue}
          />
        ),
      },
      {
        id: 'relative',
        name: 'Relative',
        content: (
          <RelativeTab
            quickSelect={quickSelect}
            roundUp={roundUp}
            value={value}
            updateValue={updateValue}
            dateFormat={dateFormat}
          />
        ),
      },
      { id: 'now', name: 'Now', content: <NowTab updateValue={updateValue} /> },
    ],
    [dateFormat, quickSelect, roundUp, updateValue, value],
  )

  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0].id)
  const selectedTabContent = useMemo(() => tabs.find((tab) => tab.id === selectedTabId)?.content, [selectedTabId, tabs])

  const popoverButton = <input readOnly value={value ? formatPrettyDate(value, dateFormat, roundUp) : ''} />

  return (
    <TooltipPopover isOpen={isOpen} setIsOpen={setIsOpen} button={popoverButton}>
      <div style={{ width: '330px' }}>
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

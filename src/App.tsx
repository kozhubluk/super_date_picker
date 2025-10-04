import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css' // можно убрать, если полностью кастомишь стили
import { DatePicker } from './shared/ui/components/date_picker'
import { Tabs } from './shared/ui/components/tabs'
import { Tab } from './shared/ui/components/tabs/Tab'
import { FormControl } from './shared/ui/components/form/FormControl'
import { Select } from './shared/ui/components/form/select/Select'

const App: React.FC = () => {
  return (
    <div style={{ padding: 50 }}>
      <DatePicker />
      <div style={{ width: '300px', height: '300px' }}>
        <Tabs>
          <Tab>12</Tab>
          <Tab isSelected>234</Tab>
          <Tab>4234</Tab>
          <Tab>4234</Tab>
        </Tabs>
        <div>-</div>
      </div>
    </div>
  )
}

export default App

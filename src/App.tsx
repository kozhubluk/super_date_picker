import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css' // можно убрать, если полностью кастомишь стили
import { DatePicker } from './shared/ui/components/date_picker'
import { Tabs } from './shared/ui/components/tabs'
import { Tab } from './shared/ui/components/tabs/Tab'

const App: React.FC = () => {
  return (
    <div style={{ padding: 50, backgroundColor: 'red' }}>
      <DatePicker />
      <div style={{ width: '300px', height: '300px' }}>
        <Tabs expand>
          <Tab>12</Tab>
          <Tab isSelected>234</Tab>
          <Tab>4234</Tab>
          <Tab>4234</Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default App

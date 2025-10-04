import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css' // можно убрать, если полностью кастомишь стили
import { DatePicker } from './shared/ui/components/date_picker'
import { Tabs } from './shared/ui/components/tabs'
import { Tab } from './shared/ui/components/tabs/Tab'
import { FormControl } from './shared/ui/components/form/FormControl'

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
        <FormControl isInvalid isDisabled append={<div>sdfsd</div>}>
          <select />
        </FormControl>
        <div>-</div>

        <FormControl compressed isInvalid append={<div>sdfsd</div>} prepend={<div>sdfsdf</div>}>
          <button />
        </FormControl>
        <div>-</div>

        <FormControl isInvalid append={<div>sdfsd</div>} prepend={<div>sdfsdf</div>}>
          <button />
        </FormControl>
        <FormControl isInvalid append={<div>sdfsd</div>} prepend={<div>sdfsdf</div>}>
          <div>fsf</div>
        </FormControl>
      </div>
    </div>
  )
}

export default App

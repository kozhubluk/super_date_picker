import 'react-datepicker/dist/react-datepicker.css' // можно убрать, если полностью кастомишь стили
import { DatePicker } from './shared/ui/components/date_picker'
import { Tabs } from './shared/ui/components/tabs'
import { Tab } from './shared/ui/components/tabs/Tab'

const App: React.FC = () => {
  return (
    <div style={{ padding: 50 }}>
      <DatePicker />
    </div>
  )
}

export default App

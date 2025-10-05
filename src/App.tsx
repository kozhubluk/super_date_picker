import 'react-datepicker/dist/react-datepicker.css' // можно убрать, если полностью кастомишь стили
import { DatePicker } from './shared/ui/components/date_picker'
import CustomButton from './shared/ui/components/button/Button'
import { ArrowBigDown } from 'lucide-react'
import { useState } from 'react'

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  return (
    <>
      <div style={{ padding: 50 }}>
        <DatePicker showTimeSelect selected={selectedDate} onChange={(date: Date | null) => setSelectedDate(date)} />
      </div>

      <CustomButton color="red">sdf</CustomButton>
      <CustomButton color="green" size="l">
        sdf
      </CustomButton>
      <CustomButton color="primary" size="l">
        sdf
      </CustomButton>
      <CustomButton color="transparent" size="l">
        sdf
      </CustomButton>

      <CustomButton size="s">sdf</CustomButton>
    </>
  )
}

export default App

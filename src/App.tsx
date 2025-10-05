import 'react-datepicker/dist/react-datepicker.css' // можно убрать, если полностью кастомишь стили
import { DatePicker } from './shared/ui/components/date_picker'
import CustomButton from './shared/ui/components/button/Button'
import { ArrowBigDown } from 'lucide-react'

const App: React.FC = () => {
  return (
    <>
      <div style={{ padding: 50 }}>
        <DatePicker />
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

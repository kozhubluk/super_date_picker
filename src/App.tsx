import { useState } from 'react'
import { SuperDatePicker } from './shared/ui/components/date_picker/super_date_picker/SuperDatePicker'
import { onTimeChangeProps } from './shared/ui/components/date_picker/super_date_picker/types'

const App: React.FC = () => {
  const [start, setStart] = useState('now-30m')
  const [end, setEnd] = useState('now')

  const onTimeChange = ({ start, end }: onTimeChangeProps) => {
    setStart(start)
    setEnd(end)
    console.log('Time changed:', { start, end })
  }
  return (
    <>
      <SuperDatePicker
        recentlyUsedOptions={[{ start: 'now', end: 'now-12m' }]}
        start={start}
        end={end}
        onTimeChange={onTimeChange}
      />
    </>
  )
}

export default App

import { useState } from 'react'
import { SuperDatePicker } from './shared/ui/components/date_picker/super_date_picker/SuperDatePicker'
import { onTimeChangeProps } from './shared/ui/components/date_picker/super_date_picker/types'
import { Tumbler } from './shared/ui/components/form/tumbler/Tumbler'

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
      <Tumbler></Tumbler>
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

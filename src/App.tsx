import { useState } from 'react'
import { SuperDatePicker } from './shared/ui/components/date_picker'
import { onTimeChangeProps } from './shared/ui/components/date_picker/super_date_picker/types'
// import { Input } from './shared/ui/components/form'

const App: React.FC = () => {
  const [start, setStart] = useState('now-30m')
  const [end, setEnd] = useState('nlkjojoow')

  const onTimeChange = ({ start, end }: onTimeChangeProps) => {
    setStart(start)
    setEnd(end)
    console.log('Time changed:', { start, end })
  }

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* <div>
        <Input value={start} onChange={(newStart) => onTimeChange({ start: newStart, end })} />
        <Input value={end} onChange={(newEnd) => onTimeChange({ start, end: newEnd })} />
      </div> */}
      <SuperDatePicker
        recentlyUsedOptions={[{ start: 'now', end: 'now-12m' }]}
        start={start}
        end={end}
        onTimeChange={onTimeChange}
      />
    </div>
  )
}

export default App

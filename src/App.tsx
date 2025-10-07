import { useState } from 'react'
import { SuperDatePicker } from './shared/ui/components/date_picker'
import { onTimeChangeProps } from './shared/ui/components/date_picker/super_date_picker/types'
// import { Input } from './shared/ui/components/form'

const App = () => {
  const [start, setStart] = useState<string>('now')
  const [end, setEnd] = useState<string>('now+15m')

  const onTimeChange = ({ start, end }: onTimeChangeProps) => {
    setStart(start)
    setEnd(end)
    console.log('Time changed:', { start, end })
  }

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

# Super Datepicker

Super DatePicker — это реализация выбора даты и времени по аналогии с компонентом Elastic UI DatePicker, с поддержкой "datemath" выражений (now-15m, now+1d/d и т.д.), а также выбранных диапазонов.
![][https://private-user-images.githubusercontent.com/99503981/498326477-af296831-3218-4641-b627-84cb5ae2c218.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTk4NDQ4ODYsIm5iZiI6MTc1OTg0NDU4NiwicGF0aCI6Ii85OTUwMzk4MS80OTgzMjY0NzctYWYyOTY4MzEtMzIxOC00NjQxLWI2MjctODRjYjVhZTJjMjE4LlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEwMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMDA3VDEzNDMwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIyODcwMWIwYWNiMzQ5NGRkNTdiYjc2NzViNDAwNDY5ZjZiNjlkODZhOTc5NTRhNWVmZmU2MjAyNDQxMjlkOTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.67_EwR7HC67mfgamz5HfxQqjBpo3Wwz_eVVJj8hvfk8]
---

## Используемые библиотеки

- react-datepicker
- elastic/datemath-js
- Moment
- emotion/css

---

## Установка и запуск

```
git clone https://github.com/kozhubluk/super_date_picker.git
cd super_date_picker
npm install
npm start
```

## Свойства

| Свойство            | Тип                 | Значение по умолчанию          |
| ------------------- | ------------------- | ------------------------------ |
| onTimeChange        | `onTimeChangeProps` | Обязательное                   |
| start               | `string`            |                                |
| end                 | `string`            |                                |
| recentlyUsedOptions | `StartEndOption[]`  |                                |
| dateFormat          | `string`            | `'MMM D, YYYY @ HH:mm:ss.SSS'` |
| timeFormat          | `string`            | `'HH:mm'`                      |
| compressed          | `boolean`           | `false`                        |

## Пример использования

```
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
```

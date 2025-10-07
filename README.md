# Super Datepicker

Super DatePicker — это реализация выбора даты и времени по аналогии с компонентом Elastic UI DatePicker, с поддержкой "datemath" выражений (now-15m, now+1d/d и т.д.), а также выюранных диапазонов.

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

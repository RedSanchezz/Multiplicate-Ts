import '../styles/InputRangeControl.css'
interface InputRangeControlProps<T> {
  title: string
  value: T
  setValue: (value: T) => void
  range: [number, number]
  step: number
}

export const InputRangeControl = ({ title, value, setValue, range, step }: InputRangeControlProps<number>) => {
  return <div className='input-range-control'>
      <div className='input-range-control__title'>{title}</div>
      <div className='input-range-control__inputs-wrapper'>
          <input className='input-range-control__input-number'
                 min={range[0]} max={range[1]} step={step}
                 type="number" value={value}
                 onChange={(e) => { setValue(Number(e.target.value)) }}
          />
          <input className='input-range-control__input-range'
                 min={range[0]} max={range[1]} step={step}
                 type="range" value={value}
                 onChange={(e) => { setValue(Number(e.target.value)) }}
          />
      </div>
  </div>
}

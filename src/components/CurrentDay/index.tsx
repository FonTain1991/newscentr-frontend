import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { memo } from 'react'

export const CurrentDay = memo(() => {
  const day = dayjs().locale('ru').format('dddd, DD MMMM YYYY')
  return <div className='text-xs text-white leading-7'>{day}</div>
})
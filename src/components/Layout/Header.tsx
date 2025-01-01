import { memo } from 'react'
import { CurrentDay } from '../CurrentDay'

export const Header = memo(() => {
  return (
    <div className='hidden md:flex h-7 bg-neutral-800 px-4 md:px-12'>
      <CurrentDay />
    </div>
  )
})
import { memo } from 'react'
import SVGApple from '../../public/images/Apple.svg'

export const AuthApple = memo(() => {
  return (
    <div className='cursor-pointer bg-black w-12 h-12 rounded-lg flex justify-center items-center hover:shadow-lg shadow-black'>
      <SVGApple />
    </div>
  )
})
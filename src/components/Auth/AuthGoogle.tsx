import { memo } from 'react'
import SVGGoogle from '../../public/images/Google.svg'

export const AuthGoogle = memo(() => {
  return (
    <div className='cursor-pointer bg-blue-500 w-12 h-12 rounded-lg flex justify-center items-center hover:shadow-lg shadow-blue-500'>
      <SVGGoogle />
    </div>
  )
})
import { memo } from 'react'
import SVGFacebook from '../../public/images/Facebook.svg'

export const AuthFacebook = memo(() => {
  return (
    <div className='cursor-pointer bg-indigo-500 w-12 h-12 rounded-lg flex justify-center items-center hover:shadow-lg shadow-indigo-500'>
      <SVGFacebook />
    </div>
  )
})
import { memo } from 'react'
import { AuthApple } from './AuthApple'
import { AuthGoogle } from './AuthGoogle'
import { AuthFacebook } from './AuthFacebook'

export const Social = memo(() => {
  return (
    <div className='flex justify-center gap-4'>
      <AuthApple />
      <AuthGoogle />
      <AuthFacebook />
    </div>
  )
})
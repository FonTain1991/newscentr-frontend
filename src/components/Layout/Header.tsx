import { memo } from 'react'
import { SignInJoin, SignOut } from '../Auth'
import { CurrentDay } from '../CurrentDay'
import { ProfileLink } from '../Profile'

export const Header = memo(() => {
  return (
    <div className='hidden md:flex h-7 bg-neutral-800 px-4 md:px-12'>
      <CurrentDay />
      <SignInJoin />
      <div className='ml-12 text-white leading-7 cursor-pointer'>
        <ProfileLink />
        <SignOut />
      </div>
    </div>
  )
})
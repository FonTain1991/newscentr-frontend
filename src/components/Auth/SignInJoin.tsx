
'use client'

import { useUser } from '@/hooks'
import Link from 'next/link'
import { memo } from 'react'

export const SignInJoin = memo(() => {
  const user = useUser()
  if (user) {
    return null
  }

  return (
    <div className='ml-12 text-white leading-7 text-xs cursor-pointer hover:underline'>
      <Link href='/auth/sign-in'>
        Вход / Регистрация
      </Link>
    </div>
  )
})
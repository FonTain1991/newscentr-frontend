
'use client'

import { useUser } from '@/hooks'
import Link from 'next/link'
import { memo } from 'react'

export const ProfileLink = memo(() => {
  const user = useUser()

  if (!user) {
    return null
  }

  return (
    <Link href='/profile' className='hover:underline text-xs '>
      Профиль
    </Link>
  )
})
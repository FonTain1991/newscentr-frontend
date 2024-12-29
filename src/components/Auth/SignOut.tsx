'use client'

import { useSignOutMutation } from '@/gql/signOut'
import { useEvent, useUser } from '@/hooks'
import { Button } from 'antd'
import { memo } from 'react'

export const SignOut = memo(() => {
  const user = useUser()
  const [signOut, { loading }] = useSignOutMutation()

  const onSignOut = useEvent(() => {
    signOut().then(() => {
      location.replace('/')
    })
  })

  if (!user) {
    return null
  }

  return (
    <Button
      className='!text-xs'
      type='link'
      loading={loading}
      onClick={onSignOut}
    >
      Выход
    </Button>
  )
})
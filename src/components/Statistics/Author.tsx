'use client'

import { useGetPostByUrl } from '@/hooks'
import dayjs from 'dayjs'
import { memo } from 'react'

export const Author = memo(() => {
  const post = useGetPostByUrl()

  return (
    <div className='text-xss'>
      By <span className='text-green-600'>Gouranna</span> - {dayjs(post?.createdAt).format('MMMM DD, YYYY')}
    </div>
  )
})
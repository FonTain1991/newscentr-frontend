'use client'

import { useGetPostByUrl } from '@/hooks'
import dayjs from 'dayjs'
import { memo } from 'react'

export const Author = memo(() => {
  const recipe = useGetPostByUrl()

  return (
    <div className='text-xss'>
      By <span className='text-green-600'>Gouranna</span> - {dayjs(recipe?.createdAt).format('MMMM DD, YYYY')}
    </div>
  )
})
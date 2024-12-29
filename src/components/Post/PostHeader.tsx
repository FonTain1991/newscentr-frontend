'use client'

import { useGetPostByUrl } from '@/hooks'
import Link from 'next/link'
import { memo } from 'react'

export const PostHeader = memo(() => {
  const post = useGetPostByUrl()
  return (
    <div>
      <div className='flex items-center justify-center flex-col'>
        {post?.rubric && (
          <Link href={`/${post.rubric.url}`} className='bg-slate-700 text-white px-2 py-1 text-xs hover:underline'>
            {post.rubric.name}
          </Link>
        )}
        <h1 className='mt-4 text-4xl text-slate-900'>{post?.pageName}</h1>
      </div>
    </div>
  )
})
'use client'

import { useGetPostByPostCategoryUrlSuspenseQuery } from '@/gql/getPostsByPostCategoryUrl'
import { useParams } from 'next/navigation'
import { memo } from 'react'
import { Item } from './Item'

export const List = memo(() => {
  const { postCategoryUrl } = useParams()
  const { data } = useGetPostByPostCategoryUrlSuspenseQuery({
    variables: { url: String(postCategoryUrl) }
  })
  const posts = data?.getPostByPostCategoryUrl

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      {posts?.map((post: any) => (
        <Item
          key={post.id}
          {...post}
        />
      ))}
    </div>
  )
})
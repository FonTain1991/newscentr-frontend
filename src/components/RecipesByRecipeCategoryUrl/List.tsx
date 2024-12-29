'use client'

import { useGetRecipesByRecipeCategoryUrlSuspenseQuery } from '@/gql/getRecipesByRecipeCategoryUrl'
import { useParams } from 'next/navigation'
import { memo } from 'react'
import { Item } from './Item'

export const List = memo(() => {
  const { recipeCategoryUrl } = useParams()
  const { data } = useGetRecipesByRecipeCategoryUrlSuspenseQuery({
    variables: { url: String(recipeCategoryUrl) }
  })
  const recipes = data?.getRecipesByRecipeCategoryUrl
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      {recipes?.map((post: any) => (
        <Item
          key={post.id}
          {...post}
        />
      ))}
    </div>
  )
})
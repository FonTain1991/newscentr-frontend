'use client'

import { useGetCategoryByUrl } from '@/hooks'
import { memo } from 'react'

export const CategoryHeader = memo(() => {
  const category = useGetCategoryByUrl()

  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='my-4 text-4xl text-slate-900 font-bold'>{category?.name}</h1>
      {category?.text && (
        <p
          className='text-sm text-slate-900 italic'
          dangerouslySetInnerHTML={{
            __html: category.text
          }}
        />
      )}
    </div>
  )
})
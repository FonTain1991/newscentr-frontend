'use client'

import { useGetRecipeByUrl } from '@/hooks'
import Link from 'next/link'
import { memo } from 'react'

export const RecipeHeader = memo(() => {
  const recipe = useGetRecipeByUrl()
  return (
    <div>
      <div className='flex items-center justify-center flex-col'>
        {recipe?.rubric && (
          <Link href={`/${recipe.rubric.url}`} className='bg-slate-700 text-white px-2 py-1 text-xs hover:underline'>
            {recipe.rubric.name}
          </Link>
        )}
        <h1 className='mt-4 text-4xl text-slate-900'>{recipe?.pageName}</h1>
      </div>
    </div>
  )
})
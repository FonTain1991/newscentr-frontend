'use client'

import { useGetRecipeByUrl } from '@/hooks'
import dayjs from 'dayjs'
import { memo } from 'react'

export const RecipeTime = memo(() => {
  const recipe = useGetRecipeByUrl()
  return (
    <div className='border px-4 py-3 mt-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6'>
        <div className='text-sm flex items-center justify-between font-bold'>
          Активное время приготовления:
          <span className='text-base font-normal'>{dayjs(recipe?.activeCookingTime).format('HH:mm:ss')}</span>
        </div>
        <div className='text-sm flex items-center mt-3 md:mt-0 justify-between font-bold'>
          Общее время приготовления:
          <span className='text-base font-normal'>{dayjs(recipe?.totalCookingTime).format('HH:mm:ss')}</span>
        </div>
      </div>
    </div>
  )
})
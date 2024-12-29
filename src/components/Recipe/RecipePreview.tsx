'use client'

import { API_IMAGES } from '@/constants'
import { useGetRecipeByUrl } from '@/hooks'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import Image from 'next/image'
import { memo, useEffect } from 'react'

export const RecipePreview = memo(() => {
  const recipe = useGetRecipeByUrl()
  useEffect(() => {
    Fancybox.bind('[data-fancybox="fancybox"]')
  }, [])
  const src = API_IMAGES + recipe?.previewId

  return (
    <div className='relative w-full h-[212px] md:h-[331px] lg:h-[456px]'>
      <a href={src} data-fancybox='fancybox'>
        <Image
          src={src}
          alt={String(recipe?.previewAlt)}
          title={recipe?.previewTitle ? String(recipe.previewTitle) : undefined}
          fill
          className='object-cover'
        />
      </a>
    </div>
  )
})
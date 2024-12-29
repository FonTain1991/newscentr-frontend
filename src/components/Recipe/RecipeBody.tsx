'use client'

import { useGetRecipeByUrl } from '@/hooks'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { memo, useEffect } from 'react'


export const RecipeBody = memo(() => {
  const recipe = useGetRecipeByUrl()

  useEffect(() => {
    Fancybox.bind('[data-fancybox="fancybox"]')
  }, [])

  if (recipe?.text) {
    return (
      <div
        className='mt-8 post-text'
        dangerouslySetInnerHTML={{
          __html: recipe.text.replace(/<img [^>]*src="[^"]*"[^>]*>/gm, tag => {
            const [, src] = tag.split('src=')[1].split('"')
            return `<a href="${src}" data-fancybox="fancybox">${tag}</a>`
          })
        }}
      />
    )
  }
})
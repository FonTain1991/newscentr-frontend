'use client'

import { API_IMAGES } from '@/constants'
import { useGetPostByUrl, useGetRecipeByUrl } from '@/hooks'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import Image from 'next/image'
import { memo, useEffect } from 'react'

export const PostPreview = memo(() => {
  const post = useGetPostByUrl()
  useEffect(() => {
    Fancybox.bind('[data-fancybox="fancybox"]')
  }, [])
  const src = API_IMAGES + post?.previewId

  return (
    <div className='relative w-full h-[212px] md:h-[331px] lg:h-[456px]'>
      <a href={src} data-fancybox='fancybox'>
        <Image
          src={src}
          alt={String(post?.previewAlt)}
          title={post?.previewTitle ? String(post.previewTitle) : undefined}
          fill
          className='object-cover'
        />
      </a>
    </div>
  )
})
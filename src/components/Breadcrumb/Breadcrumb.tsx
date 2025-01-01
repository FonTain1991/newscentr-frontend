'use client'

import { useGetBreadcrumbSuspenseQuery } from '@/gql/getBreadcrumb'
import { Breadcrumb as ABreadcrumb } from 'antd'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { memo, useMemo } from 'react'

export const Breadcrumb = memo(() => {
  const { recipeUrl, recipeCategoryUrl, postUrl, postCategoryUrl } = useParams()

  const params = useMemo(() => {
    const p = []
    if (recipeCategoryUrl) {
      p.push(recipeCategoryUrl)
    }

    if (recipeUrl) {
      p.push(recipeUrl)
    }
    if (postCategoryUrl) {
      p.push(postCategoryUrl)
    }
    if (postUrl) {
      p.push(postUrl)
    }
    return JSON.stringify(p)
  }, [recipeCategoryUrl, recipeUrl, postUrl, postCategoryUrl])

  const { data } = useGetBreadcrumbSuspenseQuery({
    variables: {
      params
    }
  })

  const breadcrumb = data?.getBreadcrumb
  const items = useMemo(() => {
    const array = [{
      title: <Link href='/' className='text-[12px]'>Главная</Link>
    }, {
      title: breadcrumb?.post?.url
        ? <Link href={`/${breadcrumb?.category?.url}`} className='text-[12px]'>{breadcrumb?.category?.name}</Link>
        : breadcrumb?.category?.name
    }]

    if (breadcrumb?.post) {
      array.push({
        title: <span className='text-[12px]'>{breadcrumb.post.pageName}</span>
      })
    }
    return array
  }, [breadcrumb, postCategoryUrl])

  if (breadcrumb?.category === null || (breadcrumb?.post === null && recipeUrl)) {
    notFound()
  }

  return (
    <div className='flex !mb-8 h-10 items-center'>
      <ABreadcrumb items={items} />
    </div>
  )
})
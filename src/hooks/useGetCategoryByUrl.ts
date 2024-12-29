'use client'

import { useGetPostCategoryByUrlSuspenseQuery } from '@/gql/getPostCategoryByUrl'
import { notFound, useParams } from 'next/navigation'

export function useGetCategoryByUrl() {
  const { postCategoryUrl } = useParams()
  const { data } = useGetPostCategoryByUrlSuspenseQuery({
    variables: { url: String(postCategoryUrl) },
    skip: !postCategoryUrl
  })

  if (postCategoryUrl) {

    if (data?.getPostCategoryByUrl === null) {
      notFound()
    }
    return data?.getPostCategoryByUrl
  }
}
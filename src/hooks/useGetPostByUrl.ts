'use client'

import { useGetPostByUrlSuspenseQuery } from '@/gql/getPostByUrl'
import { notFound, useParams } from 'next/navigation'

export function useGetPostByUrl() {
  const { postUrl, postCategoryUrl } = useParams()
  const { data } = useGetPostByUrlSuspenseQuery({
    variables: { url: String(postUrl), postCategoryUrl: String(postCategoryUrl) }
  })

  if (data?.getPostByUrl === null) {
    notFound()
  }
  return data?.getPostByUrl
}
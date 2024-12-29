'use client'

import { useGetRecipeCategoryByUrlSuspenseQuery } from '@/gql/getRecipeCategoryByUrl'
import { notFound, useParams } from 'next/navigation'

export function useGetCategoryByUrl() {
  const { recipeCategoryUrl } = useParams()
  const { data } = useGetRecipeCategoryByUrlSuspenseQuery({
    variables: { url: String(recipeCategoryUrl) },
    skip: !recipeCategoryUrl
  })

  if (recipeCategoryUrl) {

    if (data?.getRecipeCategoryByUrl === null) {
      notFound()
    }
    return data?.getRecipeCategoryByUrl
  }
}
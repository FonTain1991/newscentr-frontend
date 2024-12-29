'use client'

import { useGetRecipeByUrlSuspenseQuery } from '@/gql/getRecipeByUrl'
import { notFound, useParams } from 'next/navigation'

export function useGetRecipeByUrl() {
  const { recipeUrl, recipeCategoryUrl } = useParams()
  const { data } = useGetRecipeByUrlSuspenseQuery({
    variables: { url: String(recipeUrl), recipeCategoryUrl: String(recipeCategoryUrl) }
  })

  if (data?.getRecipeByUrl === null) {
    notFound()
  }
  return data?.getRecipeByUrl
}
'use client'

import { useUpdateRecipeCountSeeMutation } from '@/gql/updateRecipeCountSee'
import { useGetRecipeByUrl } from '@/hooks'
import { EyeOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { useParams } from 'next/navigation'
import { memo, useEffect } from 'react'

export const Views = memo(() => {
  const { recipeUrl } = useParams()
  const recipe = useGetRecipeByUrl()
  const [action] = useUpdateRecipeCountSeeMutation()

  useEffect(() => {
    action({
      variables: {
        url: String(recipeUrl)
      }
    })
  }, [recipeUrl, action])

  return (
    <Tooltip title='Количество просмотрев'>
      <div className='flex'>
        <EyeOutlined className='text-sm' />
        <span className='text-xss ml-1'>{recipe?.countSee}</span>
      </div>
    </Tooltip>
  )
})
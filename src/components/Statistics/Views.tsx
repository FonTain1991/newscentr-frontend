'use client'

import { useGetPostByUrl } from '@/hooks'
import { EyeOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { memo } from 'react'

export const Views = memo(() => {
  // const { postUrl } = useParams()
  const post = useGetPostByUrl()
  // const [action] = useUpdateRecipeCountSeeMutation()

  // useEffect(() => {
  //   action({
  //     variables: {
  //       url: String(recipeUrl)
  //     }
  //   })
  // }, [recipeUrl, action])

  return (
    <Tooltip title='Количество просмотрев'>
      <div className='flex'>
        <EyeOutlined className='text-sm' />
        <span className='text-xss ml-1'>{post?.countSee}</span>
      </div>
    </Tooltip>
  )
})
'use client'

import { useUpdatePostCountSeeMutation } from '@/gql/updatePostCountSee'
import { useGetPostByUrl } from '@/hooks'
import { EyeOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { useParams } from 'next/navigation'
import { memo, useEffect } from 'react'

export const Views = memo(() => {
  const { postUrl } = useParams()
  const post = useGetPostByUrl()
  const [action] = useUpdatePostCountSeeMutation()

  useEffect(() => {
    action({
      variables: {
        url: String(postUrl)
      }
    })
  }, [postUrl, action])

  return (
    <Tooltip title='Количество просмотрев'>
      <div className='flex'>
        <EyeOutlined className='text-sm' />
        <span className='text-xss ml-1'>{post?.countSee}</span>
      </div>
    </Tooltip>
  )
})
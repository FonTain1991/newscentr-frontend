import { CommentOutlined, MessageOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { memo } from 'react'

export const Comments = memo(() => {
  return (
    <Tooltip title='Количество комментариев'>
      <div className='flex'>
        <CommentOutlined className='text-sm' />
        <span className='text-xss ml-1'>435</span>
      </div>
    </Tooltip>
  )
})
'use client'

import { memo } from 'react'
import { PostCategory } from '../PostCategory'

export const Sidebar = memo(() => {
  return (
    <div>
      <div className='sticky top-0 w-full'>
        {/* <SidebarBlockTitle title='Категории' className='mb-4' /> */}
        <PostCategory />
      </div>
    </div>
  )
})
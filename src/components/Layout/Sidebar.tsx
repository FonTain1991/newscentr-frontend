'use client'

import { memo } from 'react'
import { PostCategory } from '../PostCategory'
import { SidebarBlockTitle } from './SidebarBlockTitle'

export const Sidebar = memo(() => {
  return (
    <div>
      <div className='sticky top-0 w-full'>
        {/* <StayConnected /> */}
        <SidebarBlockTitle title='Категории' className='mb-4' />
        <PostCategory />
      </div>
    </div>
  )
})
'use client'

import { Tabs } from 'antd'
import { useParams } from 'next/navigation'
import { memo, useEffect, useState } from 'react'
import { PostCategory } from '../PostCategory'
import { RecipeCategory } from '../RecipeCategory'
import { SidebarBlockTitle } from './SidebarBlockTitle'

const items = [
  {
    key: '1',
    label: 'Рецепты',
    children: <RecipeCategory />,
    forceRender: true
  },
  {
    key: '2',
    label: 'Блог',
    children: <PostCategory />,
    forceRender: true
  }
]

export const Sidebar = memo(() => {
  const { postCategoryUrl } = useParams()
  const [activeTab, setActiveTab] = useState<string>(postCategoryUrl ? '2' : '1')

  useEffect(() => {
    if (postCategoryUrl) {
      setActiveTab(postCategoryUrl ? '2' : '1')
    }
  }, [postCategoryUrl])

  return (
    <div>
      <div className='sticky top-0 w-full'>
        {/* <StayConnected /> */}
        <SidebarBlockTitle title='Категории' className='mb-4' />
        <Tabs
          activeKey={String(activeTab)}
          defaultActiveKey='1'
          items={items}
          onChange={setActiveTab}
        />
      </div>
    </div>
  )
})
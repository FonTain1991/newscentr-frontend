'use client'

import { useGetRecipeCategoriesSuspenseQuery } from '@/gql/getRecipeCategories'
import { ConfigProvider, Menu } from 'antd'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { memo, useMemo } from 'react'
import { SidebarBlockTitle } from '../Layout/SidebarBlockTitle'

export const List = memo(() => {
  const { data } = useGetRecipeCategoriesSuspenseQuery()
  const categories = data?.getRecipeCategories

  const { recipeCategoryUrl } = useParams()

  const parentKey = useMemo(() => {
    return categories?.find(c => c.children.find(v => v.url === recipeCategoryUrl))?.url
  }, [recipeCategoryUrl, categories])

  const menuItems = useMemo(() => {
    return categories?.map(menu => {
      return {
        key: menu.url,
        label: (
          <Link
            href={`/${menu.url}`}
            className={`hover:underline ${[parentKey, recipeCategoryUrl].includes(menu.url) ? 'text-blue' : 'text-black'}`}
          >{menu.name}</Link>
        ),
        children: menu.children.map((subMenu => {
          return {
            key: subMenu.url,
            label: (
              <Link
                href={`/${subMenu.url}`}
                className={`hover:underline ${recipeCategoryUrl === menu.url ? 'text-blue' : 'text-black'}`}
              >{subMenu.name}</Link>
            )
          }
        }))
      }
    })
  }, [categories, recipeCategoryUrl, parentKey])

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            activeBarBorderWidth: 0,
            itemHoverBg: 'transparent',
            itemActiveBg: 'transparent',
            subMenuItemBg: 'transparent'
          }
        }
      }}
    >
      <Menu
        items={menuItems}
        mode='inline'
        defaultSelectedKeys={[String(recipeCategoryUrl)]}
        defaultOpenKeys={[String(parentKey), String(recipeCategoryUrl)]}
        forceSubMenuRender
      />
    </ConfigProvider>
  )
})
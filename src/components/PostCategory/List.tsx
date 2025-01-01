'use client'

import { useGetPostCategoriesSuspenseQuery } from '@/gql/getPostCategories'
import { ConfigProvider, Menu } from 'antd'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { memo, useMemo } from 'react'

export const List = memo(() => {
  const { data } = useGetPostCategoriesSuspenseQuery()
  const categories = data?.getPostCategories
  const { postCategoryUrl } = useParams()

  const parentKey = useMemo(() => {
    return categories?.find(c => c.children?.find(v => v.url === postCategoryUrl))?.url
  }, [postCategoryUrl, categories])

  const menuItems = useMemo(() => {
    return categories?.map(menu => {
      return {
        key: menu.url,
        label: (
          <Link
            href={`/${menu.url}`}
            className={`hover:underline ${[parentKey, postCategoryUrl].includes(menu.url) ? 'text-blue' : 'text-black'}`}
          >{menu.name}</Link>
        ),
        children: menu.children?.map((subMenu => {
          return {
            key: subMenu.url,
            label: (
              <Link
                href={`/${subMenu.url}`}
                className={`hover:underline ${postCategoryUrl === menu.url ? 'text-blue' : 'text-black'}`}
              >{subMenu.name}</Link>
            )
          }
        }))
      }
    })
  }, [categories, postCategoryUrl, parentKey])

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
        defaultSelectedKeys={[String(postCategoryUrl)]}
        defaultOpenKeys={[String(parentKey), String(postCategoryUrl)]}
        forceSubMenuRender
      />
    </ConfigProvider>
  )
})
'use client'

import { useGetCountPostsSuspenseQuery } from '@/gql/getCountPosts'
import { useGetLatestPostsSuspenseQuery } from '@/gql/getLatestPosts'
import { useEvent } from '@/hooks'
import { Button } from 'antd'
import { memo } from 'react'
import { Item } from './Item'

export const List = memo(() => {
  const { data, fetchMore } = useGetLatestPostsSuspenseQuery()
  const list = data?.getLatestPosts

  const { data: dataCount } = useGetCountPostsSuspenseQuery()
  const total = dataCount?.getCountPosts?.total

  const onMoreData = useEvent(async () => {
    await fetchMore({
      variables: {
        cursor: list?.[list?.length - 1]?.id
      }
    })
  })

  return (
    <>
      <div className='mb-6'>
        <h4 className='text-sm md:text-base px-3 pt-2 pb-1 w-max bg-blue-500'>
          <span className='text-white leading-5 uppercase'>Последние блоги</span>
        </h4>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {list?.map((post: any) => (
          <Item
            key={post.id}
            {...post}
          />
        ))}
      </div>
      {total !== list?.length && (
        <div className='my-4 flex justify-center'>
          <Button
            onClick={onMoreData}
          >
            Показать еще
          </Button>
        </div>
      )}
    </>
  )
})
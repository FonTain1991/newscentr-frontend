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
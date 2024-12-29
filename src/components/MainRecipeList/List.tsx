import { IListItem } from '@/types/IListItem'
import { memo } from 'react'
import { Item } from './Item'
import { CLASSES } from './constants'

interface IList {
  color: string;
  h4: string;
  className?: string
  data: IListItem[]
}

export const List = memo((props: IList) => {
  const { color, h4, className, data } = props
  return (
    <div className={className}>
      <div className='mb-6'>
        <h4 className={`text-sm md:text-base px-3 pt-2 pb-1 w-max ${CLASSES.bg[color].value}`}>
          <span className='text-white leading-5 uppercase'>{h4}</span>
        </h4>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-5 gap-x-4'>
        {data.map(post => (
          <Item
            key={post.id}
            color={color}
            {...post}
          />
        ))}
      </div>
    </div>
  )
})
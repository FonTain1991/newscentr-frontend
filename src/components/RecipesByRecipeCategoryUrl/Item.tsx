import { API_IMAGES } from '@/constants'
import { IListItem } from '@/types/IListItem'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

export const Item = memo((props: IListItem) => {
  const { url, pageName, previewId, rubric } = props
  const href = `${rubric.url}/${url}`
  return (
    <div className='group/item mb-4 md:mb-0'>
      <div className='relative'>
        <Link
          href={href}
          title={pageName}
        >
          <Image
            src={API_IMAGES + previewId}
            alt={pageName}
            width={324}
            height={160}
            className='w-full'
          />
        </Link>
        <div className='sm:block md:hidden absolute start-0 bottom-0 bg-gray-900/80 px-1 group-hover/item:bg-green-500 transition duration-500'>
          <Link href={rubric.url} className='text-[12px] text-white'>{rubric.name}</Link>
        </div>
      </div>
      <Link href={rubric.url} className='text-green-500 hidden md:block text-xs sm:text-xs my-1.5'>{rubric.name}</Link>
      <h3 className='leading-none mt-1 md:mt-0'>
        <Link className={'text-lg lg:text-xl group-hover/item:text-green-500'} href={href}>{pageName}</Link>
      </h3>
    </div>
  )
})
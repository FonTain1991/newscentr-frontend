import { IListItem } from '@/types/IListItem'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import { CLASSES } from './constants'

interface IItem extends IListItem {
  color: string;
}

export const Item = memo((props: IItem) => {
  const { url, color, pageName, previewId, rubric } = props

  return (
    <div className='group/item mb-4 md:mb-0 flex md:block'>
      <div className='relative mr-4 md:mr-0'>
        <Link
          href={url}
          title={pageName}
          className='w-24 md:w-auto block'
        >
          <Image
            src={previewId}
            alt={pageName}
            width={218}
            height={150}
            className='w-full'
          />
        </Link>
        <div className={`sm:block md:hidden absolute start-0 bottom-0 leading-3 bg-gray-900/80 px-1 ${CLASSES.bg[color]?.hover} transition duration-500`}>
          <Link href='#1' className='text-[9px] leading-[10px] text-white'>{rubric.name}</Link>
        </div>
      </div>
      <Link href='#' className={`${CLASSES.text[color]?.value} hidden md:block text-xs sm:text-xs my-1.5`}>{rubric.name}</Link>
      <h3 className='leading-none mt-1 md:mt-0'>
        <Link className={`text-sm md:text-sm lg:text-base ${CLASSES.text[color]?.groupHover}`} href={url}>{pageName}</Link>
      </h3>
    </div>
  )
})
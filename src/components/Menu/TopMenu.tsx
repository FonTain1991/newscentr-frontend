import Link from 'next/link'
import { memo } from 'react'

export const TopMenu = memo(() => {
  return (
    <div className='hidden px-4 md:px-12 h-12 bg-white md:flex items-center'>
      <Link href='/' className='font-bold'>
        Главная
      </Link>
    </div>
  )
})
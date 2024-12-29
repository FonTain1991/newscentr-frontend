import { memo } from 'react'

export const Footer = memo(() => {
  return (
    <div className='flex h-7 bg-neutral-800 px-4 md:px-12 text-white text-sm items-center'>
      © Gouranna
    </div>
  )
})
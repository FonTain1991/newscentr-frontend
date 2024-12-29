import { memo } from 'react'
import Slide from '../../public/images/slide1.webp'
import Image from 'next/image'

export const MainSlider = memo(() => {
  return (
    <div className='w-full md:h-60 lg:h-96 relative'>
      <Image
        src={Slide}
        alt=''
        fill
      />
    </div>
  )
})
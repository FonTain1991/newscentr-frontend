import Image from 'next/image'
import { memo } from 'react'
import PNGFooterLogo from '../../public/images/FooterLogo.png'

export const FooterContacts = memo(() => {
  return (
    <div className='mx-16 md:mx-0 flex justify-center bg-cyan-50 py-8 mt-4'>
      <div className='relative'>
        <Image
          src={PNGFooterLogo}
          alt='Gouranna'
          width={600}
          height={121}
        />
      </div>
    </div>
  )
})
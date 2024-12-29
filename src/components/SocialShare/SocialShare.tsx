'use client'

import { usePathname } from 'next/navigation'
import { memo } from 'react'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, MailruIcon, MailruShareButton, TwitterIcon, TwitterShareButton, VKIcon, VKShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

export const SocialShare = memo(() => {
  const pathname = usePathname()
  const url = process.env.NEXT_PUBLIC_DOMAIN + pathname

  return (
    <div className='flex justify-center mt-4 gap-2' >
      <FacebookShareButton url={url} >
        <FacebookIcon size={40} className='rounded' />
      </FacebookShareButton>
      <VKShareButton url={url}>
        <VKIcon size={40} className='rounded' />
      </VKShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={40} className='rounded' />
      </LinkedinShareButton>
      <MailruShareButton url={url}>
        <MailruIcon size={40} className='rounded' />
      </MailruShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={40} className='rounded' />
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={40} className='rounded' />
      </WhatsappShareButton>
    </div>
  )
})
'use client'

import { PlusCircleOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { memo, useEffect, useRef, useState } from 'react'
import JPGEmptyImage from '../../public/images/EmptyImage.jpg'
import { useEvent } from '@/hooks'
import { resizeImage } from '@/utils'

interface IPhoto {
  onChange?: ((text: string) => string) | undefined,
  value?: string | null
}

export const Photo = memo((props: IPhoto) => {
  const { value, onChange } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [base64, setBase64] = useState<string | null | undefined>(value ?? null)

  const onUpload = useEvent(async e => {
    const [file] = e.target.files
    const base64 = await resizeImage(file, { width: 256, height: 256 })

    setBase64(base64)

    if (onChange) {
      onChange(base64)
    }
  })

  const onClick = useEvent(() => {
    inputRef.current?.click()
  })

  useEffect(() => {
    setBase64(value)
  }, [value])

  return (
    <div className='h-[150px] w-[150px] rounded-full overflow-hidden relative flex flex-col justify-between group'>
      <div>
        <Image src={base64 ?? JPGEmptyImage} fill alt='Avatar' className='object-cover' />
      </div>
      <input ref={inputRef} type='file' className='!hidden' onChange={onUpload} />
      <div onClick={onClick} className='absolute inset-0 cursor-pointer justify-center items-center hidden group-hover:flex group-hover:bg-black/50'>
        <PlusCircleOutlined style={{ color: '#fff' }} className='text-2xl' />
      </div>
    </div>
  )
})
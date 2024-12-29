import { memo } from 'react'
import { SidebarBlockTitle } from '../Layout/SidebarBlockTitle'

const SOCIAL = [{
  Icon: '',
  text: '0 Фанатов',
  subText: 'Лайк',
  href: '#'
},
{
  Icon: '',
  text: '0 Последователей',
  subText: 'Следить',
  href: '#'
},
{
  Icon: '',
  text: '22, 100 подписчиков',
  subText: 'Подписаться',
  href: '#'
}]

export const StayConnected = memo(() => {
  return (
    <>
      <SidebarBlockTitle title='Оставайтесь на связи' className='mb-4' />
      {SOCIAL.map((v, key) => {
        return (
          <a href={v.href} target='_blank' rel='noreferrer' key={key} className='flex justify-between items-center mb-4'>
            <div className='flex items-center'>
              <div className='h-10 w-10 rounded-full border mr-2'></div>
              <span className='text-xs font-bold'>{v.text}</span>
            </div>
            <span className='uppercase text-xs'>{v.subText}</span>
          </a>
        )
      })}
    </>
  )
})
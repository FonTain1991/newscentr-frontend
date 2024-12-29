import { MainRecipeLatest } from '@/components/MainRecipeLatest'

import { FooterContacts } from '@/components/FooterContacts'
import { Sidebar } from '@/components/Layout'
import { MainSlider } from '@/components/Slider'
import { MainPostLatest } from '@/components/MainPostLatest'


export default function Home() {
  return (
    <>
      <MainSlider />
      <div className='md:mt-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-12 mt-12'>
          <div className='col-span-2'>
            <MainRecipeLatest />
            <MainPostLatest />
          </div>
          <Sidebar />
        </div>
      </div>
      <FooterContacts />
    </>
  )
}

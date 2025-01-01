
import { Sidebar } from '@/components/Layout'
import { MainPostLatest } from '@/components/MainPostLatest'


export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-12'>
        <div className='col-span-2'>
          <MainPostLatest />
        </div>
        <Sidebar />
      </div>
    </div>
  )
}

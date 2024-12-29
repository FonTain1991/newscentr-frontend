import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex h-full items-center'>
      <div className='mx-auto max-w-screen-sm text-center'>
        <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600'>404</h1>
        <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl'>Чего-то не хватает.</p>
        <p className='mb-4 text-lg font-light text-gray-500'>Извините, мы не можем найти эту страницу. Вы найдете много интересного на домашней странице.</p>
        <Link href='/' className='inline-flex font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 hover:underline'>Перейти на главную</Link>
      </div>
    </div>
  )
}
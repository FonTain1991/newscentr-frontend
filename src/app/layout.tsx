import { Footer, Header } from '@/components/Layout'
import { TopMenu } from '@/components/Menu'
import { ApolloProvider } from '@/providers/ApolloNextAppProvider'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.scss'


// eslint-disable-next-line new-cap
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Рецепты блюд с gouranna.by',
  description: 'GOURANNA — это проверенные рецепты блюд на все случаи жизни. Данная подборка рецептов поможет вам в приготовлении повседневных блюд, праздничного стола, ужинов по особым случаям и многого другого на Gouranna.by',
  keywords: 'Праздничные блюда, что приготовить, что приготовить на ужин, новогодний стол, рецепты, подборка рецептов'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <head>
        <link rel='icon' href='/icon.png' type='image/png' sizes='any' />
      </head>
      <body className={`${inter.className} bg-main bg-center-bottom bg-no-repeat bg-fixed`}>
        {/* {process.env.NODE_ENV === 'production' && (
          <Script
            id='gtm'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KL2TK9HC');
            `
            }}
          />
        )} */}
        <ApolloProvider cookie={cookies().toString()}>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: 'var(--font-inter)',
                }
              }}
            >
              <div className='sm:max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col h-screen xl:h-[calc(100vh-2.5rem)] xl:mt-10 shadow-main bg-white'>
                <Header />
                <div className='grow bg-white'>
                  <TopMenu />
                  <div className='mx-4 md:mx-12 h-[calc(100%-2.5rem)]'>
                    {children}
                  </div>
                </div>
                <Footer />
              </div>
            </ConfigProvider>
          </AntdRegistry>
        </ApolloProvider>
        {/* {process.env.NODE_ENV === 'production' && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: <iframe src='https://www.googletagmanager.com/ns.html?id=GTM-KL2TK9HC' height='0' width='0' style={{ display: 'none', visibility: 'hidden' }} loading='lazy' />
            }}
          />
        )} */}
      </body>
    </html>
  )
}

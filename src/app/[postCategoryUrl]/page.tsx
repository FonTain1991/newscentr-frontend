import { makeClient } from '@/apollo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { CategoryHeader } from '@/components/Category'
import { FooterContacts } from '@/components/FooterContacts'
import { Sidebar } from '@/components/Layout'
import { List } from '@/components/PostsByPostCategoryUrl'
import { MainSlider } from '@/components/Slider'
import { GetPostCategoriesDocument } from '@/gql/getPostCategories'
import { GetPostCategoryByUrlDocument } from '@/gql/getPostCategoryByUrl'

export async function generateMetadata({ params }: { params: any }) {
  if (params?.getPostCategoryByUrl) {
    const client = makeClient({ cookie: null })
    const { data } = await client.query({
      query: GetPostCategoryByUrlDocument,
      variables: { url: String(params?.getPostCategoryByUrl) },
    })

    const category = data?.getPostCategoryByUrl

    return {
      title: category?.name,
      description: category?.description,
      keywords: category?.keywords
    }
  }
}

export const revalidate = 60 * 1000
export const dynamicParams = true

export async function generateStaticParams() {
  const client = makeClient({ cookie: null })
  const { data } = await client.query({
    query: GetPostCategoriesDocument
  })

  const categories = data?.getPostCategories
  return categories.map((category: any) => ({
    postCategoryUrl: String(category.url),
  }))
}


export default function PostCategoryPage() {
  return (
    <>
      <MainSlider />
      <Breadcrumb />
      <CategoryHeader />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-12 mt-12'>
        <div className='col-span-2'>
          <List />
        </div>
        <Sidebar />
      </div>
      <FooterContacts />
    </>
  )
}
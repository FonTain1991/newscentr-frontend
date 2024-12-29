import { makeClient } from '@/apollo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { CategoryHeader } from '@/components/Category'
import { FooterContacts } from '@/components/FooterContacts'
import { Sidebar } from '@/components/Layout'
import { List } from '@/components/RecipesByRecipeCategoryUrl'
import { MainSlider } from '@/components/Slider'
import { GetRecipeCategoryByUrlDocument } from '@/gql/getRecipeCategoryByUrl'
import { GetRecipeCategoryDocument } from '@/gql/getRecipeCategoryList'

export async function generateMetadata({ params }: { params: any }) {
  if (params?.recipeCategoryUrl) {
    const client = makeClient({ cookie: null })
    const { data } = await client.query({
      query: GetRecipeCategoryByUrlDocument,
      variables: { url: String(params?.recipeCategoryUrl) },
    })

    const category = data?.getRecipeCategoryByUrl

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
    query: GetRecipeCategoryDocument
  })

  const categories = data?.getRecipeCategory
  return categories.map((category: any) => ({
    recipeCategoryUrl: String(category.url),
  }))
}


export default function RecipeCategoryPage() {
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
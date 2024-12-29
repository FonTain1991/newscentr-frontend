import { makeClient } from '@/apollo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterContacts } from '@/components/FooterContacts'
import { Sidebar } from '@/components/Layout'
import { RecipeBody, RecipeHeader, RecipeIngredient, RecipePreview, RecipeTime } from '@/components/Recipe'
import { MainSlider } from '@/components/Slider'
import { SocialShare } from '@/components/SocialShare'
import { Author, Comments, Views } from '@/components/Statistics'
import { GetRecipeByUrlDocument } from '@/gql/getRecipeByUrl'
import { GetRecipesDocument } from '@/gql/getRecipeList'

export async function generateMetadata({ params }: { params: any }) {
  const client = makeClient({ cookie: null })
  const { data } = await client.query({
    query: GetRecipeByUrlDocument,
    variables: { url: params?.recipeUrl, recipeCategoryUrl: params?.recipeCategoryUrl }
  })
  const recipe = data?.getRecipeByUrl

  return {
    title: recipe?.pageTitle,
    description: recipe?.description,
    keywords: recipe?.keywords
  }
}

export const revalidate = 60 * 1000
export const dynamicParams = true

export async function generateStaticParams() {
  const client = makeClient({ cookie: null })
  const { data } = await client.query({
    query: GetRecipesDocument
  })

  const recipes = data?.getRecipes
  return recipes.map((recipe: any) => ({
    recipeUrl: String(recipe.url),
    recipeCategoryUrl: String(recipe.rubric.url)
  }))
}

export default function RecipePage() {
  return (
    <>
      <MainSlider />
      <Breadcrumb />
      <RecipeHeader />
      <div className='flex justify-center items-center mt-4 gap-4'>
        <Author />
        <Views />
        <Comments />
      </div>
      <SocialShare />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-12 mt-12'>
        <div className='post col-span-2'>
          <div className='pb-8'>
            <RecipePreview />
            <RecipeTime />
            <RecipeIngredient />
            <RecipeBody />
          </div>
        </div>
        <Sidebar />
      </div>
      <FooterContacts />
    </>
  )
}
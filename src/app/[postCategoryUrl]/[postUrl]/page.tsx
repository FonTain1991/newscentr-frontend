import { makeClient } from '@/apollo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FooterContacts } from '@/components/FooterContacts'
import { Sidebar } from '@/components/Layout'
import { PostBody, PostHeader, PostPreview } from '@/components/Post'
import { MainSlider } from '@/components/Slider'
import { SocialShare } from '@/components/SocialShare'
import { GetPostByUrlDocument } from '@/gql/getPostByUrl'
import { GetPostsDocument } from '@/gql/getPosts'

export async function generateMetadata({ params }: { params: any }) {
  const client = makeClient({ cookie: null })
  const { data } = await client.query({
    query: GetPostByUrlDocument,
    variables: { url: params?.postUrl, postCategoryUrl: params?.postCategoryUrl }
  })
  const post = data?.getPostByUrl

  return {
    title: post?.pageTitle,
    description: post?.description,
    keywords: post?.keywords
  }
}

export const revalidate = 60 * 1000
export const dynamicParams = true

export async function generateStaticParams() {
  const client = makeClient({ cookie: null })
  const { data } = await client.query({
    query: GetPostsDocument
  })

  const posts = data?.getPosts
  return posts.map((post: any) => ({
    postUrl: String(post.url),
    postCategoryUrl: String(post.rubric.url)
  }))
}

export default function PostPage() {
  return (
    <>
      <MainSlider />
      <Breadcrumb />
      <PostHeader />
      <div className='flex justify-center items-center mt-4 gap-4'>
        {/* <Author />
        <Views /> 
        <Comments /> */}
      </div>
      <SocialShare />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-12 mt-12'>
        <div className='post col-span-2'>
          <div className='pb-8'>
            <PostPreview />
            <PostBody />
          </div>
        </div>
        <Sidebar />
      </div>
      <FooterContacts />
    </>
  )
}
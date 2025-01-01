import { makeClient } from '@/apollo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Sidebar } from '@/components/Layout'
import { PostBody, PostHeader, PostPreview } from '@/components/Post'
import { SocialShare } from '@/components/SocialShare'
import { Author, Views } from '@/components/Statistics'
import { GetPostByUrlDocument } from '@/gql/getPostByUrl'
import { GetPostsIsPublishDocument } from '@/gql/getPostsIsPublish'

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

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  const client = makeClient({ cookie: null })
  const { data } = await client.query({
    query: GetPostsIsPublishDocument
  })

  const posts = data?.getPostsIsPublish
  return posts.map((post: any) => ({
    postUrl: String(post.url),
    postCategoryUrl: String(post.rubric.url)
  }))
}

export default function PostPage() {
  return (
    <>
      <Breadcrumb />
      <PostHeader />
      <div className='flex justify-center items-center mt-4 gap-4'>
        <Author />
        <Views />
        {/* <Comments /> */}
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
    </>
  )
}
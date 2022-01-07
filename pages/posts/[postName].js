import Head from 'next/head'
import PostContent from '../../components/posts/post-detail/post-content'

export default function PostDetail() {
  return (
    <div className="max-w-[800px] mx-auto py-8">
      <Head>
        <title>All Articles</title>
        <meta name="description" content="You can see all my articles here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostContent />
    </div>
  )
}

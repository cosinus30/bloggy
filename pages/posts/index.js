import Head from 'next/head'
import PostsGrid from '../../components/posts/posts-grid'

export default function Posts({posts}) {
  return (
    <div className="">
      <Head>
        <title>All Articles</title>
        <meta name="description" content="You can see all my articles here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-center text-6xl my-8'>
        All Posts
      </h1>
      <PostsGrid posts={posts}/>
    </div>
  )
}

export function getStaticProps() {
  const DUMMY_DATA = [
    {
      title: "Post 1",
      slug: "post-1",
      date: "2020-01-01",
      summary: "This is a post",
      image: {
        src: "/me.jpeg",
        alt: "Image showing Yunus Kerem Turk",
      },
    },
    {
      title: "Post 2",
      slug: "post-2",
      date: "2020-01-01",
      summary: "This is a post",
      image: {
        src: "/me.jpeg",
        alt: "Image showing Yunus Kerem Turk",
      },
    },
    {
      title: "Post 3",
      slug: "post-3",
      date: "2020-01-01",
      summary: "This is a post",
      image: {
        src: "/me.jpeg",
        alt: "Image showing Yunus Kerem Turk",
      },
    },
    {
      title: "Post 4",
      slug: "post-4",
      date: "2020-01-01",
      summary: "This is a post",
      image: {
        src: "/me.jpeg",
        alt: "Image showing Yunus Kerem Turk",
      },
    },
  
    
  ]
  
  return {
    props: {
      posts: DUMMY_DATA
    }
  }
}

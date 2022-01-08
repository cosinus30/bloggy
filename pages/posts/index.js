import Head from "next/head";
import PostsGrid from "../../components/posts/posts-grid";
import { getAllPosts } from "../../lib/posts-util";

export default function Posts({ posts }) {
  return (
    <div className="">
      <Head>
        <title>All Articles</title>
        <meta name="description" content="You can see all my articles here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-6xl my-8">All Posts</h1>
      <PostsGrid posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60 * 60 * 12,
  };
}

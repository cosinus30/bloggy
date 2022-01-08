import Head from "next/head";
import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";
import { getFeaturedPosts } from "../lib/posts-util";

export default function Home({ posts }) {
  console.log('hey: ', posts)
  return (
    <div className="container px-4 md:px-8 mx-auto">
      <Head>
        <title>Yunus Kerem Turk Blog</title>
        <meta name="description" content="Blog where I share my thoughts and insights about life and whatnot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getFeaturedPosts();
  console.log(posts)

  return {
    props: {
      posts: posts,
    },
    revalidate: 60 * 60 * 12,
  };
}

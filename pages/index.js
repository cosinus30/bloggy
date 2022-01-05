import Head from "next/head";
import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";

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
  const DUMMY_POSTS = [
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
  ];

  return {
    props: {
      posts: DUMMY_POSTS,
    },
  };
}

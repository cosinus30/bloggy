import Head from 'next/head'
import FeaturedPosts from '../components/home/featured-posts'
import Hero from '../components/home/hero'

export default function Home() {
  return (
    <div className="container px-4 md:px-8 mx-auto">
      <Head>
        <title>Yunus Kerem Turk Blog</title>
        <meta name="description" content="Blog where I share my thoughts and insights about life and whatnot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts />
    </div>
  )
}

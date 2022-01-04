import Head from 'next/head'

export default function Home() {
  return (
    <div className="container px-4 md:px-8 mx-auto bg-red-800">
      <Head>
        <title>Yunus Kerem Turk Blog</title>
        <meta name="description" content="Blog where I share my thoughts and insights about life and whatnot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        This is going to be my home page!
      </h1>

    </div>
  )
}

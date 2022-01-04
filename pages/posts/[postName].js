import Head from 'next/head'

export default function PostDetail() {
  return (
    <div className="container px-4 mx-auto bg-red-800">
      <Head>
        <title>All Articles</title>
        <meta name="description" content="You can see all my articles here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        This is going to be my post detail page!
      </h1>

    </div>
  )
}

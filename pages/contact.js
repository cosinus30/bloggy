import Head from 'next/head'

export default function Contact() {
return (
    <div className="container px-4 mx-auto bg-red-800">
      <Head>
        <title>Contact with me</title>
        <meta name="description" content="You can reach to me whenever you want!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        This is going to be my contact page!
      </h1>

    </div>
  )
}

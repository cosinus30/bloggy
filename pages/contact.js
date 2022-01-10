import Head from 'next/head'
import ContactForm from '../components/contact/contact-form'

export default function Contact() {
return (
    <div>
      <Head>
        <title>Contact with me</title>
        <meta name="description" content="You can reach to me whenever you want!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm />

    </div>
  )
}

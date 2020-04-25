import Head from 'next/head';
import Layout from '../components/layout'

// pages/404.js
export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <section>
        <h1>404 - Page Not Found</h1>
      </section>
    </Layout>
  )
}

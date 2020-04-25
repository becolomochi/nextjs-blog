// API document https://nextjs.org/docs/api-reference/next/head
import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post !!</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          {/* リンク要素にhrefつける */}
          <a>Back to home</a>
          {/* a要素には属性をつけない */}
        </Link>
      </h2>
    </>
  )
}

import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
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

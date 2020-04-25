import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// ファイルシステムの代わりに外部APIのエンドポイントから投稿データを取得する場合
// import fetch from 'node-fetch'
  // ファイルシステムの代わりにDBから投稿データを取得する場合
// import someDatabaseSDK from 'someDatabaseSDK'


const postsDirectory = path.join(process.cwd(), 'posts')
  // ファイルシステムの代わりにDBから投稿データを取得する場合
// const databaseClient = someDatabaseSDK.createClient(...)

export function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  // ファイルシステムの代わりに外部APIのエンドポイントから投稿データを取得する場合
  // const posts = await fetch('..')
  // return res.json()

  // Instead of the file system,
  // fetch post data from a database
  // ファイルシステムの代わりにDBから投稿データを取得する場合
  // return databaseClient.query('SELECT posts...')

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map((post) => {
    post.Authors = post.Authors.map((id) => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

const Index = ({ posts = [], preview }) => {
  return (
    <>
      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        <h1 className="text-white">Blog</h1>
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>There are no posts yet</p>
        )}
        {posts.map((post) => {
          const date = new Date(post.Date).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
          return (
            <div
              className="relative bg-white rounded-lg mb-4 pt-2 px-4"
              key={post.Slug}
            >
              <h3>
                <span className={blogStyles.titleContainer}>
                  {!post.Published && (
                    <span className={blogStyles.draftBadge}>Draft</span>
                  )}
                  <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                    <a className="pb-2">{post.Page}</a>
                  </Link>
                </span>
              </h3>
              {(post.preview || []).map((block, idx) => (
                <div className="pb-2">{post.preview}</div>
              ))}

              {post.Date && post.Authors.length > 0 && (
                <>
                  <div className="flex justify-between">
                    <p className="text-sm">{date}</p>
                    <p className="text-sm">{post.Authors.join(' ')}</p>
                  </div>
                </>
              )}

              <p></p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Index

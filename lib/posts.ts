import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  imageUrl: string
  tags: string[]
  author: {
    name: string
    imageUrl: string
  }
}

export function getPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export function getPostBySlug(slug: string): PostMeta | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      imageUrl: data.imageUrl,
      tags: data.tags,
      author: data.author,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter((post): post is PostMeta => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}

export async function getPostContent(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const { content: compiledContent } = await compileMDX({
      source: content,
      options: { 
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }
    })

    return {
      meta: {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        imageUrl: data.imageUrl,
        tags: data.tags,
        author: data.author,
      },
      content: compiledContent
    }
  } catch (error) {
    console.error(`Error reading post content ${slug}:`, error)
    return null
  }
}

export function getPostsByTag(tag: string): PostMeta[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.tags.includes(tag))
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = allPosts.flatMap(post => post.tags)
  return Array.from(new Set(tags))
} 
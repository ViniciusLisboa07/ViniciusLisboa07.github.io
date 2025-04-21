import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Post {
  slug: string;
  content: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  imageUrl?: string;
  author?: {
    name: string;
    imageUrl?: string;
  };
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPostSlugs(): { slug: string }[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => ({
    slug: fileName.replace(/\.mdx$/, '')
  }))
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    ...data
  }
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '')
    return getPostBySlug(slug)
  }) as Post[]
  
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1
    else if (a > b) return -1
    else return 0
  })
} 
import Blog from '../components/Blog'
import { getAllPosts, getAllTags } from '../../lib/posts'

export const metadata = {
  title: 'Blog | Vinicius Lisboa',
  description: 'Artigos sobre desenvolvimento web, tecnologia e programação',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const allTags = getAllTags()
  
  return <Blog posts={posts} allTags={allTags} />
} 
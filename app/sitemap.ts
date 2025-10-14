import { MetadataRoute } from 'next'
import { getPostSlugs } from '../lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://viniciuslisboa07.github.io'
  
  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Páginas de posts do blog
  const postSlugs = getPostSlugs()
  const blogPosts = postSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}

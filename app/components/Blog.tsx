"use client"

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useState } from 'react'
import type { PostMeta } from '../../lib/posts'
import Image from "next/image"

interface BlogProps {
  posts: PostMeta[]
  allTags: string[]
}

export default function Blog({ posts: initialPosts, allTags: initialTags }: BlogProps) {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [posts] = useState<PostMeta[]>(initialPosts)
  const [allTags] = useState<string[]>(initialTags)
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })
  
  return (
    <section className="py-20 pt-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="flex items-center text-green-600 mb-8 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            {t('back_to_home')}
          </Link>

          <h1 className="text-5xl md:text-6xl font-black mb-6">{t('blog')}</h1>

          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-700 max-w-3xl">{t('blog_description')}</h2>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-8 bg-gray-100 p-3 rounded-lg items-center max-w-2xl">
            <p className="text-sm md:text-base text-gray-700 flex-1">{t('subscribe_to_newsletter')}</p>
            <div className="relative">
              <input
                type="email"
                placeholder={t('email')}
                className="pl-3 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-64"
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-col gap-8 mb-12 justify-between">
            <div className="relative">
              <input
                type="text"
                placeholder={t('search_posts')}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedTag === '' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedTag('')}
              >
                {t('all')}
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedTag === tag ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          <div className="max-w-4xl">
            {filteredPosts.length > 0 ? (
              <div className="space-y-16">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-200 pb-16 last:border-b-0 last:pb-0"
                  >
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="mb-3">
                        <time className="text-gray-500 text-sm">
                          {new Date(post.date).toLocaleDateString('pt-BR', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </time>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-black mb-5 group-hover:text-green-600 transition-colors underline decoration-2 underline-offset-4 decoration-green-600/30 group-hover:decoration-green-600">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      {post.author && (
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gray-200 relative overflow-hidden flex-shrink-0">
                            <Image 
                              src={post.author.imageUrl} 
                              alt={post.author.name} 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-gray-900 font-medium text-sm">
                              {post.author.name}
                            </span>
                            {post.tags.length > 0 && (
                              <span className="text-gray-500 text-xs mt-0.5">
                                {post.tags.slice(0, 2).join(', ')}
                                {post.tags.length > 2 && ` +${post.tags.length - 2}`}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">{t('no_posts_found')}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
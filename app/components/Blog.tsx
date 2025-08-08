"use client"

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useState } from 'react'
import type { PostMeta } from '../../lib/posts'

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
          <h1 className="text-5xl md:text-6xl font-black mb-6">{t('blog')}</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            {t('blog_description')}
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video bg-gray-100 relative">
                      {post.imageUrl && (
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          {/* Aqui você pode adicionar uma tag Image do Next.js quando tiver as imagens */}
                          <span className="text-gray-400">{t('post_image')}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600">
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-xl mb-2 hover:text-green-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="text-green-600 font-medium text-sm flex items-center">
                        {t('read_more')} 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">{t('no_posts_found')}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
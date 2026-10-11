"use client"

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Search } from "lucide-react"
import type { PostMeta } from '../../lib/posts'
import Image from "next/image"
import Header from "./Header"
import Footer from "./Footer"
import { useHydrated } from "@/lib/useHydrated"

interface BlogProps {
  posts: PostMeta[]
  allTags: string[]
}

export default function Blog({ posts: initialPosts, allTags: initialTags }: BlogProps) {
  const { t, i18n } = useTranslation()
  const hydrated = useHydrated()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [posts] = useState<PostMeta[]>(initialPosts)
  const [allTags] = useState<string[]>(initialTags)
  const locale = hydrated && i18n.language?.startsWith('pt') ? 'pt-BR' : 'en-US'

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const tagClass = (active: boolean) =>
    `rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
      active ? 'border-ink bg-ink text-paper' : 'border-ink/30 text-ink-soft hover:border-ink hover:text-ink'
    }`

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />

      <section className="pt-32 md:pt-40 pb-24">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              <Link href="/" className="hover:text-ink transition-colors">{t('back_to_home')}</Link>
              <span className="h-px w-12 bg-ink/30" />
              <span>{t('blog')}</span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tight mb-8">
              {t('blog')}<span className="italic text-forest">.</span>
            </h1>

            <p className="font-serif text-2xl md:text-3xl leading-snug text-ink-soft max-w-3xl mb-16">
              {t('blog_description')}
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div className="flex flex-wrap gap-2">
                <button className={tagClass(selectedTag === '')} onClick={() => setSelectedTag('')}>
                  {t('all')}
                </button>
                {allTags.map(tag => (
                  <button key={tag} className={tagClass(selectedTag === tag)} onClick={() => setSelectedTag(tag)}>
                    {tag}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                <input
                  type="text"
                  placeholder={t('search_posts')}
                  className="w-full md:w-72 border-b border-ink/30 bg-transparent py-2 pl-7 placeholder:text-ink-muted focus:outline-none focus:border-ink"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="border-t border-ink/30">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-ink/30"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group grid md:grid-cols-12 gap-6 md:gap-8 py-10 transition-colors"
                    >
                      <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                        <time>
                          {new Date(post.date).toLocaleDateString(locale, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        {post.tags.length > 0 && (
                          <span className="text-forest">{post.tags.slice(0, 2).join(' · ')}</span>
                        )}
                      </div>

                      <div className="md:col-span-6">
                        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-4 transition-colors group-hover:text-forest">
                          {post.title}
                        </h2>
                        <p className="text-lg text-ink-soft leading-relaxed mb-6">{post.excerpt}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium">
                          {t('read_more')}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>

                      {post.imageUrl && (
                        <div className="md:col-span-3 order-first md:order-none">
                          <div className="relative aspect-[4/3] overflow-hidden border border-ink/30 bg-paper-dark">
                            <Image
                              src={post.imageUrl}
                              alt={post.title}
                              fill
                              sizes="(min-width: 768px) 25vw, 100vw"
                              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      )}
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="border-y border-ink/30 py-16 text-center">
                <p className="font-serif text-2xl text-ink-muted">{t('no_posts_found')}</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

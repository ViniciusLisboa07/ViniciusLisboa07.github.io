"use client"

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { ReactElement, useState } from 'react'
import Image from "next/image"
import { ArrowLeft, Check, Link2, Linkedin, MessageCircle, Twitter } from "lucide-react"
import Header from "./Header"
import Footer from "./Footer"
import { useHydrated } from "@/lib/useHydrated"

type BlogPostData = {
  meta: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    tags: string[];
    author: {
      name: string;
      imageUrl: string;
    };
  };
  content: ReactElement;
}

export default function BlogPost({ post }: { post: BlogPostData }) {
  const { t, i18n } = useTranslation()
  const hydrated = useHydrated()
  const [copied, setCopied] = useState(false)

  if (!post) return null

  const locale = hydrated && i18n.language?.startsWith('pt') ? 'pt-BR' : 'en-US'
  const url = `https://viniciuslisboa07.github.io/blog/${post.meta.slug}`
  const text = encodeURIComponent(post.meta.title)
  const shareLinks = [
    { label: "X", icon: Twitter, href: `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}` },
    { label: "LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/?text=${text}%20${encodeURIComponent(url)}` },
  ]

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Error copying link:', error)
    }
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />

      <section className="pt-32 md:pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <header className="container mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 mb-10 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted hover:text-ink transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t('back_to_blog')}
            </Link>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
              <time>
                {new Date(post.meta.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              {post.meta.tags.map((tag: string) => (
                <span key={tag} className="text-forest">· {tag}</span>
              ))}
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-6">
              {post.meta.title}
            </h1>

            {post.meta.excerpt && (
              <p className="font-serif text-2xl italic text-ink-soft mb-10">{post.meta.excerpt}</p>
            )}

            {post.meta.author && (
              <div className="flex items-center gap-3 border-y border-ink/20 py-4 mb-12">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-ink/20">
                  <Image
                    src={post.meta.author.imageUrl}
                    alt={post.meta.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{post.meta.author.name}</span>
              </div>
            )}
          </header>

          {post.meta.imageUrl && (
            <div className="container mx-auto max-w-5xl px-6 mb-16">
              <div className="border border-ink/40 bg-paper p-2 md:p-3">
                <div className="relative aspect-[16/9] overflow-hidden border border-ink/20 bg-paper-dark">
                  <Image
                    src={post.meta.imageUrl}
                    alt={post.meta.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="container mx-auto max-w-3xl px-6">
            <article className="prose prose-lg">
              {post.content}
            </article>
          </div>

          <div className="container mx-auto max-w-3xl px-6">
            <div className="border-t border-ink/30 mt-16 pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <h3 className="font-serif text-2xl">{t('share_post')}</h3>
              <div className="flex flex-wrap gap-2">
                {shareLinks.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/30 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
                <button
                  onClick={copyLink}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/30 px-4 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
                  {copied ? t('link_copied') : t('copy_link')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

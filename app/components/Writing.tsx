"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import type { PostMeta } from "../../lib/posts"
import SectionHeading from "./SectionHeading"
import { useHydrated } from "@/lib/useHydrated"

export default function Writing({ posts }: { posts: PostMeta[] }) {
  const { t, i18n } = useTranslation()
  const hydrated = useHydrated()
  const locale = hydrated && i18n.language?.startsWith('pt') ? 'pt-BR' : 'en-US'

  return (
    <section id="writing" className="py-24 md:py-32 bg-navy waves-paper text-paper">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading index="03" label={t('writing')} title={t('latest_posts')} tone="paper" />

        <div className="border-t border-paper/30">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group grid md:grid-cols-12 items-baseline gap-2 md:gap-8 border-b border-paper/30 py-8"
              >
                <time className="md:col-span-3 font-mono text-xs uppercase tracking-[0.15em] text-paper/60">
                  {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long' })}
                </time>
                <div className="md:col-span-8">
                  <h3 className="font-serif text-2xl md:text-4xl font-medium tracking-tight group-hover:italic">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-paper/70 line-clamp-2">{post.excerpt}</p>
                </div>
                <ArrowUpRight className="hidden md:block md:col-span-1 justify-self-end h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          href="/blog"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-medium text-ink transition-colors hover:bg-paper-dark"
        >
          {t('all_posts')}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}

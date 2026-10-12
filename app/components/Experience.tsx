"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import SectionHeading from "./SectionHeading"

interface Job {
  company: string
  context: string
  role: string
  period: string
  current: boolean
  summary: string
  highlights: string[]
  tech: string
}

export default function Experience() {
  const { t } = useTranslation()

  // Antes das traduções carregarem, t devolve a própria chave (string)
  const jobs = t('experience_items', { returnObjects: true })
  const jobList = Array.isArray(jobs) ? (jobs as Job[]) : []

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading index="01" label={t('experience')} title={t('experience_title')} />

        <div className="border-t border-ink/30">
          {jobList.map((job, index) => (
            <motion.article
              key={job.company + job.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="grid md:grid-cols-12 gap-4 md:gap-8 border-b border-ink/30 py-10 md:py-12"
            >
              <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                <span className={job.current ? "text-forest" : undefined}>
                  {job.current ? `${job.period} — ${t('present')}` : job.period}
                </span>
                <p className="mt-3 font-serif text-2xl normal-case tracking-tight text-ink">{job.company}</p>
                <p className="mt-1">{job.context}</p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-3">{job.role}</h3>
                <p className="text-lg text-ink-soft leading-relaxed">{job.summary}</p>

                {job.highlights.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
                        <span className="text-ink/40">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-forest">{job.tech}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"
import { ArrowRight, Download } from "lucide-react"
import SectionHeading from "./SectionHeading"

const RESUME_URL = "https://drive.google.com/file/d/1aDUU9n5-bAtFSs8jtni3ShynIjzCv4vq/view?usp=sharing"

// Logos oficiais das empresas, usados como máscara para ficarem na cor do site
const LOGOS: Record<string, { src: string; ratio: number }> = {
  "Agro1": { src: "/images/logos/agro1.svg", ratio: 200 / 78 },
  "Twygo": { src: "/images/logos/twygo.svg", ratio: 118 / 36 },
  "Fleeg": { src: "/images/logos/fleeg.svg", ratio: 1480 / 1062 },
  "Grupo Euax": { src: "/images/logos/euax.png", ratio: 600 / 179 },
}

function CompanyLogo({ company, className = "" }: { company: string; className?: string }) {
  const logo = LOGOS[company]
  if (!logo) return null

  const mask = `url("${logo.src}") left center / contain no-repeat`
  return (
    <span
      role="img"
      aria-label={company}
      className={`block bg-current ${className}`}
      style={{ aspectRatio: logo.ratio, mask, WebkitMask: mask }}
    />
  )
}

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
    <section id="experience">
      <div className="md:hidden">
        <VerticalList jobs={jobList} />
      </div>
      <div className="hidden md:block">
        <HorizontalTimeline jobs={jobList} />
      </div>
    </section>
  )
}

/**
 * No desktop a seção fica presa na tela e a rolagem vertical move os
 * painéis para o lado. A altura da seção é a distância horizontal a
 * percorrer mais uma tela, então o scroll vertical mapeia 1:1 no eixo x.
 */
function HorizontalTimeline({ jobs }: { jobs: Job[] }) {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    window.addEventListener("resize", measure)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [jobs.length])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  return (
    <div ref={sectionRef} className="relative" style={{ height: `calc(100svh + ${distance}px)` }}>
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex h-full w-max pt-[4.5rem]">
          <div className="box-content flex w-[clamp(340px,30vw,460px)] shrink-0 flex-col justify-between py-12 [@media(max-height:820px)]:py-7 pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pr-12">
            <SectionHeading index="01" label={t('experience')} title={t('experience_title')} />
            <div>
              <p className="font-serif text-2xl [@media(max-height:820px)]:text-xl leading-snug text-ink-soft mb-8">{t('experience_intro')}</p>
              <span className="inline-flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                {t('keep_scrolling')}
                <ArrowRight className="h-4 w-4 animate-[nudge_1.6s_ease-in-out_infinite]" />
              </span>
            </div>
          </div>

          {jobs.map((job, index) => (
            <TimelinePanel key={job.company + job.period} job={job} index={index} />
          ))}

          <div className="flex w-[34vw] max-w-[520px] shrink-0 flex-col justify-end border-l border-ink/30 px-12 py-12 mr-[max(1.5rem,calc((100vw-72rem)/2))]">
            <p className="font-serif text-3xl leading-snug mb-8">{t('experience_end')}</p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-paper transition-colors hover:bg-forest"
            >
              <Download className="h-4 w-4" />
              {t('download_resume')}
            </a>
          </div>
        </motion.div>

        {/* Progresso da linha do tempo */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-ink/15">
          <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-ink" />
        </div>
      </div>
    </div>
  )
}

function TimelinePanel({ job, index }: { job: Job; index: number }) {
  const { t } = useTranslation()
  const [start, end] = job.period.split("—").map((part) => part.trim())
  const logoRef = useRef<HTMLDivElement>(null)
  const centered = useInView(logoRef, { margin: "0px -30% 0px -30%" })

  return (
    <article className="flex w-[44vw] max-w-[640px] [@media(max-height:820px)]:w-[50vw] [@media(max-height:820px)]:max-w-[720px] shrink-0 flex-col border-l border-ink/30 px-10 py-12 [@media(max-height:820px)]:py-7">
      <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
        <span>{`01.${index + 1}`}</span>
        <span>{job.context}</span>
      </div>

      <div className="mt-6 [@media(max-height:820px)]:mt-3 flex items-end justify-between gap-6">
        <div className="flex items-baseline gap-4">
          <span className="font-serif text-8xl [@media(max-height:820px)]:text-6xl font-medium tracking-tight leading-none">{start}</span>
          <span className={`font-mono text-sm uppercase tracking-[0.15em] ${job.current ? "text-forest" : "text-ink-muted"}`}>
            → {job.current ? t('present') : end}
          </span>
        </div>

        {/* O logo acende quando o painel passa pelo centro da tela */}
        <motion.div
          ref={logoRef}
          animate={{ opacity: centered ? 0.85 : 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-2 text-ink"
        >
          <CompanyLogo company={job.company} className={job.company === "Fleeg" ? "h-14 [@media(max-height:820px)]:h-11" : "h-10 [@media(max-height:820px)]:h-8"} />
        </motion.div>
      </div>

      <div className="mt-auto pt-8 [@media(max-height:820px)]:pt-4">
        <h3 className="font-serif text-3xl font-medium tracking-tight">{job.company}</h3>
        <p className="mt-1 font-serif text-xl italic text-forest">{job.role}</p>
        <p className="mt-4 [@media(max-height:820px)]:mt-2 text-ink-soft leading-relaxed [@media(max-height:820px)]:text-[15px]">{job.summary}</p>

        {job.highlights.length > 0 && (
          <ul className="mt-5 space-y-2.5 [@media(max-height:820px)]:mt-3 [@media(max-height:820px)]:space-y-1.5">
            {job.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] [@media(max-height:820px)]:text-sm text-ink-soft leading-relaxed [@media(max-height:820px)]:leading-snug">
                <span className="text-ink/40">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-6 [@media(max-height:820px)]:mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-forest">{job.tech}</p>
      </div>
    </article>
  )
}

function VerticalList({ jobs }: { jobs: Job[] }) {
  const { t } = useTranslation()

  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading index="01" label={t('experience')} title={t('experience_title')} />

        <div className="border-t border-ink/30">
          {jobs.map((job, index) => (
            <motion.article
              key={job.company + job.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="grid gap-4 border-b border-ink/30 py-10"
            >
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                <span className={job.current ? "text-forest" : undefined}>
                  {job.current ? `${job.period} — ${t('present')}` : job.period}
                </span>
                <CompanyLogo company={job.company} className="mt-5 mb-4 h-8 max-w-[160px] text-ink/80" />
                <p className="font-serif text-2xl normal-case tracking-tight text-ink">{job.company}</p>
                <p className="mt-1">{job.context}</p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-medium tracking-tight mb-3">{job.role}</h3>
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
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Github } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      category: "Ruby on Rails App",
      title: "Agile Deck",
      description: t('agile_deck_description'),
      link: "https://github.com/ViniciusLisboa07/agile-deck",
    },
    {
      category: "NodeJS Utility",
      title: "Text to Speech",
      description: t('nodejs_tts_description'),
      link: "https://github.com/ViniciusLisboa07/nodeJS-text-to-speech",
    },
    {
      category: "Ruby Compiler",
      title: "Lisb",
      description: t('lisb_description'),
      link: "https://github.com/ViniciusLisboa07/lisb",
    },
    {
      category: "Condominium System",
      title: "CondoGenius",
      description: t('condogenius_description'),
      link: "https://github.com/CondoGenius/condogenius",
    }
  ]

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading index="02" label={t('projects')} title={t('selected_work')} />

        <div className="border-t border-ink/30">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative grid grid-cols-12 items-baseline gap-4 border-b border-ink/30 px-2 md:px-6 py-8 md:py-10 transition-colors duration-300 hover:bg-navy hover:text-paper"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-sm text-ink-muted group-hover:text-paper/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 md:col-span-6">
                <h3 className="font-serif text-3xl md:text-5xl font-medium tracking-tight group-hover:italic">
                  {project.title}
                </h3>
              </div>
              <div className="col-span-10 col-start-3 md:col-span-4 md:col-start-auto">
                <span className="block mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-forest group-hover:text-paper/60">
                  {project.category}
                </span>
                <p className="text-ink-soft group-hover:text-paper/85">{project.description}</p>
              </div>
              <ArrowUpRight className="hidden md:block col-span-1 justify-self-end h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.a
          href="https://github.com/ViniciusLisboa07"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-ink waves-paper p-8 md:p-10 text-paper"
        >
          <div className="flex items-center gap-5">
            <Github className="h-8 w-8 shrink-0" />
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">{t('see_more_on')} GitHub</span>
              <p className="font-serif text-xl md:text-2xl">{t('explore_more_projects')}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors group-hover:bg-paper-dark">
            {t('visit_github')}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </motion.a>
      </div>
    </section>
  )
}

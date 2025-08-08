"use client"

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'

export default function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      category: "RUBY ON RAILS APP",
      title: "Agile Deck",
      description: t('agile_deck_description'),
      link: "https://github.com/ViniciusLisboa07/agile-deck",
    },
    {
      category: "NODEJS UTILITY",
      title: "Text to Speech",
      description: t('nodejs_tts_description'),
      link: "https://github.com/ViniciusLisboa07/nodeJS-text-to-speech",
    },
    {
      category: "RUBY COMPILER",
      title: "Lisb",
      description: t('lisb_description'),
      link: "https://github.com/ViniciusLisboa07/lisb",
    },
    {
      category: "CONDOMINIUM SYSTEM",
      title: "CondoGenius",
      description: t('condogenius_description'),
      link: "https://github.com/CondoGenius/condogenius",
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white text-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">{t('selected_work')}</h2>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 hover:border-gray-300 transition-colors duration-300">
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                        {project.category}
                      </span>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors duration-300 group/link"
                    >
                      <span className="text-sm font-medium">{t('view_project')}</span>
                      <svg 
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* GitHub Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 hover:border-gray-300 transition-colors duration-300">
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                      {t('see_more_on')}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">
                    GitHub
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base max-w-2xl">
                    {t('explore_more_projects')}
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-8">
                  <a
                    href="https://github.com/ViniciusLisboa07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors duration-300 group/link"
                  >
                    <span className="text-sm font-medium">{t('visit_github')}</span>
                    <svg 
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


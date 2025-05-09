"use client"

import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import Image from "next/image"
export default function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      title: t('agile_deck'),
      description: t('agile_deck_description'),
      image: "/images/card-game-656028_1280.jpg",
      link: "https://github.com/ViniciusLisboa07/agile-deck",
    },
    {
      title: t('nodejs_tts'),
      description: t('nodejs_tts_description'),
      image: "/images/microphone-2316268_1280.jpg",
      link: "https://github.com/ViniciusLisboa07/nodeJS-text-to-speech",
    },
    {
      title: t('lisb'),
      description: t('lisb_description'),
      image: "/images/1743724466504.jpeg",
      link: "https://github.com/ViniciusLisboa07/lisb",
    },
    {
      title: t('condogenius'),
      description: t('condogenius_description'),
      image: "/images/condo.jpg",
      link: "https://github.com/CondoGenius/condogenius",
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12"> {t('projects_title')} </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray rounded-lg overflow-hidden shadow-lg"
            >
              <Image src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                >
                  {t('view_project')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


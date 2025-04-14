"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useTranslation } from 'react-i18next'
import { Button } from "@/components/ui/button"
import React from "react"

export default function Presentation() {
  const { t } = useTranslation()

  return (
    <section id="presentation" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="px-12 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <h1 className="text-7xl md:text-7xl font-bold mb-4">
            {t('hello')} <span className="bg-yellow-300 px-2 py-0.5 font-bold">Vinicius Lisboa</span>
          </h1>
          <h2 className="text-4xl md:text-4xl font-black mb-12">
            {t('i_am')}
            <TypeAnimation
              sequence={[
                t('developer'), 2000,
                t('fullstack_developer'), 2000,
                t('rails_specialist'), 2000,
              ]}
              key={t('developer') + t('fullstack_developer') + t('rails_specialist')}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-gray-400"
            />
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md font-medium text-lg py-6 px-8" onClick={() => window.location.href = '#projects'}>
              {t('see_my_work')}
            </Button>
            <Button
              className="border-gray-300 text-gray-700 rounded-md font-medium text-lg py-6 px-8"
              variant="outline"
              onClick={() => window.location.href = '#about'}
            >
              {t('learn_more')}
            </Button>
          </div>
        </motion.div>
      </div>
      {/* <div className="container px-6 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
            {['React', 'Next.js', 'TypeScript', 'Ruby on Rails', 'TailwindCSS', 'Node.js'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium text-sm">{skill}</span>
            ))}
          </div>
          
          <div className="animate-bounce mt-8 flex justify-center">
            <div className="flex flex-col items-center text-gray-400 cursor-pointer" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
              <span className="text-sm mb-2">Scroll para ver mais</span>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div> */}
    </section>
  )
}


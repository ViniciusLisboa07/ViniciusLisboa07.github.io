"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslation } from 'react-i18next'
export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h2 className="text-3xl font-bold mb-6"> {t('about_me')} </h2>
          <p className="mb-4">
            {t('about_me_description')}
          </p>
          <p className="mb-4">
            {t('about_me_description_2')}
          </p>
          <p className="mb-6">
            {t('about_me_description_3')}
          </p>
            <motion.a
            href="https://drive.google.com/file/d/1aDUU9n5-bAtFSs8jtni3ShynIjzCv4vq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
            {t('download_resume')}
            </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <Image
            src="/images/982fb51a-e6ed-4ceb-98b6-3d36b9b5a453.jpg"
            alt="Vinícius Lisboa"
            width={400}
            height={400}
            className="rounded-full mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}


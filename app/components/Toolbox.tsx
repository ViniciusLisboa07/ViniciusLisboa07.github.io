"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import SectionHeading from "./SectionHeading"

const toolbox = [
  {
    title: "Frontend",
    items: ["ReactJS", "HTML5 & CSS3", "JavaScript & TypeScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Ruby on Rails", "RESTful APIs", "PostgreSQL & MySQL", "Docker", "Clean Code"],
  },
  {
    title: "Tools & Methods",
    items: ["Git & GitHub", "Agile Development", "CI/CD Pipelines", "Testing & QA", "Performance Optimization"],
  },
]

export default function Toolbox() {
  const { t } = useTranslation()

  return (
    <section id="toolbox" className="py-24 md:py-32 bg-forest waves-paper text-paper">
      <div className="container mx-auto max-w-6xl px-6">
        <SectionHeading index="03" label="Stack" title={t('toolbox_title')} tone="paper" />

        <div className="grid md:grid-cols-3 border-t border-paper/30">
          {toolbox.map(({ title, items }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b md:border-b-0 md:border-r last:border-r-0 border-paper/30 py-10 md:px-8 first:md:pl-0"
            >
              <span className="font-mono text-xs text-paper/50">{`0${index + 1}`}</span>
              <h3 className="font-serif text-3xl mt-2 mb-6">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 text-paper/85">
                    <span className="text-paper/40">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

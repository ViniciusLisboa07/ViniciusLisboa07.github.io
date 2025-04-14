"use client"

import { useTranslation } from "react-i18next"

export default function Toolbox() {
  const { t } = useTranslation()

  return (
    <section id="toolbox" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12">{t('toolbox_title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>ReactJS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>HTML5 & CSS3</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>JavaScript & TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>Responsive Design</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>Ruby on Rails</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>RESTful APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>PostgreSQL & MySQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>Docker</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>Clean Code</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Tools & Methods</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>Git & GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>Agile Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>CI/CD Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>Testing & QA</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  )
}

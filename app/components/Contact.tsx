"use client"

import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-8xl mx-auto">
          <div className="relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-600/20 animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {t('wanna_create')}<br />
                  {t('something')} <span className="text-green-200 font-black">{t('awesome')}</span><br />
                  {t('together')}
                </h2>
              </div>

              <div className="flex justify-center">
                <a 
                  href="mailto:viniciuslisboa1001@gmail.com"
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group"
                >
                  <span>{t('lets_talk')}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-white/90 text-sm">
                  {t('dont_like_buttons')} {t('reach_out_at')} {' '}
                  <a className="text-green-200 hover:text-green-100 transition-colors underline">
                    viniciuslisboa1001@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


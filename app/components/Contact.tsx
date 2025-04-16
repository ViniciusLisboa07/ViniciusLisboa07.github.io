"use client"

import { useTranslation } from 'react-i18next'
import { useState, FormEvent } from "react"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setLoading(true)
    setSuccess(false)
    setError(false)
    
    try {
      const result = await emailjs.send(
        'service_i0ycpfg',
        'template_88p9v9r',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'viniciuslisboa1001@gmail.com'
        },
        'IUxuM6orB8i84GUZ7'
      )
      
      console.log('Email enviado!', result.text)
      setSuccess(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Erro ao enviar:', error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">{t('work_together')}</h2>
        <p className="text-2xl text-gray-700 pb-12">
          {t('have_a_project_in_mind')}
        </p>
        <div className="flex justify-center">
          <form  onSubmit={handleSubmit} className="flex flex-col gap-4 w-full bg-white md:p-8 border border-gray-200 rounded-lg md:w-1/2">
            <div className="flex flex-col gap-2 md:text-left">
              <label htmlFor="name" className="text-lg text-gray-700">{t('name')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder={t('name')} 
                className="border border-gray-300 rounded-md p-2" 
                required 
              /> 
            </div>
            <div className="flex flex-col gap-2 md:text-left">
              <label htmlFor="email" className="text-lg text-gray-700">{t('email')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder={t('email')} 
                className="border border-gray-300 rounded-md p-2" 
                required 
              />
            </div>
            <div className="flex flex-col gap-2 md:text-left">
              <label htmlFor="message" className="text-lg text-gray-700">{t('message')}</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder={t('message')} 
                className="border border-gray-300 rounded-md p-2" 
                required 
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors inline-block mt-4 disabled:bg-gray-400"
            >
              {loading ? t('sending') : t('send')}
            </button>
            
            {success && (
              <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
                {t('message_sent')}
              </div>
            )}
            
            {error && (
              <div className="mt-4 p-2 bg-red-100 text-red-800 rounded">
                {t('message_error')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}


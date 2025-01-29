"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          Vamos trabalhar juntos!
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <p>
            Se você gostaria de entrar em contato comigo, por favor, envie-me um{" "}
            <a href="mailto:viniciuslisboa1001@gmail.com" className="text-gray-400 hover:text-white underline">
              e-mail
            </a>
          </p>
          <p>
            Você também pode me encontrar no{" "}
            <a
              href="https://www.linkedin.com/in/vin%C3%ADcius-lisboa-6347971a9/"
              className="text-gray-400 hover:text-white underline"
            >
              LinkedIn
            </a>
          </p>
          <p>
            Ou se preferir, me envie uma mensagem no{" "}
            <a href="https://wa.me/5541988073637" className="text-gray-400 hover:text-white underline">
              WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}


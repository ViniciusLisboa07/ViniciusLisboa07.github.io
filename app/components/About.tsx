"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
          <p className="mb-4">
            Olá! Sou um apaixonado desenvolvedor web fullstack, com uma jornada profissional especializada em Ruby on
            Rails, atuando com dedicação e entusiasmo na área há três anos.
          </p>
          <p className="mb-4">
            Desde que entrei no mundo da programação, descobri minha paixão por criar soluções digitais que não apenas
            funcionam, mas também encantam os usuários. Com habilidades sólidas em desenvolvimento front-end e back-end,
            sou capaz de traduzir conceitos criativos em produtos de software robustos e funcionais.
          </p>
          <p className="mb-6">
            Meu foco principal tem sido a plataforma Ruby on Rails, onde encontrei uma combinação perfeita entre
            produtividade e desempenho. Trabalhar com essa tecnologia me permitiu explorar meu potencial criativo
            enquanto construo aplicações escaláveis e de alta qualidade.
          </p>
            <motion.a
            href="https://drive.google.com/file/d/1aDUU9n5-bAtFSs8jtni3ShynIjzCv4vq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
            Baixar Currículo
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


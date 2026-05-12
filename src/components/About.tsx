'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="acerca-de" className="py-16 bg-[#f0f0e6]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Imagen real */}
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src="/acercade.png"
              alt="Acerca de CM HR Studio"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative border offset */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#fbd576] -z-10" />
          {/* Floating location tag */}
          <div className="absolute -bottom-4 left-0 md:-left-4 bg-[#fbd576] px-6 py-3 z-10">
            <p className="font-body text-xs uppercase tracking-widest text-[#2a2a2a]">
              Vicente López, Buenos Aires
            </p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[#9e2750] mb-4">
            Acerca de
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2a2a2a] mb-4 leading-tight">
            Camila Mauro Studio
          </h2>
          <div className="w-12 h-px bg-[#9e2750] mb-6" />
          <p className="font-body text-base text-[#2a2a2a]/70 leading-relaxed mb-4">
            CM – HR Studio nace en el año 2008 con el propósito de acompañar organizaciones y personas en procesos de desarrollo, aprendizaje y evolución humana.
          </p>
          <p className="font-body text-base text-[#2a2a2a]/70 leading-relaxed mb-8">
            Con una mirada cercana, estratégica y centrada en las personas, diseñamos experiencias de gestión del talento y capacitación que fortalecen equipos, potencian habilidades y generan culturas de trabajo más comprometidas, humanas y sostenibles.
          </p>
          {/* Pillars */}
          <div className="grid grid-cols-3 gap-4">
            {['Gestión de Talento', 'Capacitación', 'Desarrollo Humano'].map((p, i) => (
              <div
                key={i}
                className="border-t-2 border-[#9e2750] pt-4 text-center"
              >
                <p className="font-display text-sm italic text-[#9e2750]">{p}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="acerca-de" className="py-16 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-body text-xs uppercase tracking-[.3em] text-wine">Acerca de</span>
            <div className="flex-1 h-px bg-wine/20 max-w-[60px]" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-semibold text-wine mb-4 leading-tight">
            Conocenos
          </h2>

          <div className="flex gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-wine" />
            <span className="w-2.5 h-2.5 rounded-full bg-pink" />
            <span className="w-2.5 h-2.5 rounded-full bg-gold" />
          </div>

          <p className="font-body text-sm text-[#444] leading-relaxed mb-4">
            CM HR Studio entiende el poder del talento como motor para generar cambios reales.
          </p>
          <p className="font-body text-sm text-[#444] leading-relaxed mb-10">
            Un espacio orientado al desarrollo humano y organizacional, acompañando a cada organización en la construcción de culturas más sólidas, equipos comprometidos y liderazgos capaces de inspirar.
          </p>

          <a
            href="#servicios"
            className="inline-flex items-center gap-2 font-display text-base rounded-md bg-wine text-white px-7 py-3 hover:bg-wine-dark transition-all"
          >
            Más sobre nosotros <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center mt-6 md:mt-0"
        >
          {/* Rectángulo decorativo con borde dorado desplazado */}
          <div
            className="absolute"
            style={{
              top: '14px',
              right: '14px',
              bottom: '-14px',
              left: '-14px',
              borderRadius: '2.5rem 1rem',
              border: '1.5px solid #c9a96e',
              zIndex: 0,
            }}
          />

          {/* Imagen con esquinas redondeadas asimétricas */}
          <div
            className="relative z-10 overflow-hidden w-full"
            style={{ borderRadius: '2.5rem 1rem', aspectRatio: '4/3' }}
          >
            <Image
              src="/conocenos.png"
              alt="Equipo CM HR Studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Dots decorativos abajo a la derecha */}
          <div className="absolute bottom-6 right-2 md:-right-6 flex flex-col gap-2 z-20">
            <span className="w-3 h-3 rounded-full bg-pink" />
            <span className="w-3 h-3 rounded-full bg-sage" />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#c9a96e' }} />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

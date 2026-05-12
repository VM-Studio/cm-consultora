'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CalendarDays } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* BG image con transparencia */}
      <div className="absolute inset-0 z-0">
        <Image src="/fondo.png" alt="" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex items-center gap-5">
          {/* Ícono con fondo wine */}
          <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#73223e' }}>
            <CalendarDays size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#2a2a2a] leading-tight">
              ¿Listo para impulsar el talento<br className="hidden md:block" /> en tu organización?
            </h3>
            <p className="font-body text-sm text-[#666] mt-1">
              Hablemos de cómo podemos acompañarte.
            </p>
          </div>
        </div>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 font-body text-sm rounded-lg px-8 py-3.5 font-medium text-white transition-colors shrink-0 hover:opacity-90"
          style={{ backgroundColor: '#73223e' }}
        >
          Agendá una reunión <ArrowRight size={15} />
        </a>
      </motion.div>
    </section>
  )
}

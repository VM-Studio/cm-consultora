'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-offwhite"
    >
      {/* Background photo — lowest layer */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Frosted overlay to keep text readable */}
        <div className="absolute inset-0 bg-offwhite/70" />
      </div>

      {/* Geometric background shapes — above photo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-[#9e2750]/15 skew-x-[-8deg] translate-x-20" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#fbd576]/20 blur-3xl" />
        <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-[#f58fad]/15 blur-2xl" />
        {/* Dot pattern */}
        <svg className="absolute top-10 left-1/3 opacity-20" width="120" height="60">
          {Array.from({length: 5}).map((_,r) =>
            Array.from({length: 10}).map((_,c) => (
              <circle key={`${r}-${c}`} cx={c*12+6} cy={r*12+6} r="2" fill="#9e2750"/>
            ))
          )}
        </svg>
        {/* Arrow chevrons */}
        <svg className="absolute bottom-16 right-1/4 opacity-25" width="80" height="30">
          {[0,16,32].map(x => (
            <polyline key={x} points={`${x},0 ${x+8},15 ${x},30`} fill="none" stroke="#fbd576" strokeWidth="2"/>
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 flex items-center min-h-screen">
        {/* Text — centrado verticalmente, ocupa solo la mitad izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[#9e2750] mb-4">
            Hola, somos
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#9e2750] leading-none mb-4">
            CM HR Studio
          </h1>
          <p className="font-body text-sm uppercase tracking-[0.25em] text-[#676537] mb-6">
            Profesionales Senior de Capital Humano
          </p>
          <p className="font-display italic text-xl sm:text-2xl text-[#2a2a2a]/70 mb-10">
            Conectando talento, procesos y futuro.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="font-body text-sm uppercase tracking-widest bg-[#9e2750] text-white px-8 py-3 hover:bg-[#7d1f3f] transition-colors"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contacto"
              className="font-body text-sm uppercase tracking-widest border border-[#9e2750] text-[#9e2750] px-8 py-3 hover:bg-[#9e2750] hover:text-white transition-all"
            >
              Contactanos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

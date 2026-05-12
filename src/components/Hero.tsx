'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Users, Target, TrendingUp, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* BG image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover object-top md:object-center"
          priority
          unoptimized
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-28 md:pt-52 md:pb-44 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-lg"
        >
          <h1
            className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-8 md:mb-10"
            style={{ color: '#73223e' }}
          >
            Potenciamos personas, transformamos organizaciones
          </h1>
          <a
            href="#acerca-de"
            className="inline-flex items-center gap-2 font-body text-sm rounded-lg bg-wine text-white px-8 py-3.5 hover:bg-wine-dark transition-colors"
          >
            Conocé más <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>

      {/* Barra de valores */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-wine">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: <Users size={28} />,      title: 'Enfoque humano',      desc: 'Ponemos a las personas en el centro.' },
            { icon: <Target size={28} />,     title: 'Estrategia a medida', desc: 'Soluciones adaptadas a cada organización.' },
            { icon: <TrendingUp size={28} />, title: 'Resultados reales',   desc: 'Impacto medible en el desarrollo y desempeño.' },
            { icon: <Heart size={28} />,      title: 'Pasión y compromiso', desc: 'Acompañamos cada proceso con dedicación.' },
          ].map((v, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="shrink-0" style={{ color: '#e9ad69' }}>{v.icon}</span>
              <div>
                <p className="font-display text-[10px] md:text-[11px] font-medium text-white uppercase tracking-wide">{v.title}</p>
                <p className="font-body text-[9px] md:text-[10px] text-white/65 leading-relaxed mt-0.5">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

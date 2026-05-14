'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Users, Target, TrendingUp, Heart } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    desktopImg: '/hero.png',
    mobileImg: '/celular.png',
    title: (
      <>
        <span className="text-[1.07em]">Potenciando</span> personas,{' '}
        <span>transformando</span>{' '}
        <span className="text-[1.07em]">organizaciones.</span>
      </>
    ),
    subtitle: null,
  },
  {
    desktopImg: '/hero2.png',
    mobileImg: '/hero2.png',
    title: (
      <>
        Desarrollando <span className="text-[1.07em]">talento.</span>{' '}
        Impulsando <span className="text-[1.07em]">resultados.</span>
      </>
    ),
    subtitle: null,
  },
  {
    desktopImg: '/hero3.png',
    mobileImg: '/hero3.png',
    title: (
      <>
        <span className="text-[1.07em]">Soluciones</span> a medida,{' '}
        para cada <span className="text-[1.07em]">desafío.</span>
      </>
    ),
    subtitle: null,
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="home" className="relative md:h-[110vh] md:flex md:items-start md:overflow-hidden mb-0">

      {/* ── DESKTOP: imagen de fondo full-screen con carrusel ── */}
      <div className="absolute inset-0 z-0 hidden md:block" style={{ top: 0 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].desktopImg}
              alt="Hero background"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── MOBILE: carrusel celular.png / celular2.png / celular3.png ── */}
      <div className="relative md:hidden w-full">
        <div className="h-14.5" />
        {/* Imagen */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={['/celular.png', '/celular2.png', '/celular3.png'][current]}
                alt="Hero background"
                width={800}
                height={1100}
                className="w-full h-auto block"
                priority
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Título centrado con sombra blanca */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center" style={{ top: '58px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 -z-10 blur-3xl rounded-full scale-x-100 scale-y-150"
                  style={{ background: 'rgba(255,255,255,1)' }}
                />
                <div
                  className="absolute inset-0 -z-10 blur-xl rounded-full scale-x-90 scale-y-125"
                  style={{ background: 'rgba(255,255,255,1)' }}
                />
                <h1 className="font-display text-4xl font-semibold leading-tight mb-8" style={{ color: '#73223e' }}>
                  {slides[current].title}
                </h1>
              </div>
              <a
                href="#acerca-de"
                className="inline-flex items-center gap-2 font-display text-base rounded-md bg-wine text-white px-12 py-3.5 hover:bg-wine-dark transition-colors"
              >
                Conocé más <ArrowRight size={15} />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Dots mobile */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-wine scale-125' : 'bg-wine/40'}`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP: contenido (título + botón) ── */}
      <div className="relative z-10 hidden md:block w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full px-6 top-52 left-0 pl-12"
          >
            <div className="max-w-lg">
              <div className="relative">
                <div
                  className="absolute inset-0 -z-10 blur-3xl rounded-full scale-x-100 scale-y-150"
                  style={{ background: 'rgba(255,255,255,1)' }}
                />
                <div
                  className="absolute inset-0 -z-10 blur-xl rounded-full scale-x-90 scale-y-125"
                  style={{ background: 'rgba(255,255,255,1)' }}
                />
                <h1 className="font-display text-5xl font-semibold leading-tight mb-10" style={{ color: '#73223e' }}>
                  {slides[current].title}
                </h1>
                {slides[current].subtitle && (
                  <p className="font-body text-base leading-relaxed mb-10" style={{ color: '#73223e' }}>
                    {slides[current].subtitle}
                  </p>
                )}
              </div>
              <a
                href="#acerca-de"
                className="inline-flex items-center gap-2 font-display text-base rounded-md bg-wine text-white px-12 py-3.5 hover:bg-wine-dark transition-colors"
              >
                Conocé más <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Flecha izquierda desktop */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 transition-opacity hover:opacity-70"
          aria-label="Anterior"
        >
          <ArrowLeft size={26} color="#73223e" />
        </button>

        {/* Flecha derecha desktop */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 transition-opacity hover:opacity-70"
          aria-label="Siguiente"
        >
          <ArrowRight size={26} color="#73223e" />
        </button>

        {/* Dots desktop */}
        <div className="absolute bottom-28 left-6 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-wine scale-125' : 'bg-wine/40'}`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Barra de valores ── */}
      <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 z-10 bg-wine">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: <Users size={24} />,      title: 'Enfoque humano',      desc: 'Ponemos a las personas en el centro.' },
            { icon: <Target size={24} />,     title: 'Estrategia a medida', desc: 'Soluciones adaptadas a cada organización.' },
            { icon: <TrendingUp size={24} />, title: 'Resultados reales',   desc: 'Impacto medible en el desarrollo y desempeño.' },
            { icon: <Heart size={24} />,      title: 'Pasión y compromiso', desc: 'Acompañamos cada proceso con dedicación.' },
          ].map((v, i) => (
            <div key={i} className="flex items-center gap-3 transition-transform duration-300 hover:scale-125 cursor-default origin-left md:origin-center">
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

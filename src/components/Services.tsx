'use client'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Gestión de Talento',
    color: '#9e2750',
    numColor: '#f0d0da',
    desc: 'Acompañamos organizaciones en selección, desarrollo y retención con una mirada estratégica y centrada en las personas.',
    items: [
      'Selección y evaluación de perfiles',
      'Entrevistas por competencias',
      'Onboarding y experiencia del colaborador',
      'Desarrollo de talento y engagement',
      'Employer Branding y clima organizacional',
    ],
  },
  {
    num: '02',
    title: 'Capacitación & Formación',
    color: '#676537',
    numColor: '#dfe0c5',
    desc: 'Diseñamos experiencias de aprendizaje a medida para fortalecer equipos y generar culturas de trabajo sostenibles.',
    items: [
      'Diseño de programas de capacitación',
      'Talleres y experiencias de aprendizaje',
      'Formación en Recursos Humanos',
      'Desarrollo de habilidades blandas',
      'Capacitación para instituciones educativas',
    ],
  },
  {
    num: '03',
    title: 'Grafología Laboral',
    color: '#c46d31',
    numColor: '#f5dfc8',
    desc: 'Herramienta especializada que permite profundizar en competencias, estilos vinculares y perfiles humanos en procesos de selección.',
    items: [
      'Evaluaciones grafológicas aplicadas a selección',
      'Análisis de competencias y estilos vinculares',
      'Informes complementarios para evaluación de perfiles',
      'Apoyo para procesos de talento y gestión humana',
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[#9e2750] mb-4">
            Lo que ofrecemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2a2a2a]">
            Nuestros Servicios
          </h2>
          <div className="w-10 h-px bg-[#9e2750] mx-auto mt-6" />
        </motion.div>

        {/* Cards — sin bordes entre columnas, gap con espacio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="px-8 py-10 bg-white hover:shadow-sm transition-shadow duration-300"
            >
              {/* Number */}
              <p
                className="font-display text-7xl font-light leading-none mb-4 select-none"
                style={{ color: s.numColor }}
              >
                {s.num}
              </p>

              {/* Title */}
              <h3
                className="font-display text-2xl font-light mb-3"
                style={{ color: s.color }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p className="font-body text-xs text-[#2a2a2a]/60 leading-relaxed mb-6">
                {s.desc}
              </p>

              {/* Thin accent line */}
              <div className="w-8 h-px mb-5" style={{ backgroundColor: s.color + '60' }} />

              {/* Items */}
              <ul>
                {s.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 py-2.5 border-b border-[#f0ebe6] last:border-none"
                  >
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: s.color, color: s.color }}
                    >
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="2,5 4.5,7.5 8,3" />
                      </svg>
                    </span>
                    <span className="font-body text-xs text-[#2a2a2a]/70 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="font-body text-sm uppercase tracking-widest border border-[#9e2750] text-[#9e2750] px-10 py-3 hover:bg-[#9e2750] hover:text-white transition-all"
          >
            Hablemos de tu proyecto
          </a>
        </motion.div>

      </div>
    </section>
  )
}

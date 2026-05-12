'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronUp, Users, GraduationCap, FileText } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon:    Users,
    iconBg:  '#73223e',
    title:   'Gestión de Talento',
    desc:    'Atraemos, seleccionamos y desarrollamos el talento que tu organización necesita para crecer.',
    img:     '/talento.png',
    slug:    'gestion-de-talento',
    items: [
      'Selección y evaluación de perfiles.',
      'Entrevistas por competencias.',
      'Onboarding y experiencia del colaborador.',
      'Desarrollo de talento y engagement.',
      'Employer Branding y clima organizacional.',
    ],
  },
  {
    icon:    GraduationCap,
    iconBg:  '#676537',
    title:   'Capacitación & Formación',
    desc:    'Diseñamos experiencias de aprendizaje que potencian habilidades e impulsan resultados.',
    img:     '/capacitacion.png',
    slug:    'capacitacion',
    items: [
      'Diseño de programas de capacitación.',
      'Talleres y experiencias de aprendizaje.',
      'Formación en Recursos Humanos.',
      'Desarrollo de habilidades blandas.',
      'Capacitación para instituciones educativas.',
    ],
  },
  {
    icon:    FileText,
    iconBg:  '#c46d31',
    title:   'Grafología Laboral',
    desc:    'Herramienta científica para evaluar competencias y potenciar la toma de decisiones.',
    img:     '/grafologia.png',
    slug:    'grafologia',
    items: [
      'Evaluaciones grafológicas aplicadas a selección y desarrollo.',
      'Análisis de competencias y estilos vinculares.',
      'Informes complementarios para evaluación de perfiles.',
      'Herramienta de apoyo para procesos de talento y gestión humana.',
    ],
  },
]

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="servicios" className="py-16 md:py-28" style={{ backgroundColor: '#f8efe5' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-wine/30" />
            <span className="font-body text-xs uppercase tracking-[.3em] text-wine">Servicios</span>
            <div className="h-px w-10 bg-wine/30" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#2a2a2a]">
            ¿Cómo podemos ayudarte?
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-2.5 h-2.5 rounded-full bg-wine" />
            <span className="w-2.5 h-2.5 rounded-full bg-pink" />
            <span className="w-2.5 h-2.5 rounded-full bg-gold" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon
            const isOpen = expanded === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden group flex flex-col"
              >
                {/* Imagen */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Ícono centrado flotante */}
                <div className="flex justify-center -mt-7 relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                    style={{ backgroundColor: s.iconBg }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex flex-col items-center text-center px-8 pt-4 pb-8 flex-1">
                  <h3 className="font-display text-2xl font-semibold text-wine mb-3">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-[#666] leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  {/* Bullet points desplegables */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full text-left mb-6 space-y-2 overflow-hidden"
                      >
                        {s.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.iconBg }} />
                            <span className="font-body text-xs text-[#555] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="mt-auto inline-flex items-center gap-1.5 font-body text-sm text-wine border border-wine/50 rounded-lg px-6 py-2.5 hover:bg-wine hover:text-white transition-all"
                  >
                    {isOpen ? (
                      <><ChevronUp size={14} /> Cerrar</>
                    ) : (
                      <>Ver más <ArrowRight size={14} /></>
                    )}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

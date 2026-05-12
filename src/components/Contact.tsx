'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import CVUpload from './CVUpload'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contacto" className="py-16 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-xs uppercase tracking-[.3em] text-wine">Contacto</span>
            <div className="h-px w-10 bg-wine/20" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-wine mb-2">
            Estamos para acompañarte
          </h2>
          <div className="flex gap-2 mt-3">
            <span className="w-2.5 h-2.5 rounded-full bg-wine" />
            <span className="w-2.5 h-2.5 rounded-full bg-pink" />
            <span className="w-2.5 h-2.5 rounded-full bg-gold" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Izquierda: datos + form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Datos de contacto */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              {[
                { icon: Phone,  label: 'Teléfono / WhatsApp', val: '+54 11 5181 6206',    href: 'https://wa.me/541151816206' },
                { icon: Mail,   label: 'Email',               val: 'hola@cmhrstudio.com', href: 'mailto:hola@cmhrstudio.com' },
                { icon: MapPin, label: 'Ubicación',           val: 'Buenos Aires, Argentina', href: '#' },
              ].map((c, i) => {
                const Icon = c.icon
                return (
                  <a key={i} href={c.href} className="flex sm:flex-col items-center sm:text-center gap-3 sm:gap-3 p-4 bg-white border border-pink/20 hover:border-wine/30 transition-colors group">
                    <div className="w-12 h-12 rounded-full border border-wine/20 flex items-center justify-center group-hover:bg-wine/5 transition-colors shrink-0">
                      <Icon size={18} className="text-wine" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-wider text-[#999] mb-0.5">{c.label}</p>
                      <p className="font-body text-xs text-[#2a2a2a]">{c.val}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Formulario */}
            {status === 'sent' ? (
              <div className="bg-white border border-sage/30 p-8">
                <p className="font-display text-2xl text-olive mb-1">¡Mensaje recibido!</p>
                <p className="font-body text-sm text-[#555]">Te respondemos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: 'name',  label: 'Nombre',            type: 'text'  },
                  { id: 'email', label: 'Correo electrónico', type: 'email' },
                ].map(f => (
                  <div key={f.id}>
                    <input
                      type={f.type}
                      required
                      placeholder={f.label}
                      value={form[f.id as 'name'|'email']}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      className="w-full px-4 py-3 font-body text-sm border border-[#ddd] bg-white focus:outline-none focus:border-wine transition-colors placeholder:text-[#bbb]"
                    />
                  </div>
                ))}
                <textarea
                  required
                  rows={4}
                  placeholder="Mensaje"
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 font-body text-sm border border-[#ddd] bg-white focus:outline-none focus:border-wine transition-colors resize-none placeholder:text-[#bbb]"
                />

                <div>
                  <CVUpload />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full font-body text-sm uppercase tracking-widest bg-wine text-white py-3.5 hover:bg-wine-dark transition-colors disabled:opacity-50"
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Derecha: foto oficina */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[280px] md:min-h-[500px] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl overflow-hidden"
            style={{ backgroundColor: '#f8efe5' }}
          >
            <Image
              src="/contacto.png"
              alt="Oficina CM HR Studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-wine/5" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

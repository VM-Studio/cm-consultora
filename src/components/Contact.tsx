'use client'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [cvFile, setCvFile] = useState<File | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

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
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-28 bg-[#faf8f6]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* Formulario — izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[#9e2750] mb-4">
            Escribinos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2a2a2a] mb-6">
            Contacto
          </h2>
          <div className="w-12 h-px bg-[#9e2750] mb-10" />

          {status === 'sent' ? (
            <div className="bg-[#a7a255]/10 border border-[#a7a255]/30 p-8">
              <p className="font-display text-2xl text-[#676537] mb-2">¡Mensaje recibido!</p>
              <p className="font-body text-sm text-[#2a2a2a]/70">
                Te respondemos a la brevedad. También podés escribirnos por WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name',  label: 'Nombre',            type: 'text'  },
                { id: 'email', label: 'Correo electrónico', type: 'email' },
              ].map(f => (
                <div key={f.id}>
                  <label className="font-body text-xs uppercase tracking-wider text-[#2a2a2a]/60 mb-2 block">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    required
                    value={form[f.id as 'name'|'email']}
                    onChange={e => setForm(prev => ({ ...prev, [f.id]: e.target.value }))}
                    className="w-full border border-[#2a2a2a]/15 px-4 py-3 font-body text-sm focus:outline-none focus:border-[#9e2750] transition-colors bg-white"
                  />
                </div>
              ))}

              <div>
                <label className="font-body text-xs uppercase tracking-wider text-[#2a2a2a]/60 mb-2 block">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full border border-[#2a2a2a]/15 px-4 py-3 font-body text-sm focus:outline-none focus:border-[#9e2750] transition-colors bg-white resize-none"
                />
              </div>

              {/* CV opcional */}
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-[#2a2a2a]/60 mb-2 block">
                  Adjuntar CV <span className="normal-case text-[#2a2a2a]/40">(opcional)</span>
                </label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="w-full border border-dashed border-[#2a2a2a]/20 px-4 py-4 flex items-center gap-3 cursor-pointer hover:border-[#9e2750]/50 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9e2750" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/>
                    <line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  <span className="font-body text-sm text-[#2a2a2a]/50">
                    {cvFile ? cvFile.name : 'Seleccioná tu CV (PDF, DOC — máx. 5 MB)'}
                  </span>
                  {cvFile && (
                    <button
                      type="button"
                      onClick={e => { e.stopPropagation(); setCvFile(null) }}
                      className="ml-auto font-body text-xs text-[#9e2750]/60 hover:text-[#9e2750]"
                    >
                      Quitar
                    </button>
                  )}
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={e => setCvFile(e.target.files?.[0] ?? null)}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full font-body text-sm uppercase tracking-widest bg-[#9e2750] text-white py-4 hover:bg-[#7d1f3f] transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {status === 'error' && (
                <p className="font-body text-sm text-red-500 text-center">
                  Hubo un error. Por favor intentá de nuevo.
                </p>
              )}
            </form>
          )}
        </motion.div>

        {/* Mapa — derecha */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full h-full flex flex-col"
        >
          <div className="flex-1 min-h-60 border border-[#e8e0d8] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.85!2d-58.503!3d-34.527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1f6f03d3d3d%3A0x1234567890abcdef!2sFlorida%2C%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '240px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación CM HR Studio — Florida, Vicente López"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

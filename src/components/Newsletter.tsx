'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Separator = () => (
  <div className="flex items-center gap-5 px-12">
    <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#d4a0b0] to-transparent" />
    <div className="w-2 h-2 rotate-45 bg-[#9e2750] opacity-40 shrink-0" />
    <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#d4a0b0] to-transparent" />
  </div>
)

export default function Newsletter() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch { setStatus('error') }
  }

  return (
    <section className="bg-[#fdf0f4]">
      <Separator />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-8 md:gap-14 flex-wrap px-6 py-16"
      >
        {/* Texto */}
        <div className="text-center md:text-left">
          <p className="font-body text-[10px] uppercase tracking-[.35em] text-[#9e2750]/80 mb-1.5">
            Newsletter
          </p>
          <h2 className="font-display text-3xl font-light text-[#2a2a2a] leading-snug">
            Conectate con el mundo<br />
            <em className="italic text-[#9e2750]">del talento y las personas</em>
          </h2>
        </div>

        {/* Form */}
        <div>
          {status === 'sent' ? (
            <p className="font-display italic text-xl text-[#9e2750]">
              ¡Gracias por suscribirte!
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-64 px-4 py-3 font-body text-sm font-light border border-[#9e2750] bg-white text-[#2a2a2a] placeholder:text-[#c4a0aa] focus:outline-none focus:border-[#7d1f3f]"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-3 font-body text-[10.5px] uppercase tracking-widest border border-[#9e2750] border-l-0 text-[#9e2750] bg-linear-to-r from-[#fde8f0] to-[#fbd5e4] hover:from-[#9e2750] hover:to-[#9e2750] hover:text-white transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
                >
                  {status === 'sending' ? '...' : 'Suscribirme'}
                </button>
              </div>
              {status === 'error' && (
                <p className="font-body text-xs text-red-400 mt-2 text-right">
                  Hubo un error. Intentá de nuevo.
                </p>
              )}
              <p className="font-body text-[10px] text-[#b08090] tracking-wide mt-2 text-right">
                Sin spam · Podés darte de baja cuando quieras
              </p>
            </form>
          )}
        </div>
      </motion.div>

      <Separator />
    </section>
  )
}

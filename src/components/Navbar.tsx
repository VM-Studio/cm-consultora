'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home',       href: '#home' },
  { label: 'Acerca de',  href: '#acerca-de' },
  { label: 'Servicios',  href: '#servicios' },
  { label: 'Contacto',   href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      scrolled ? 'shadow-sm py-1 md:py-2' : 'py-2 md:py-3'
    }`} style={{ backgroundColor: '#f6ebde' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="CM HR Studio"
            width={62}
            height={62}
            className="object-contain md:w-20 md:h-20"
          />
          <div>
            <p className="font-display font-semibold text-wine text-lg md:text-xl leading-none">CM HR Studio</p>
            {/* Tagline: oculto en mobile, visible en desktop */}
            <p className="hidden md:block font-body text-[10px] text-[#73223e]/60 tracking-wide leading-none mt-1">
              Gestión de Talento | Capacitación | Desarrollo Humano
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-lg font-semibold text-[#73223e] hover:text-[#5a1a30] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-wine p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-6 flex flex-col gap-5 border-t border-pink/20">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-body text-sm text-[#2a2a2a] hover:text-wine transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

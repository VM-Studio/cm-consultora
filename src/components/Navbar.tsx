'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home',      href: '#home' },
  { label: 'Acerca de', href: '#acerca-de' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-offwhite shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo — coloca /public/logo.png */}
        <Link href="#home">
          <Image
            src="/logo.png"
            alt="CM HR Studio"
            width={110}
            height={110}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm uppercase tracking-widest text-[#2a2a2a] hover:text-wine transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="font-body text-sm uppercase tracking-widest border border-wine text-wine px-5 py-2 hover:bg-wine hover:text-white transition-all"
          >
            Enviá tu CV
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-offwhite px-6 py-6 flex flex-col gap-6 border-t border-pink/20">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm uppercase tracking-widest text-[#2a2a2a]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="font-body text-sm uppercase tracking-widest border border-wine text-wine px-5 py-2 text-center"
          >
            Enviá tu CV
          </a>
        </div>
      )}
    </header>
  )
}

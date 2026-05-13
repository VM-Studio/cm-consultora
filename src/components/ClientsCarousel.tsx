'use client'
import Image from 'next/image'

const logos = [
  { src: '/logos/AlpargatasLogo.png',                    alt: 'Alpargatas' },
  { src: '/logos/Cargilllogo.png',                       alt: 'Cargill' },
  { src: '/logos/EYLogo.png',                            alt: 'EY' },
  { src: '/logos/IceaLogo.png',                          alt: 'Icea' },
  { src: '/logos/LicSNovoa.png',                         alt: 'Lic S. Novoa' },
  { src: '/logos/LouisDreyfus.png',                      alt: 'Louis Dreyfus' },
  { src: '/logos/SiembraTuFuturoLaboral.png',            alt: 'Siembra Tu Futuro Laboral' },
  { src: '/logos/logoAccenture.png',                     alt: 'Accenture' },
  { src: '/logos/logoAdeS.png',                          alt: 'AdeS' },
  { src: '/logos/logoArcor.png',                         alt: 'Arcor' },
  { src: '/logos/logoEdenor.png',                        alt: 'Edenor' },
  { src: '/logos/logoEveris.png',                        alt: 'Everis' },
  { src: '/logos/logoIBM.png',                           alt: 'IBM' },
  { src: '/logos/logoMinisterioDesarrolloproductivo.png', alt: 'Ministerio' },
  { src: '/logos/logoSyngenta.png',                      alt: 'Syngenta' },
  { src: '/logos/logoproduban.png',                      alt: 'Produban' },
  { src: '/logos/santanderisbanlogo.png',                alt: 'Santander' },
]

// Duplicamos para loop infinito sin salto
const track = [...logos, ...logos]

export default function ClientsCarousel() {
  return (
    <div className="w-full py-8">
      {/* Título */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px flex-1 max-w-20" style={{ backgroundColor: '#73223e30' }} />
        <span className="font-body text-[10px] uppercase tracking-[.35em]" style={{ color: '#73223e' }}>
          Nuestros clientes
        </span>
        <div className="h-px flex-1 max-w-20" style={{ backgroundColor: '#73223e30' }} />
      </div>

      {/* Carrusel */}
      <div className="overflow-hidden relative">
        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #f8efe5, transparent)' }} />
        {/* Fade derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #f8efe5, transparent)' }} />

        <div
          className="flex gap-10 items-center"
          style={{
            animation: 'scroll-logos 40s linear infinite',
            width: 'max-content',
          }}
        >
          {track.map((logo, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center h-10 w-24 relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

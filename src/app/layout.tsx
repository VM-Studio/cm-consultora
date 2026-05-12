import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cmhrstudio.com'),
  title: 'CM HR Studio | Gestión de Talento & Desarrollo Humano',
  description: 'Consultoría especializada en Gestión de Talento, Capacitación y Desarrollo Humano en Buenos Aires, Argentina.',
  keywords: 'recursos humanos, selección de personal, capacitación, desarrollo humano, talento, Buenos Aires',
  openGraph: {
    title: 'CM HR Studio',
    description: 'Gestión de Talento | Capacitación | Desarrollo Humano',
    url: 'https://www.cmhrstudio.com',
    siteName: 'CM HR Studio',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CM HR Studio',
    description: 'Gestión de Talento | Capacitación | Desarrollo Humano',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.cmhrstudio.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

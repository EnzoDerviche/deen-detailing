import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Deen Detailing | Detailing automotriz en Berazategui',
    template: '%s | Deen Detailing',
  },
  description:
    'Deen Detailing: estudio de detailing automotriz en Berazategui, Buenos Aires. Lavado premium, limpieza de interiores, abrillantado, tratamiento acrílico y cerámico. Reservá tu turno por WhatsApp.',
  keywords: [
    'deen detailing',
    'detailing berazategui',
    'detailing automotriz berazategui',
    'lavado premium auto berazategui',
    'tratamiento ceramico berazategui',
    'tratamiento acrilico auto berazategui',
    'abrillantado autos berazategui',
    'pulido de autos berazategui',
    'limpieza de interiores auto berazategui',
    'detailing quilmes',
    'detailing hudson',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: 'Deen Detailing',
    title: 'Deen Detailing | Detailing automotriz en Berazategui',
    description:
      'Servicios de detailing automotriz en Berazategui, Buenos Aires. Lavado premium, tratamientos cerámicos y más. Reservá tu turno por WhatsApp.',
    images: [
      {
        url: '/deen-logo.png',
        width: 1080,
        height: 1080,
        alt: 'Deen Detailing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deen Detailing | Detailing automotriz en Berazategui',
    description:
      'Lavado premium, limpieza de interiores, abrillantado y tratamientos de pintura.',
    images: ['/deen-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'automotive',
  icons: {
    icon: '/deen-logo.png',
    apple: '/deen-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

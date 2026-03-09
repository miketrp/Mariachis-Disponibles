import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Mariachis Bogotá Élite | Servicio Profesional de Mariachis en Bogotá',
  description: 'Contrata los mejores mariachis en Bogotá. Serenatas, cumpleaños, bodas, quinceañeras y eventos corporativos. Más de 10 años de experiencia. Precios desde $350.000.',
  authors: [{ name: 'Mariachis Bogotá Élite' }],
  openGraph: {
    title: 'Mariachis Bogotá Élite - Servicio Profesional de Mariachis',
    description: 'Los mejores mariachis de Bogotá para tu evento. Serenatas, bodas, cumpleaños, quinceañeras y eventos corporativos.',
    url: 'https://mariachisbogota.com',
    siteName: 'Mariachis Bogotá Élite',
    images: [
      {
        url: 'https://mariachisbogota.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mariachis Bogotá Élite',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariachis Bogotá Élite | Servicio Profesional de Mariachis en Bogotá',
    description: 'Contrata mariachis profesionales en Bogotá. Serenatas, bodas, quinceañeras, eventos corporativos.',
    images: ['https://mariachisbogota.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://mariachisbogota.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
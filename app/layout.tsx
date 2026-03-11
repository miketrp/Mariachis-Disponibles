import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Analytics from '@/components/Analytics'
import SocialButtons from '@/components/SocialButtons'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://mariachisdisponiblesbogota.com'),
  title: 'Mariachis en Bogotá | Servicio Profesional de Mariachis - Mariachis Disponibles',
  description: 'Contrata los mejores mariachis en Bogotá. Serenatas, cumpleaños, bodas, quinceañeras y eventos corporativos. Más de 10 años de experiencia. Precios desde $350.000.',
  authors: [{ name: 'Mariachis Disponibles Bogotá' }],
  openGraph: {
    title: 'Mariachis Disponibles - Servicio Profesional de Mariachis en Bogotá',
    description: 'Los mejores mariachis de Bogotá para tu evento. Serenatas, bodas, cumpleaños, quinceañeras y eventos corporativos.',
    url: 'https://mariachisdisponiblesbogota.com',
    siteName: 'Mariachis Disponibles Bogotá',
    images: [
      {
        url: 'https://mariachisdisponiblesbogota.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mariachis Disponibles Bogotá',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariachis en Bogotá | Servicio Profesional de Mariachis - Mariachis Disponibles',
    description: 'Contrata mariachis profesionales en Bogotá. Serenatas, bodas, quinceañeras, eventos corporativos.',
    images: ['https://mariachisdisponiblesbogota.com/twitter-image.jpg'],
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
        <link rel="canonical" href="https://mariachisdisponiblesbogota.com" />
        <Analytics />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <SocialButtons />
      </body>
    </html>
  )
}
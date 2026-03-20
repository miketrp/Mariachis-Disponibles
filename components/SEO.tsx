"use client"

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  noIndex?: boolean
}

export default function SEO({
  title = 'Mariachis en Bogotá | Servicio Profesional de Mariachis - Mariachis Disponibles',
  description = 'Contrata los mejores mariachis en Bogotá. Serenatas, cumpleaños, bodas, quinceañeras y eventos corporativos. Precios desde $350.000. Más de 10 años de experiencia. Cotiza ahora por WhatsApp al +573214388706.',
  keywords = ['mariachis bogota', 'mariachis en bogota', 'serenatas bogota', 'mariachis baratos bogota', 'grupos de mariachis bogota', 'precio mariachis bogota', 'mariachis disponibles bogota', 'mariachis disponibles', 'contratar mariachis bogota', 'mariachis para bodas bogota', 'mariachis para quinceañeras bogota', 'mariachis para cumpleaños bogota', 'mariachis profesionales bogota'],
  canonicalUrl = 'https://mariachisdisponiblesbogota.com',
  ogImage = 'https://mariachisdisponiblesbogota.com/images/Portada Mariachi.png',
  ogType = 'website',
  noIndex = false
}: SEOProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Actualizar el título del documento
    document.title = title
    
    // Actualizar meta descripción
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
    
    // Actualizar meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '))
    }
    
    // Actualizar canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl)
    }
    
    // Actualizar Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', description)
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]')
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage)
    }
    
    // Actualizar Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title)
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description)
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage)
    }
    
    // Agregar meta robots
    if (noIndex) {
      const robotsMeta = document.querySelector('meta[name="robots"]')
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'noindex, nofollow')
      }
    }
    
    // === SCRIPT DE LOCALBUSINESS PARA MOTORES DE BÚSQUEDA ===
    const localBusinessScript = document.createElement('script')
    localBusinessScript.type = 'application/ld+json'
    localBusinessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Mariachis Disponibles Bogotá",
      "url": "https://mariachisdisponiblesbogota.com/",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=100090928906987",
        "https://www.instagram.com/mariachi.bogota/",
        "https://www.youtube.com/@mariachisdebogota",
        "https://www.tiktok.com/@mariachibogota81"
      ],
      "telephone": "+573214388706",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Carrera 12H bis A # 27b-16 sur",
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "postalCode": "111111",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 4.711,
        "longitude": -74.0721
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      },
      "priceRange": "$$$",
      "areaServed": [
        {
          "@type": "City",
          "name": "Bogotá"
        },
        {
          "@type": "City",
          "name": "Soacha"
        }
      ]
    })
    document.head.appendChild(localBusinessScript)
    
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, pathname])

  return null
}

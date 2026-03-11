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
    
    // Agregar estructura de datos JSON-LD adicional
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (!existingScript) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Mariachis Disponibles Bogotá",
        "url": canonicalUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://mariachisdisponiblesbogota.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      })
      document.head.appendChild(script)
    }
    
    // Agregar datos de navegación breadcrumb
    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://mariachisdisponiblesbogota.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Paquetes",
          "item": "https://mariachisdisponiblesbogota.com/#paquetes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Galería",
          "item": "https://mariachisdisponiblesbogota.com/#galeria"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contacto",
          "item": "https://mariachisdisponiblesbogota.com/#contacto"
        }
      ]
    })
    document.head.appendChild(breadcrumbScript)
    
    // Agregar datos de FAQ si es la página principal
    if (pathname === '/') {
      const faqScript = document.createElement('script')
      faqScript.type = 'application/ld+json'
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta contratar mariachis en Bogotá?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los precios de mariachis en Bogotá varían según el paquete. Ofrecemos paquetes desde $200.000 COP con 4 músicos y 6 canciones, hasta paquetes VIP con 8 músicos y 12 canciones por $400.000 COP."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué incluye el servicio de mariachis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nuestros servicios incluyen músicos profesionales con trajes típicos, repertorio de más de 100 canciones, equipo de sonido profesional, y en algunos paquetes incluimos obsequios como ramos de flores o champagne."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cómo puedo reservar mariachis para mi evento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Puedes reservar fácilmente a través de WhatsApp al +573214388706 o llamando directamente. También puedes cotizar online a través de nuestro formulario web. Respondemos en menos de 30 minutos."
            }
          }
        ]
      })
      document.head.appendChild(faqScript)
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, pathname])

  return null
}
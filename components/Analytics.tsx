'use client'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { useEffect } from 'react'

export default function Analytics() {
  useEffect(() => {
    // Google Analytics - GA4
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-52SS2FMHXP'
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-52SS2FMHXP');
    `
    document.head.appendChild(script2)

    // Facebook Pixel
    const script3 = document.createElement('script')
    script3.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `
    document.head.appendChild(script3)

    // Schema.org LocalBusiness
    const script4 = document.createElement('script')
    script4.type = 'application/ld+json'
    script4.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Mariachis Bogotá Élite",
      "description": "Servicio profesional de mariachis en Bogotá para eventos sociales y corporativos",
      "url": "https://mariachisbogota.com",
      "telephone": "+57-321-438-8706",
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
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Paquetes de Mariachis",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Serenata Express",
              "description": "4 músicos, 6 canciones (Completas)"
            },
            "price": "350000",
            "priceCurrency": "COP"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Experiencia VIP",
              "description": "5 músicos, 10 canciones (Completas) con decoración y video"
            },
            "price": "700000",
            "priceCurrency": "COP"
          }
        ]
      }
    })
    document.head.appendChild(script4)

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1)
      document.head.removeChild(script2)
      document.head.removeChild(script3)
      document.head.removeChild(script4)
    }
  }, [])

  return (
    <>
      {/* Vercel Analytics */}
      <VercelAnalytics />
    </>
  )
}

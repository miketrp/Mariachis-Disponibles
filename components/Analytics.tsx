'use client'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

export default function Analytics() {
  return (
    <>
      {/* Vercel Analytics */}
      <VercelAnalytics />
      
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
        }}
      />
      
      {/* Facebook Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      />
      
      {/* Schema.org LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
        }}
      />
    </>
  )
}
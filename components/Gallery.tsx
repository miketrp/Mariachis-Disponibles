"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    src: '/images/590414226_17917616082209925_1026574243202176143_n.jpeg',
    alt: 'Mariachis en evento',
    category: 'Eventos',
  },
  {
    id: 2,
    src: '/images/480594031_601909132850045_7332236528635650548_n.jpg',
    alt: 'Serenata romántica',
    category: 'Serenatas',
  },
  {
    id: 3,
    src: '/images/image_25bf8868.png',
    alt: 'Boda con mariachis',
    category: 'Bodas',
  },
  {
    id: 4,
    src: '/images/511771289_10162698176784650_7185014361270726574_n.jpg',
    alt: 'Cumpleaños con mariachis',
    category: 'Cumpleaños',
  },
  {
    id: 5,
    src: '/images/mariachismx.jpg',
    alt: 'Quinceañera con mariachis',
    category: 'Quinceañeras',
  },
  {
    id: 6,
    src: '/images/Mariachi2.jpg',
    alt: 'Evento corporativo',
    category: 'Corporativos',
  },
  {
    id: 7,
    src: '/images/marichisshow.jpg',
    alt: 'Presentación de mariachis',
    category: 'Presentaciones',
  },
  {
    id: 8,
    src: '/images/Mariachis.jpg',
    alt: 'Grupo de mariachis',
    category: 'Grupos',
  },
  {
    id: 9,
    src: '/images/487603392_613045378403087_1324443717655948432_n.jpg',
    alt: 'Música tradicional',
    category: 'Tradición',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="galeria" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mariachi-red dark:text-mariachi-gold mb-4 font-serif">
            Nuestra Galería
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Momentos inolvidables que hemos compartido con nuestros clientes en Bogotá
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">{image.category}</p>
                  <p className="text-gray-200 text-sm">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
              >
                ✕
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white font-semibold text-lg">{selectedImage.category}</p>
                <p className="text-gray-200">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
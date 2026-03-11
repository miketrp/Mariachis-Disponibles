"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: '¿Cuánto cuesta contratar un mariachi en Bogotá en 2024?',
    excerpt: 'Descubre los precios actualizados de mariachis en Bogotá, factores que influyen en el costo y consejos para obtener el mejor servicio dentro de tu presupuesto.',
    image: '/images/487493763_606896435643221_2865795540286084725_n.jpg',
    date: '15 de febrero, 2024',
    author: 'Mariachis Bogotá Élite',
    readTime: '5 min de lectura',
    category: 'Precios',
  },
  {
    id: 2,
    title: 'Las 15 mejores canciones de mariachi para quinceañeras',
    excerpt: 'Como elegir las canciones perfectas para esa quinceañera especial. Desde los clásicos más tradicionales hasta las rancheras modernas que encantan a los jóvenes.',
    image: '/images/services/quinceanera-mariachi-1.jpg',
    date: '10 de febrero, 2024',
    author: 'Mariachis Bogotá Élite',
    readTime: '7 min de lectura',
    category: 'Música',
  },
  {
    id: 3,
    title: 'Cómo contratar mariachis en Bogotá sin caer en fraudes',
    excerpt: 'Guía completa para evitar estafas al contratar mariachis. Consejos de seguridad, preguntas clave y señales de alerta para garantizar un servicio profesional.',
    image: '/images/services/cultura-mariachi-1.jpg',
    date: '5 de febrero, 2024',
    author: 'Mariachis Bogotá Élite',
    readTime: '6 min de lectura',
    category: 'Consejos',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-mariachi-beige dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mariachi-red dark:text-mariachi-gold mb-4 font-serif">
            Blog de Mariachis
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Consejos, tendencias y todo lo que necesitas saber sobre mariachis en Bogotá. 
            Artículos escritos por expertos en música mexicana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-mariachi-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-mariachi-black dark:text-white mb-3 line-clamp-2 hover:text-mariachi-red dark:hover:text-mariachi-gold transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <FaCalendarAlt />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUser />
                    <span>{post.author}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                  
                  <a
                    href="https://wa.me/+573214388706?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20un%20paquete%20de%20mariachis%20para%20mi%20evento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mariachi-red dark:text-mariachi-gold hover:text-mariachi-red/80 dark:hover:text-mariachi-gold/80 font-semibold flex items-center space-x-1 transition-colors duration-300"
                  >
                    <span>Leer más</span>
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/+573214388706?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20un%20paquete%20de%20mariachis%20para%20mi%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mariachi-red hover:bg-mariachi-red/80 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <span>Ver todos los artículos</span>
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
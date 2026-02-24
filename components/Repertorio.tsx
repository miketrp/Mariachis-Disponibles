"use client"

import { motion } from 'framer-motion'
import { FaMusic } from 'react-icons/fa'

const songs = [
  {
    category: 'Clásicos Mexicanos',
    songs: [
      'Cielito Lindo',
      'México Lindo y Querido',
      'El Rey',
      'Volver, Volver',
      'La Bikina',
      'Guantanamera',
      'El Son de la Negra',
      'y mucho más...',
    ],
  },
  {
    category: 'Rancheras y Boleros',
    songs: [
      'Amor Eterno',
      'Como Quien Pierde Una Estrella',
      'Si Nos Dejan',
      'Camino de la vida',
      'Amanecí En Tus Brazos',
      'Que bonito amor',
      'La Media Vuelta',
      'Y mucho más...',
    ],
  },
  {
    category: 'Serenatas y Amor',
    songs: [
      'Solamente Una Vez',
      'Bésame Mucho',
      'Sabor a Mí',
      'Toda una vida',
      'Hechizo',
      'Motivos',
      'Talisman',
      'y mucho mas..',
    ],
  },
  {
    category: 'Para Madres',
    songs: [
      'Las Mañanitas',
      'Feliz Cumpleaños',
      'Es mi madre',
      'Mil gracias',
      'Madrecita querida',
      'Mama',
      'Por el amor de una madre',
      'Y mucho más...',
    ],
  },
]

export default function Repertorio() {
  return (
    <section id="repertorio" className="py-20 bg-mariachi-beige dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mariachi-red dark:text-mariachi-gold mb-4 font-serif">
            Nuestro Repertorio
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Más de 100 canciones para todos los gustos y ocasiones. Desde los clásicos más queridos 
            hasta los éxitos modernos del mariachi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {songs.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-mariachi-red dark:text-mariachi-gold mb-4 flex items-center space-x-2 font-serif">
                <FaMusic className="text-mariachi-gold" />
                <span>{category.category}</span>
              </h3>
              <ul className="space-y-2">
                {category.songs.map((song, songIndex) => (
                  <motion.li
                    key={song}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + songIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <FaMusic className="text-mariachi-red text-xs" />
                    <span>{song}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            ¿No encuentras tu canción favorita? Podemos aprenderla especialmente para tu evento.
          </p>
          <a
            href="https://wa.me/573214388706?text=Hola,%20vi%20su%20página%20y%20quiero%20solicitar%20una%20canción%20especial%20para%20mi%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mariachi-red hover:bg-mariachi-red/80 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <FaMusic />
            <span>Solicitar canción especial</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
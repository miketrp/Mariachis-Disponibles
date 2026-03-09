"use client"

import { motion } from 'framer-motion'
import { FaCheck, FaStar, FaUsers, FaMusic, FaGift } from 'react-icons/fa'

interface PackageCardProps {
  pkg: {
    id: number
    name: string
    description: string
    musicians: number
    songs: number
    duration: string
    price: number
    gift?: string
    isPopular?: boolean
  }
  index: number
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
        pkg.isPopular ? 'ring-4 ring-mariachi-gold' : ''
      }`}
    >
      {pkg.isPopular && (
        <div className="absolute top-0 right-0 bg-mariachi-gold text-mariachi-black px-4 py-2 rounded-bl-2xl font-bold flex items-center space-x-1">
          <FaStar className="text-sm" />
          <span>Más Popular</span>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold text-mariachi-red dark:text-mariachi-gold mb-2 font-serif">
          {pkg.name}
        </h3>
        
        <div className="text-3xl font-bold text-mariachi-black dark:text-white mb-4">
          ${pkg.price.toLocaleString('es-CO')} COP
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <FaUsers className="text-mariachi-red" />
            <span>Músicos Profesionales</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <FaMusic className="text-mariachi-red" />
            <span>{pkg.songs} canciones ({pkg.duration})</span>
          </div>

          {pkg.gift && (
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <FaGift className="text-mariachi-gold" />
              <span className="font-semibold">Incluye: {pkg.gift}</span>
            </div>
          )}
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {pkg.description}
          </p>
        </div>

        <motion.a
          href={`https://wa.me/+573214388706?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20el%20paquete%20${encodeURIComponent(pkg.name)}%20para%20mi%20evento`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 ${
            pkg.isPopular
              ? 'bg-mariachi-red hover:bg-mariachi-red/80 text-white'
              : 'bg-mariachi-gold hover:bg-mariachi-gold/80 text-mariachi-black'
          }`}
        >
          <span>Cotizar este paquete</span>
        </motion.a>
      </div>
    </motion.div>
  )
}
"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaWhatsapp, FaPlay } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Mariachis Bogotá Élite - Inicio">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/Portada Mariachi.png")',
          }}
          role="img"
          aria-label="Mariachis Bogotá Élite - Imagen de portada"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
            <span className="sr-only">Mariachis </span>
            <span className="text-mariachi-gold">Bogotá</span>{' '}
            Élite
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Transformamos tu evento en una experiencia inolvidable con el auténtico sabor de México
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-mariachi-gold text-lg font-semibold"
            >
              🎵 Más de 10 años de experiencia
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-mariachi-gold text-lg font-semibold"
            >
              🎺 Músicos profesionales
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-mariachi-gold text-lg font-semibold"
            >
              ⭐ Servicio garantizado
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#paquetes"
              className="bg-mariachi-red hover:bg-mariachi-red/80 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <span>Ver Paquetes</span>
              <FaPlay className="text-sm" />
            </Link>
            
            <Link
              href="https://wa.me/+573214388706?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20un%20paquete%20de%20mariachis%20para%20mi%20evento"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mariachi-gold hover:bg-mariachi-gold/80 text-mariachi-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <FaWhatsapp size={24} />
              <span>Cotizar por WhatsApp</span>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
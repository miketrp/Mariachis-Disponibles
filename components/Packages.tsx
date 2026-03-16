"use client"

import { motion } from 'framer-motion'
import PackageCard from "./PackageCard"

const packages = [
  {
    id: 1,
    name: "Paquete Entre Semana",
    description: "Músicos Profesionales, 6 Canciones, Sonido Amplificado, Sin Obsequios",
    musicians: 4,
    songs: 6,
    duration: "Completas",
    price: 200000,
  },
  {
    id: 2,
    name: "Paquete Entre Semana 2",
    description: "Músicos Profesionales, 6 Canciones, Sonido Amplificado, Con Obsequios: Ramo de flores o Champange, chocolates y recordatorio",
    musicians: 4,
    songs: 6,
    duration: "Completas",
    price: 250000,
    gift: "Ramo de flores o Champange, chocolates y recordatorio",
  },
  {
    id: 3,
    name: "Paquetes Fin de Semana",
    description: "Paquete con obsequios, Músicos Profesionales, 10 canciones, Sonido amplificado, Con obsequios: Ramo de flores o champange, chocolates y recordatorio",
    musicians: 5,
    songs: 10,
    duration: "Completas",
    price: 300000,
    gift: "Ramo de flores o champange, chocolates y recordatorio",
    isPopular: true,
  },
  {
    id: 4,
    name: "Paquete fin de semana sin obsequios",
    description: "Músicos Profesionales, 9 canciones, Sonido amplificado, Sin obsequios",
    musicians: 5,
    songs: 9,
    duration: "Completas",
    price: 250000,
  },
]

export default function Packages() {
  return (
    <section id="paquetes" className="py-20 bg-mariachi-beige dark:bg-gray-900" aria-labelledby="paquetes-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="paquetes-titulo" className="text-4xl md:text-5xl font-bold text-mariachi-red dark:text-mariachi-gold mb-4 font-serif">
            Nuestros Paquetes de Mariachis en Bogotá
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Tenemos el paquete perfecto para tu evento. Desde serenatas íntimas hasta grandes celebraciones, 
            nos adaptamos a tus necesidades y presupuesto. Todos nuestros paquetes incluyen músicos profesionales 
            con trajes típicos y repertorio de más de 100 canciones de mariachi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Lista de paquetes de mariachis">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-mariachi-red dark:text-mariachi-gold mb-4 font-serif">
              Servicios Adicionales
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Personaliza aún más tu experiencia con nuestros servicios extra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center border-2 border-transparent hover:border-mariachi-red dark:hover:border-mariachi-gold transition-colors duration-300">
              <div className="text-4xl mb-4">
                <span role="img" aria-label="música">🎵</span>
              </div>
              <h4 className="text-xl font-bold text-mariachi-red dark:text-mariachi-gold mb-2">Canción Adicional</h4>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mb-3">$50.000<span className="text-base font-normal text-gray-600 dark:text-gray-400">/canción</span></p>
              <p className="text-gray-600 dark:text-gray-300">Agrega canciones extras a tu evento</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center border-2 border-transparent hover:border-mariachi-red dark:hover:border-mariachi-gold transition-colors duration-300">
              <div className="text-4xl mb-4">
                <span role="img" aria-label="grupo">👥</span>
              </div>
              <h4 className="text-xl font-bold text-mariachi-red dark:text-mariachi-gold mb-2">Músicos Extra</h4>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mb-3">$50.000<span className="text-base font-normal text-gray-600 dark:text-gray-400">/músico</span></p>
              <p className="text-gray-600 dark:text-gray-300">Agrega más músicos a tu grupo para un sonido más potente</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center border-2 border-transparent hover:border-mariachi-red dark:hover:border-mariachi-gold transition-colors duration-300">
              <div className="text-4xl mb-4">
                <span role="img" aria-label="regalo">🎁</span>
              </div>
              <h4 className="text-xl font-bold text-mariachi-red dark:text-mariachi-gold mb-2">Obsequios Personalizados</h4>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Desde $30.000</p>
              <p className="text-gray-600 dark:text-gray-300">Regalos especiales para el homenajeado</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            ¿Necesitas un paquete personalizado? ¡Contáctanos!
          </p>
          <a
            href="https://wa.me/+573214388706?text=Hola,%20vi%20su%20página%20y%20quiero%20un%20paquete%20personalizado%20para%20mi%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mariachi-red hover:bg-mariachi-red/80 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <span>Cotizar paquete personalizado</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
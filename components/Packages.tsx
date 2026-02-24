"use client"

import { motion } from 'framer-motion'
import PackageCard from "./PackageCard"

const packages = [
  {
    id: 1,
    name: "PAQUETE 1 Express sin Obsequios",
    description: "Serenatas Economicas, cumpleaños íntimos, eventos pequeños",
    musicians: 4,
    songs: 5,
    duration: "Completas",
    price: 200000,
  },
  {
    id: 2,
    name: "PAQUETE 2 Express Con Obsequios",
    description: "Aniversarios, declaraciones de amor",
    musicians: 4,
    songs: 5,
    duration: "Completas",
    price: 250000,
    gift: "Ramo de flores o Champange, Chocolates y Recordatorio",
  },
  {
    id: 3,
    name: "PAQUETE 3 SIN OBSEQUIOS",
    description: "Cumpleaños, reuniones familiares, Voz femenina,",
    musicians: 5,
    songs: 9,
    duration: "Completas",
    price: 250000,
  },
  {
    id: 4,
    name: "PAQUETE 4 CON OBSEQUIOS",
    description: "Quinceañeras, bodas civiles",
    musicians: 5,
    songs: 9,
    duration: "Completas",
    price: 300000,
    gift: "Ramo de flores o Champange, Chocolates y Recordatorio",
    isPopular: true,
  },
  {
    id: 5,
    name: "PAQUETE 5 GRUPO DE 6 MUSICOS",
    description: "Eventos corporativos, grandes celebraciones grupo mas completo",
    musicians: 6,
    songs: 10,
    duration: "Completas",
    price: 350000,
  },
  {
    id: 6,
    name: "Experiencia VIP",
    description: "Para los mas exigentes, con violines, grupo completo",
    musicians: 8,
    songs: 12,
    duration: "Una hora",
    price: 700000,
    gift: "Ramo de flores o Champange, Chocolates y Recordatorio",
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
          transition={{ duration: 0.8, delay: 0.3 }}
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
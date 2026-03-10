"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón de WhatsApp con diseño mejorado y logo SVG */}
      <motion.a
        href="https://wa.me/+573214388706?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20un%20paquete%20de%20mariachis%20para%20mi%20evento"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Contáctanos por WhatsApp"
      >
        <div className="relative">
          <Image
            src="/images/whatsapp-logo.svg"
            alt="WhatsApp"
            width={32}
            height={32}
            className="drop-shadow-lg"
            priority
          />
          {/* Efecto de pulso sutil */}
          <motion.div
            className="absolute inset-0 bg-green-400 rounded-full opacity-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.a>
    </div>
  )
}

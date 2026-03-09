"use client"

import { motion } from 'framer-motion'
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botones de Redes Sociales */}
      <motion.div 
        className="flex flex-col space-y-3 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {/* Facebook */}
        <motion.a
          href="https://www.facebook.com/profile.php?id=100090928906987"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Síguenos en Facebook"
        >
          <FaFacebook size={20} />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/mariachisbogota"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Síguenos en Instagram"
        >
          <FaInstagram size={20} />
        </motion.a>

        {/* TikTok */}
        <motion.a
          href="https://www.tiktok.com/@mariachisbogota"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Síguenos en TikTok"
        >
          <FaTiktok size={20} />
        </motion.a>

        {/* YouTube */}
        <motion.a
          href="https://www.youtube.com/@mariachisbogota"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Síguenos en YouTube"
        >
          <FaYoutube size={20} />
        </motion.a>
      </motion.div>

      {/* Botón de WhatsApp con diseño mejorado y tamaño aumentado */}
      <motion.a
        href="https://wa.me/+573214388706?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20un%20paquete%20de%20mariachis%20para%20mi%20evento"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-5 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Contáctanos por WhatsApp"
      >
        <div className="relative">
          <FaWhatsapp size={40} className="drop-shadow-lg" />
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

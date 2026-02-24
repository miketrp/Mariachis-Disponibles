"use client"

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-mariachi-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-mariachi-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎺</span>
              </div>
              <span className="text-xl font-bold font-serif">Mariachis Bogotá Élite</span>
            </div>
            <p className="text-gray-300 mb-4">
              Los mejores mariachis de Bogotá para tu evento. Más de 10 años de experiencia 
              brindando momentos inolvidables con auténtica música mexicana.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100090928906987" target="_blank" rel="noopener noreferrer" className="text-mariachi-gold hover:text-mariachi-gold/80 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/mariachi.bogota/" target="_blank" rel="noopener noreferrer" className="text-mariachi-gold hover:text-mariachi-gold/80 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@mariachibogota81" target="_blank" rel="noopener noreferrer" className="text-mariachi-gold hover:text-mariachi-gold/80 transition-colors duration-300">
                <FaTiktok size={24} />
              </a>
              <a href="https://wa.me/+573214388706" className="text-mariachi-gold hover:text-mariachi-gold/80 transition-colors duration-300">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-mariachi-gold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-300 hover:text-mariachi-gold transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#paquetes" className="text-gray-300 hover:text-mariachi-gold transition-colors duration-300">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gray-300 hover:text-mariachi-gold transition-colors duration-300">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#repertorio" className="text-gray-300 hover:text-mariachi-gold transition-colors duration-300">
                  Repertorio
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-gray-300 hover:text-mariachi-gold transition-colors duration-300">
                  Testimonios
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-mariachi-gold">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#paquetes" className="text-gray-300 hover:text-mariachi-gold transition-colors duration-300">
                  Serenatas
                </Link>
              </li>
              <li>
                <Link href="#paquetes" className="text-gray-300 hover:text-mariachi-gold transition-colors duration-300">
                  Cumpleaños
                </Link>
              </li>
              <li>
                <Link href="#paquetes" className="text-gray-300 hover:text-mariachi-gold transition-colors duration-300">
                  Quinceañeras
                </Link>
              </li>
              <li>
                <Link href="#paquetes" className="text-gray-300 hover:text-mariachi-gold transition-colors duration-300">
                  Bodas
                </Link>
              </li>
              <li>
                <Link href="#paquetes" className="text-gray-300 hover:text-mariachi-gold transition-colors duration-300">
                  Eventos Corporativos
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-mariachi-gold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-mariachi-gold" />
                <span className="text-gray-300">+57 (321) 438-8706</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Mariachis Bogotá Élite. Todos los derechos reservados. | 
            <Link href="#" className="hover:text-mariachi-gold transition-colors duration-300 ml-1">
              Política de Privacidad
            </Link> | 
            <Link href="#" className="hover:text-mariachi-gold transition-colors duration-300 ml-1">
              Términos y Condiciones
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
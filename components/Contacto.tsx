"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaClock } from 'react-icons/fa'

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    package: '',
    message: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      package: '',
      message: '',
    })
  }

  return (
    <section id="contacto" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mariachi-red dark:text-mariachi-gold mb-4 font-serif">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Estamos listos para hacer de tu evento un momento inolvidable. Cotiza con nosotros y 
            recibe una respuesta en menos de 30 minutos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-mariachi-red dark:text-mariachi-gold mb-6 font-serif">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-mariachi-red text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-mariachi-black dark:text-white mb-1">
                    Dirección
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Carrra 12h bis A # 27b-16 sur<br />
                    Bogotá, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="text-mariachi-red text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-mariachi-black dark:text-white mb-1">
                    Teléfono
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +57 (321) 438-8706
                  </p>
                </div>
              </div>


              <div className="flex items-start space-x-4">
                <FaClock className="text-mariachi-red text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-mariachi-black dark:text-white mb-1">
                    Horario de Atención
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lunes a Domingo: 8:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/+573214388706?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20un%20paquete%20de%20mariachis%20para%20mi%20evento"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-mariachi-gold hover:bg-mariachi-gold/80 text-mariachi-black px-6 py-3 rounded-full font-semibold transition-colors duration-300 mt-8"
            >
              <FaWhatsapp size={24} />
              <span>Cotizar por WhatsApp</span>
            </motion.a>

            {/* Galería de Servicios */}
            <div className="mt-8">
              <h4 className="font-semibold text-mariachi-black dark:text-white mb-4">
                Nuestros Servicios
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <img
                    src="/images/services/boda-mariachi-1.jpg"
                    alt="Mariachis en Boda"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end justify-center p-2">
                    <span className="text-white font-semibold text-sm">Mariachis para Bodas</span>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/images/services/quinceanera-mariachi-1.jpg"
                    alt="Mariachis en Quinceañeras"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end justify-center p-2">
                    <span className="text-white font-semibold text-sm">Mariachis para Quinceañeras</span>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/images/services/cultura-mariachi-1.jpg"
                    alt="Cultura del Mariachi"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end justify-center p-2">
                    <span className="text-white font-semibold text-sm">Cultura musical Mariachi</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-mariachi-red dark:text-mariachi-gold mb-6 font-serif">
              Formulario de Cotización
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mariachi-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mariachi-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="321 438-8706"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mariachi-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mariachi-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Selecciona el tipo de evento</option>
                    <option value="serenata">Serenata</option>
                    <option value="cumpleanos">Cumpleaños</option>
                    <option value="quinceanera">Quinceañera</option>
                    <option value="boda">Boda</option>
                    <option value="evento-corporativo">Evento Corporativo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Fecha del Evento
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mariachi-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Paquete de Interés
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mariachi-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Selecciona un paquete</option>
                  <option value="serenata-express">Paquete 1 Express sin obsequios</option>
                  <option value="serenata-express-plus">Paquete 2 Express con obsequios</option>
                  <option value="fiesta-charra">Paquete 3 sin obsequios</option>
                  <option value="fiesta-charra-premium">Paquete 4 con obsequios</option>
                  <option value="gran-evento">Paquete 5 grupo de 6 músicos</option>
                  <option value="experiencia-vip">Paquete 6 Experiencia VIP</option>
                  <option value="personalizado">Personalizado</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje Adicional
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-mariachi-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Cuéntanos más sobre tu evento..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-mariachi-red hover:bg-mariachi-red/80 text-white py-3 rounded-full text-lg font-semibold transition-colors duration-300"
              >
                Enviar Cotización
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
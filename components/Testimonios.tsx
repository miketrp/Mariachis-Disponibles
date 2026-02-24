"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    event: 'Quinceañera de mi hija',
    rating: 5,
    image: '/images/487493763_606896435643221_2865795540286084725_n.jpg',
    text: '¡Excelente servicio! Los mariachis llegaron puntuales, muy profesionales y con una voz increíble. Hicieron que la quinceañera de mi hija fuera inolvidable. Todos los invitados quedaron encantados.',
    date: 'Febrero 2024',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    event: 'Serenata de aniversario',
    rating: 5,
    image: '/images/mariachismex.jpg',
    text: 'Contraté el paquete Serenata Express Plus para sorprender a mi esposa en nuestro aniversario. Fue mágico! La botella de vino y el video que grabaron fueron el toque perfecto. Mi esposa lloró de la emoción.',
    date: 'Enero 2024',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    event: 'Evento corporativo',
    rating: 5,
    image: '/images/mariachismx.jpg',
    text: 'Contratamos Mariachis Bogotá Élite para nuestro evento corporativo anual. Fueron el alma de la fiesta! Muy profesionales, puntuales y con un repertorio amplísimo. Los recomiendo 100%.',
    date: 'Diciembre 2023',
  },
  {
    id: 4,
    name: 'Pedro López',
    event: 'Cumpleaños sorpresa',
    rating: 5,
    image: '/images/mariachitv.jpg',
    text: 'Organizamos un cumpleaños sorpresa para mi mamá y los mariachis fueron el toque perfecto. Llegaron discretamente, se coordinaron perfecto con nosotros y cuando empezaron a cantar fue la sorpresa más grande. ¡Mi mamá feliz!',
    date: 'Noviembre 2023',
  },
  {
    id: 5,
    name: 'Lucía Fernández',
    event: 'Boda',
    rating: 5,
    image: '/images/MariachiMexico.jpg',
    text: 'Para nuestra boda contratamos el paquete Experiencia VIP y fue la mejor decisión. Desde la decoración hasta el video profesional, todo estuvo perfecto. Nuestros invitados aún hablan de lo hermoso que sonó todo.',
    date: 'Octubre 2023',
  },
  {
    id: 6,
    name: 'Roberto Sánchez',
    event: 'Serenata de cumpleaños',
    rating: 5,
    image: '/images/mx.jpg',
    text: 'Quería hacer algo especial para el cumpleaños de mi novia y los mariachis fueron ideales. Llegaron a las 12 de la noche exactamente, cantaron Las Mañanitas y varias canciones más. Fue muy romántico y ella quedó encantada.',
    date: 'Septiembre 2023',
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mariachi-red dark:text-mariachi-gold mb-4 font-serif">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Más de 500 eventos exitosos en Bogotá nos respaldan. Conoce las experiencias de quienes ya 
            disfrutaron de nuestro servicio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-mariachi-beige dark:bg-gray-700 rounded-lg shadow-lg p-6 relative"
            >
              <FaQuoteLeft className="text-mariachi-gold text-2xl mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-mariachi-gold text-sm" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-mariachi-red dark:text-mariachi-gold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.event}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {testimonial.date}
                  </p>
                </div>
              </div>
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
          <div className="bg-mariachi-red dark:bg-mariachi-gold text-white dark:text-mariachi-black rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-serif">
              ¿Quieres ser parte de nuestra historia?
            </h3>
            <p className="mb-6">
              Únete a los cientos de clientes satisfechos que han hecho de su evento un momento inolvidable.
            </p>
            <a
              href="https://wa.me/573214388706?text=Hola,%20vi%20su%20página%20y%20quiero%20cotizar%20un%20paquete%20de%20mariachis%20para%20mi%20evento"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-mariachi-black text-mariachi-red dark:text-mariachi-gold px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>Cotizar mi evento</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
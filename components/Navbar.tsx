"use client"

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaMoon, FaSun, FaPhone } from 'react-icons/fa'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Paquetes', href: '#paquetes' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Repertorio', href: '#repertorio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' },
  ]

  // Función para manejar el scroll suave
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsOpen(false) // Cerrar menú móvil al hacer clic
  }

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-mariachi-black/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="#inicio" 
            className="flex items-center space-x-2"
            onClick={(e) => handleNavClick(e, '#inicio')}
          >
            <div className="w-10 h-10 bg-mariachi-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🎺</span>
            </div>
            <span className="text-xl font-bold text-mariachi-red font-serif">
              Mariachis en Bogotá
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-mariachi-black dark:text-white hover:text-mariachi-red dark:hover:text-mariachi-gold transition-colors duration-300 font-medium cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Llamar Ahora - Botón de llamada instantánea */}
            <a
              href="tel:+573214388706"
              className="bg-mariachi-red text-white px-6 py-2 rounded-full hover:bg-mariachi-red/80 transition-colors duration-300 font-semibold inline-flex items-center space-x-2"
            >
              <FaPhone size={16} />
              <span>Llamar Ahora</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mariachi-black dark:text-white"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white dark:bg-mariachi-black shadow-lg"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-mariachi-black dark:text-white hover:text-mariachi-red dark:hover:text-mariachi-gold transition-colors duration-300 font-medium"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:+573214388706"
            className="block px-3 py-2 bg-mariachi-red text-white rounded-lg hover:bg-mariachi-red/80 transition-colors duration-300 font-semibold text-center"
            onClick={() => setIsOpen(false)}
          >
            Llamar Ahora
          </a>
        </div>
      </motion.div>
    </nav>
  )
}
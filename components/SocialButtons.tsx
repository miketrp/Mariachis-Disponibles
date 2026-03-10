'use client'

import { FaFacebook, FaInstagram, FaTiktok, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function SocialButtons() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100090928906987',
      icon: FaFacebook,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mariachi.bogota/',
      icon: FaInstagram,
      color: 'bg-pink-600 hover:bg-pink-700',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@mariachibogota81',
      icon: FaTiktok,
      color: 'bg-black hover:bg-gray-800',
    },
    {
      name: 'Llamar',
      url: 'tel:+573214388706',
      icon: FaPhone,
      color: 'bg-green-600 hover:bg-green-700',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          title={social.name}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  )
}
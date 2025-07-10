import React, { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'דף הבית', href: '#home' },
    { name: 'שירותים', href: '#services' },
    { name: 'אודות', href: '#about' },
    { name: 'שאלות ותשובות', href: '#faq' },
    { name: 'צור קשר', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
              שלג
            </div>
            <span className="mr-2 font-medium text-gray-700">ניהול מבנים</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* WhatsApp Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-reverse space-x-4">
            <a
              href="https://wa.me/972547274527"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-2"
            >
              <MessageCircle size={20} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200 py-4"
          >
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-right px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Header 
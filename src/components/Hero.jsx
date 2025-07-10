import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, CheckCircle } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80')`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container-max text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ניהול ואחזקת מבנים
            <span className="block text-3xl md:text-5xl text-blue-300 mt-2">
              כמו שצריך
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            פתרונות מקצועיים ומותאמים אישית לניהול הבניין שלכם
            <span className="block mt-2">זמינות 24/7 • שקיפות מלאה • מחירים הוגנים</span>
          </p>

          {/* Key Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {[
              'מאות בניינים מרוצים',
              'צוות מקצועי ומנוסה',
              'אפליקציה לדיירים',
              'ליווי משפטי כלול'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-sm md:text-base font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-3 shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <Mail size={24} />
              לקבלת הצעת מחיר
            </button>
            
            <a
              href="tel:+972547274527"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-3"
            >
              <Phone size={24} />
              חייגו עכשיו
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 text-sm text-gray-300"
          >
                            <p className="mb-2">✅ שירות מקצועי ואמין</p>
            <p>🛡️ ביטוח אחריות מקצועית</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 
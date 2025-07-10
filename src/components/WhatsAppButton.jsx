import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6"
    >
      <motion.a
        href="https://wa.me/972547274527?text=שלום! אני מעוניין/ת לשמוע על שירותי ניהול המבנים שלכם"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 sm:gap-3 group max-w-[60px] sm:max-w-none"
      >
        {/* WhatsApp Icon */}
        <MessageCircle size={24} className="text-white sm:w-7 sm:h-7" />
        
        {/* Text that appears on hover - only on desktop */}
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileHover={{ width: 'auto', opacity: 1 }}
          className="whitespace-nowrap overflow-hidden font-medium text-sm hidden lg:block"
        >
          צריכים עזרה? כתבו לנו!
        </motion.span>
        
        {/* Pulse animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-green-400 rounded-full -z-10"
        />
      </motion.a>
      
      {/* Notification badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, duration: 0.3 }}
        className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold shadow-lg"
      >
        !
      </motion.div>
    </motion.div>
  )
}

export default WhatsAppButton 
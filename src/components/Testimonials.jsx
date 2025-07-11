import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      title: 'שקיפות מלאה',
      content: 'דיירים מעוניינים לדעת בדיוק לאן הולך הכסף שלהם ומה נעשה בבניין. דוחות מפורטים וגישה לכל המידע הם בסיס לאמון.',
      icon: 'transparency',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'זמינות וזמן תגובה',
      content: 'כשיש בעיה בבניין, דיירים רוצים לדעת שמישהו יטפל בזה מהר. זמינות 24/7 לחירום וזמן תגובה מהיר הם קריטיים.',
      icon: 'availability',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'מחירים הוגנים',
      content: 'כולם רוצים איכות אבל לא בכל מחיר. חברת ניהול טובה מספקת שירות מעולה במחיר הוגן ושקוף, ללא עלויות נסתרות.',
      icon: 'pricing',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'תקשורת ברורה',
      content: 'דיירים רוצים לדעת מה קורה בבניין שלהם. עדכונים סדירים, הסברים ברורים ותקשורת פתוחה הם מה שיוצר אמון.',
      icon: 'communication',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'מקצועיות וניסיון',
      content: 'דיירים מחפשים צוות שמבין את העבודה - מהתחזוקה הבסיסית ועד הנושאים המשפטיים המורכבים.',
      icon: 'expertise',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 6,
      title: 'שירות אישי',
      content: 'כל בניין הוא שונה ויש לו צרכים מיוחדים. גישה אישית ומותאמת לכל בניין זה מה שמבדיל חברת ניהול טובה.',
      icon: 'personal',
      color: 'from-red-500 to-red-600'
    }
  ]

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            מה דיירים מחפשים?
            <span className="block text-primary-600 mt-2">הדברים שהכי חשובים בחברת ניהול מבנים</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מה דיירים אוהבים בחברות ניהול מבנים מקצועיות
          </p>
        </motion.div>

        {/* Main Content Display */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-6 sm:p-8 md:p-12"
              >
                {/* Icon */}
                <div className={`bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  <CheckCircle className="text-white" size={32} />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                  {testimonials[currentTestimonial].title}
                </h3>

                {/* Content */}
                <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-6 sm:mb-8">
                  {testimonials[currentTestimonial].content}
                </div>

                {/* Bottom indicator */}
                <div className="flex justify-center">
                  <div className="bg-primary-100 text-primary-600 px-4 py-2 rounded-full font-medium text-sm">
                    נקודה {currentTestimonial + 1} מתוך {testimonials.length}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Hidden on small screens */}
          <button
            onClick={prevTestimonial}
            className="hidden sm:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 lg:p-3 hover:bg-primary-50 transition-colors duration-200 group"
          >
            <ChevronLeft className="text-gray-600 group-hover:text-primary-600" size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="hidden sm:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 lg:p-3 hover:bg-primary-50 transition-colors duration-200 group"
          >
            <ChevronRight className="text-gray-600 group-hover:text-primary-600" size={20} />
          </button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex sm:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="bg-white shadow-lg rounded-full p-3 hover:bg-primary-50 transition-colors duration-200 group"
          >
            <ChevronLeft className="text-gray-600 group-hover:text-primary-600" size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="bg-white shadow-lg rounded-full p-3 hover:bg-primary-50 transition-colors duration-200 group"
          >
            <ChevronRight className="text-gray-600 group-hover:text-primary-600" size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentTestimonial 
                  ? 'bg-primary-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-700">זמינות לחירום</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">שקיפות</div>
              <div className="text-gray-700">מלאה</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">מחירים</div>
              <div className="text-gray-700">הוגנים</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 
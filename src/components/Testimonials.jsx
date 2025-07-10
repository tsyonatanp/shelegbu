import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'רונית לוי',
      building: 'בניין רחוב הרצל 42',
      role: 'יו"ר ועד בית',
      content: 'אחרי שנים של בעיות עם חברות ניהול קודמות, שלג הביאו לנו שקט נפשי אמיתי. הם מקצועיים, זמינים ושקופים לחלוטין. כל דייר בבניין מרוצה מהשירות.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 2,
      name: 'משה כהן',
      building: 'מתחם גני שושנה',
      role: 'דייר במתחם',
      content: 'האפליקציה שלהם פשוט מהפכנית! אני יכול לראות בזמן אמת מה קורה בבניין, לדווח על תקלות ולקבל עדכונים. השירות מעולה וההנהלה תמיד זמינה.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 3,
      name: 'שרה אברהם',
      building: 'בניין הדקל 15',
      role: 'חברת ועד בית',
      content: 'המחירים הוגנים והשירות מקצועי. הם הצליחו לחסוך לנו כסף על ספקים ובאותו זמן לשפר את רמת השירות. בעיקר מרוצה מהזמינות שלהם גם בסופי שבוע.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 4,
      name: 'דוד ישראלי',
      building: 'שכונת נווה צדק',
      role: 'יו"ר ועד בית',
      content: 'החלטנו להחליף לשלג אחרי המלצה של חבר. הייתי קצת חושש מהמעבר אבל הם טיפלו בהכל בצורה מקצועית. היום אני ממליץ עליהם לכל מי שמחפש ניהול איכותי.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 5,
      name: 'מירי גולדברג',
      building: 'מגדלי אביב',
      role: 'דיירת במגדל',
      content: 'אחרי 3 שנים עם שלג אני יכולה להגיד בביטחון - זו ההחלטה הטובה ביותר שקיבלנו. הבניין נראה מעולה, הדיירים מרוצים והעלויות תחת כל הביקורת.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 6,
      name: 'יוסי פרידמן',
      building: 'פארק המדע',
      role: 'מנהל קהילה',
      content: 'כמנהל של קהילה גדולה, אני צריך שותף אמין לניהול הנכסים. שלג מספקים בדיוק את זה - מקצועיות, אמינות ושירות ברמה הגבוהה ביותר.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
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
            מה אומרים עלינו?
            <span className="block text-primary-600 mt-2">המלצות אמיתיות מדיירים מרוצים</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            בניינים רבים בוחרים בנו. הנה מה שיש להם להגיד
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
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
                {/* Quote Icon */}
                <Quote className="text-primary-200 mx-auto mb-6" size={48} />
                
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-6 sm:mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary-200"
                  />
                  <div className="text-center md:text-right">
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-primary-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].building}
                    </div>
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
              <div className="text-3xl font-bold text-primary-600 mb-2">5★</div>
              <div className="text-gray-700">דירוג מעולה</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">ניסיון</div>
              <div className="text-gray-700">מוכח</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Wrench, 
  DollarSign, 
  Smartphone, 
  Shield, 
  Users, 
  Scale, 
  FileText,
  X,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 1,
      icon: Home,
      title: 'ניהול שוטף + אב בית',
      description: 'ניהול יומיומי מקצועי של הבניין',
      details: [
        'פיקוח על ניקיון ותחזוקה שוטפת',
        'טיפול בתקלות ובקשות דיירים',
        'ניהול ספקים וקבלנים',
        'דוחות חודשיים מפורטים',
        'זמינות 24/7 לחירום',
        'פיקוח על עבודות תחזוקה'
      ]
    },
    {
      id: 2,
      icon: Wrench,
      title: 'תחזוקת מערכות',
      description: 'תחזוקה מקצועית של כל המערכות',
      details: [
        'תחזוקת מעליות - בדיקות תקופתיות',
        'מערכות מים וביוב',
        'מערכות כיבוי אש',
        'גנרטורים ומערכות חירום',
        'מערכות חשמל ותאורה',
        'מיזוג אוויר מרכזי'
      ]
    },
    {
      id: 3,
      icon: DollarSign,
      title: 'גבייה וניהול פיננסי',
      description: 'ניהול פיננסי מקצועי ושקוף',
      details: [
        'גבייה יעילה של ועד בית',
        'ניהול תקציב שנתי',
        'דוחות כספיים חודשיים',
        'ניהול ספקים ותשלומים',
        'ייעוץ בחיסכון בעלויות',
        'מעקב אחר חובות'
      ]
    },
    {
      id: 4,
      icon: Smartphone,
      title: 'אפליקציה לדיירים',
      description: 'אפליקציה חכמה לניהול הבניין',
      details: [
        'דיווח על תקלות באפליקציה',
        'עדכונים בזמן אמת',
        'צפייה בדוחות כספיים',
        'הודעות לדיירים',
        'הזמנת שירותים',
        'מעקב אחר בקשות'
      ]
    },
    {
      id: 5,
      icon: Shield,
      title: 'הדברה וגינון',
      description: 'שמירה על איכות הסביבה',
      details: [
        'הדברה מקצועית ותקופתית',
        'עיצוב ותחזוקת גינות',
        'השקיה אוטומטית',
        'דישון ועיבוד אדמה',
        'גיזום עצים ושיחים',
        'החלפת צמחים עונתיים'
      ]
    },
    {
      id: 6,
      title: 'ביטוחים ואבטחה',
      icon: Users,
      description: 'הגנה מקיפה על הבניין',
      details: [
        'ניהול ביטוחי הבניין',
        'מערכות אבטחה ומצלמות',
        'בקרת כניסה לבניין',
        'שמירה (במידת הצורך)',
        'תאורה חכמה',
        'מערכת אזעקה'
      ]
    },
    {
      id: 7,
      icon: Scale,
      title: 'ליווי משפטי',
      description: 'ייעוץ משפטי מקצועי',
      details: [
        'ייעוץ בנושאי ועד בית',
        'טיפול בסרבני תשלום',
        'ייצוג בבתי משפט',
        'ניסוח חוזים',
        'יעוץ בתקנון הבית',
        'טיפול בתביעות'
      ]
    },
    {
      id: 8,
      icon: FileText,
      title: 'דוחות ותקשורת',
      description: 'שקיפות מלאה וניהול מידע',
      details: [
        'דוחות כספיים חודשיים',
        'דוחות פעילות מפורטים',
        'תקשורת שוטפת עם דיירים',
        'ניהול אסיפות ועד בית',
        'ארכיון דיגיטלי',
        'גיבוי מידע רציף'
      ]
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            השירותים שלנו
            <span className="block text-primary-600 mt-2">פתרון מקיף לכל הצרכים</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מניהול שוטף ועד ליווי משפטי - כל מה שהבניין שלכם צריך במקום אחד
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:shadow-xl hover:border-primary-300 transition-all duration-300 group"
            >
              <div className="bg-primary-50 group-hover:bg-primary-600 transition-colors duration-300 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <service.icon 
                  size={32} 
                  className="text-primary-600 group-hover:text-white transition-colors duration-300" 
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <div className="text-primary-600 text-sm font-medium">
                לחצו לפרטים נוספים ←
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <selectedService.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selectedService.title}
                      </h3>
                      <p className="text-gray-600">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <X size={24} className="text-gray-600" />
                  </button>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    מה כלול בשירות:
                  </h4>
                  {selectedService.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 bg-primary-50 rounded-lg p-4 text-center">
                  <p className="text-primary-800 font-medium mb-3">
                    מעוניינים בשירות זה?
                  </p>
                  <button
                    onClick={() => {
                      setSelectedService(null)
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-primary"
                  >
                    צרו קשר לפרטים
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Services 
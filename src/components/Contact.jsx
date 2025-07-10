import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  MessageSquare
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    apartments: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend or email service
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        apartments: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'חייגו אלינו',
      info: '054-727-4527',
      action: 'tel:+972547274527',
      description: 'זמינים לשיחה בימי א-ה 8:00-18:00',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: 'שליחת הודעה',
              action: 'https://wa.me/972547274527',
      description: 'מענה מהיר ונוח בכל שעה',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'אימייל',
      info: 'shelegbu@gmail.com',
      action: 'mailto:shelegbu@gmail.com',
      description: 'נחזור אליכם תוך 24 שעות',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: 'המשרד שלנו',
      info: 'וינגייט 2, קרית אונו',
      description: 'ניתן לקבוע פגישה מראש'
    },
    {
      icon: Clock,
      title: 'שעות פעילות',
      info: 'א-ה: 8:00-18:00, ו: 8:00-13:00',
      description: 'חירום: זמינים 24/7'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            צרו קשר עכשיו
            <span className="block text-primary-600 mt-2">נשמח לשמוע מכם ולעזור</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מעוניינים בניהול מקצועי לבניין שלכם? בואו נכיר ונמצא את הפתרון המושלם עבורכם
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Send className="text-primary-600" size={28} />
              קבלו הצעת מחיר מותאמת
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User size={16} className="inline ml-1" />
                  שם מלא *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="הכניסו את שמכם המלא"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} className="inline ml-1" />
                    טלפון *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="050-123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} className="inline ml-1" />
                    אימייל
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building size={16} className="inline ml-1" />
                  מספר דירות בבניין *
                </label>
                <select
                  name="apartments"
                  value={formData.apartments}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                >
                  <option value="">בחרו מספר דירות</option>
                  <option value="5-15">5-15 דירות</option>
                  <option value="16-30">16-30 דירות</option>
                  <option value="31-50">31-50 דירות</option>
                  <option value="51-100">51-100 דירות</option>
                  <option value="100+">מעל 100 דירות</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare size={16} className="inline ml-1" />
                  הערות נוספות
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                  placeholder="ספרו לנו קצת על הבניין שלכם ומה אתם מחפשים..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                >
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-green-800">הודעתכם נשלחה בהצלחה! נחזור אליכם בקרוב.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
                >
                  <AlertCircle className="text-red-600" size={20} />
                  <span className="text-red-800">אירעה שגיאה בשליחה. אנא נסו שוב או צרו קשר טלפונית.</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    שולח...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    שלחו הודעה
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
              <p>* נחזור אליכם תוך 24 שעות עם הצעת מחיר מותאמת</p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                דרכי התקשרות
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-r ${method.color} rounded-xl w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                          {method.title}
                        </h4>
                        <p className="text-primary-600 font-medium">{method.info}</p>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Office Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                פרטים נוספים
              </h3>
              <div className="space-y-4">
                {officeInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 rounded-xl w-12 h-12 flex items-center justify-center">
                        <info.icon size={24} className="text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-700 font-medium">{info.info}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary-600 text-white rounded-2xl p-8 text-center"
            >
              <h3 className="text-xl font-bold mb-4">
                צריכים תשובה מהירה?
              </h3>
              <p className="text-primary-100 mb-6">
                התקשרו אלינו עכשיו לייעוץ חינם ללא התחייבות
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+972547274527"
                  className="bg-white text-primary-600 hover:bg-gray-50 font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                                      054-727-4527
                </a>
                <a
                  href="https://wa.me/972547274527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp מיידי
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
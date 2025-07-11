import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Shield, Clock } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Clock, number: '24/7', label: 'זמינות לחירום' },
    { icon: Shield, number: '100%', label: 'שירות מקצועי' },
    { icon: Award, number: 'שירות', label: 'מקצועי' },
    { icon: Users, number: 'צוות', label: 'מנוסה ואמין' },
  ]

  const serviceAreas = [
    'בניינים מגורים',
    'בניינים משרדים',
    'פרויקטים צעירים',
    'מתחמים קטנים',
    'מבנים מיוחדים',
    'פרויקטים חדשים'
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              קצת עלינו
              <span className="block text-primary-600 mt-2">מי אנחנו?</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-gray-900">שלג - ניהול מבנים</strong> הוקמה מתוך הבנה עמוקה שניהול מבנים איכותי 
                דורש מקצועיות, שקיפות וזמינות מתמדת. כחברה צעירה וחדשה, אנחנו מספקים שירות אישי ומחירים הוגנים.
              </p>
              
              <p>
                הצוות שלנו מביא ידע מקצועי מהתחום, ואנחנו מספקים שירותי ניהול מקיפים 
                החל מניהול שוטף ועד ליווי משפטי מלא. הגישה שלנו מתבססת על שקיפות מוחלטת, דוחות מפורטים ואפליקציה 
                חכמה לדיירים.
              </p>
              
              <p>
                <strong className="text-primary-600">למה דיירים יבחרו בנו?</strong> כי אנחנו מבינים שבית זה לא רק מקום מגורים, 
                זה המקום הבטוח שלכם. כחברה חדשה אנחנו מספקים שירות אישי ותשומת לב למידע פרט שחברות גדולות לא יכולות לספק.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary-600 text-white p-3 rounded-full w-fit mx-auto mb-3">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Manager Image & Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Manager Photo */}
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
                  alt="מנהל החברה"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">יונתן פנחסי</h3>
              <p className="text-gray-600 mb-3">מנהל ומייסד החברה</p>
              <p className="text-sm text-gray-700">
                "אנחנו מתחילים עם חזון ברור - לספק שירות מקצועי, אישי ובמחירים הוגנים"
              </p>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                סוגי מבנים שאנחנו מטפלים בהם
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-3 rounded-lg text-center text-sm font-medium text-gray-700 border border-gray-200"
                  >
                    {area}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 
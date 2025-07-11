import React from 'react'
import { motion } from 'framer-motion'
import { 
  Clock, 
  Eye, 
  Smartphone, 
  DollarSign, 
  Users, 
  Heart,
  CheckCircle2,
  Star
} from 'lucide-react'

const Advantages = () => {
  const advantages = [
    {
      icon: Clock,
      title: 'זמינות 24/7',
      description: 'תמיד כאן בשבילכם',
      details: 'מוקד טלפוני זמין בכל שעה, טיפול מיידי בחירום ומענה מהיר לכל פנייה',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'שקיפות מלאה',
      description: 'כל המידע פתוח ונגיש',
      details: 'דוחות כספיים חודשיים, מעקב אחר הוצאות, גישה לכל המסמכים דרך האפליקציה',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Smartphone,
      title: 'אפליקציה לדיירים',
      description: 'הכל בכף היד',
      details: 'דיווח תקלות, צפייה בדוחות, הודעות חשובות ותקשורת ישירה עם ההנהלה',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'מחירים הוגנים',
      description: 'יחס מחיר-ביצועים מעולה',
      details: 'תמחור שקוף, ללא עלויות נסתרות, חיסכון בעלויות תפעול ומשא ומתן עם ספקים',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'צוות מקצועי ומתמחה',
      description: 'ידע מקצועי וגישה חדשה',
      details: 'צוות עם רקע מקצועי בתחום, הכשרות עדכניות וגישה חדשה לניהול מבנים',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Heart,
      title: 'גישה אישית לכל לקוח',
      description: 'שירות מותאם ומחירים הוגנים',
      details: 'כחברה צעירה אנחנו מספקים שירות אישי ומחירים תחרותיים לכל בניין',
      color: 'from-red-500 to-red-600'
    }
  ]

  const testimonialStats = [
    { number: '24/7', label: 'זמינות לחירום' },
    { number: 'ניסיון', label: 'מוכח' },
    { number: 'שירות', label: 'מקצועי' },
    { number: 'צוות', label: 'מנוסה' }
  ]

  return (
    <section id="advantages" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            למה לבחור בנו?
            <span className="block text-primary-600 mt-2">6 סיבות טובות שתשכנעו אתכם</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו לא רק עוד חברת ניהול - אנחנו השותפים שלכם לבניין טוב יותר
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Icon with gradient background */}
              <div className={`bg-gradient-to-r ${advantage.color} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <advantage.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              
              <p className="text-primary-600 font-medium mb-4">
                {advantage.description}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {advantage.details}
              </p>

              {/* Check mark indicator */}
              <div className="flex items-center mt-6 text-green-600">
                <CheckCircle2 size={20} className="ml-2" />
                <span className="text-sm font-medium">כלול בחבילה</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              המספרים מדברים בעד עצמם
            </h3>
            <p className="text-gray-600">
              נתונים אמיתיים מהשטח
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-600 text-white rounded-2xl p-8 shadow-xl">
            <Star className="text-yellow-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">
              מוכנים להצטרף למשפחה שלנו?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              כחברה צעירה אנחנו מתמחים בשירות אישי ומחירים תחרותיים. הגיע הזמן שתכירו ניהול מבנים כמו שצריך.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-gray-50 font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                בואו נכיר - חינם!
              </button>
              <a
                href="https://wa.me/972547274527"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                שאלות? WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Advantages 
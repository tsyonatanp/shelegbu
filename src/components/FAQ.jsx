import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'איך נקבעת העלות של שירותי הניהול?',
      answer: 'העלות נקבעת לפי מספר גורמים: גודל הבניין, מספר הדירות, רמת השירות הנדרשת והשירותים הנוספים. אנחנו מספקים הצעת מחיר מפורטת וללא התחייבות, כולל פירוט מדויק של כל השירותים הכלולים בחבילה.'
    },
    {
      id: 2,
      question: 'האם אפשר להחליף רק חלק מהספקים ולא את כולם?',
      answer: 'כמובן! אנחנו מגמישים ומבינים שכל בניין יש לו צרכים שונים. ניתן להתחיל עם שירותי ניהול בסיסיים ולהוסיף שירותים נוספים בהדרגה, או לבחור רק שירותים ספציפיים כמו גבייה או תחזוקה. אנחנו מתאימים את עצמנו לצרכים שלכם.'
    },
    {
      id: 3,
      question: 'יש התחייבות לתקופה מינימלית?',
      answer: 'אנחנו מציעים חוזים גמישים. ההתחייבות המינימלית היא שנה אחת, אבל ניתן לסיים את החוזה בהודעה מוקדמת של 30 יום. אנחנו מאמינים שהשירות שלנו ידבר בעד עצמו ותרצו להמשיך איתנו לטווח ארוך.'
    },
    {
      id: 4,
      question: 'איך אתם מטפלים בדיירים שלא משלמים ועד בית?',
      answer: 'יש לנו תהליך מקצועי ויעיל לטיפול בסרבני תשלום: התראות ראשוניות, תכנית תשלומים, הליכי גבייה מתקדמים וליווי משפטי מלא. אנחנו פועלים תוך שמירה על יחסים טובים ובדרך כלל מגיעים להסדרים ללא צורך בהליכים משפטיים.'
    },
    {
      id: 5,
      question: 'מה כלול באפליקציה לדיירים?',
      answer: 'האפליקציה כוללת: דיווח תקלות בזמן אמת, צפייה בדוחות כספיים חודשיים, הודעות ועדכונים מההנהלה, מעקב אחר בקשות ותקלות, הזמנת שירותים נוספים, גישה לארכיון מסמכים ויצירת קשר ישיר עם צוות הניהול.'
    },
    {
      id: 6,
      question: 'איך מבטיחים שקיפות בניהול הכספים?',
      answer: 'שקיפות זה הבסיס שלנו: דוח כספי מפורט כל חודש, גישה לכל הקבלות והחשבוניות דרך האפליקציה, דיווח על כל הוצאה בזמן אמת, ישיבות ועד תקופתיות עם סקירת תקציב ואפשרות לשאלות ובירורים בכל עת.'
    },
    {
      id: 7,
      question: 'מה קורה במקרה של תקלה דחופה בלילה או בסוף השבוע?',
      answer: 'יש לנו מוקד זמין 24/7 לחירום אמיתי (נזילות, תקלות חשמל, בעיות ביטחון). יש לנו צוות טכנאים זמין גם בלילות ובסופי שבוע, ואנחנו מגיעים למקום תוך זמן קצר. לתקלות רגילות, נטפל בהן ביום העבודה הבא.'
    },
    {
      id: 8,
      question: 'איך מתבצע המעבר מחברת ניהול קודמת?',
      answer: 'אנחנו מטפלים בכל תהליך המעבר: קבלת מסמכים מהחברה הקודמת, העברת יתרות וחשבונות, תיאום עם ספקים קיימים, הדרכת ועד הבית והדיירים, והפעלת המערכות החדשות. המעבר מתבצע בצורה חלקה וללא הפרעה לחיי הדיירים.'
    },
    {
      id: 9,
      question: 'איזה ביטוחים אתם מספקים?',
      answer: 'אנחנו מנהלים ומתאמים את כל הביטוחים הנדרשים: ביטוח מבנה מקיף, ביטוח חבות כלפי צד שלישי, ביטוח נזקי מים, ביטוח אש, ובמידת הצורך גם ביטוחים נוספים. אנחנו עובדים עם חברות ביטוח מובילות ומשא ומתן על התעריפים הטובים ביותר.'
    },
    {
      id: 10,
      question: 'האם יש הנחה לבניינים גדולים או מתחמים?',
      answer: 'כן, אנחנו מציעים תעריפים מועדפים לבניינים גדולים (מעל 30 דירות) ומתחמים (מספר בניינים). ככל שהפרויקט גדול יותר, המחיר ליחידה נהיה אטרקטיבי יותר. נשמח לתת הצעת מחיר מותאמת לפרויקט שלכם.'
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <HelpCircle className="text-primary-600" size={48} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            שאלות ותשובות
            <span className="block text-primary-600 mt-2">כל מה שרציתם לדעת על השירות שלנו</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אספנו עבורכם את השאלות הנפוצות ביותר שדיירים שואלים אותנו
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-right flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    {openFAQ === faq.id ? (
                      <Minus className="text-primary-600 ml-3" size={20} />
                    ) : (
                      <Plus className="text-primary-600 ml-3" size={20} />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">
                    {faq.question}
                  </h3>
                </button>

                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-200 pt-4 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              עדיין יש לכם שאלות?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              אנחנו כאן כדי לענות על כל שאלה ולתת לכם את כל המידע שאתם צריכים לקבל החלטה נכונה
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                שאלו אותנו הכל
              </button>
              <a
                href="https://wa.me/972547274527"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp מיידי
              </a>
              <a
                href="tel:+972547274527"
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                חייגו עכשיו
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 
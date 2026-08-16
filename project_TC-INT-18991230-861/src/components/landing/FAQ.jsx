import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { FAQS } from '../../utils/constants'
import Container from '../common/Container'
import SectionHeader from '../common/SectionHeader'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-secondary-200 dark:border-secondary-700 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left"
      >
        <span className="text-lg font-semibold text-secondary-900 dark:text-white">
          {question}
        </span>
        <FaChevronDown 
          className={`text-primary-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-secondary-600 dark:text-secondary-400">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section-padding bg-secondary-50 dark:bg-secondary-800/50">
      <Container>
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our platform and services."
        />

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-lg p-6 md:p-8">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQ
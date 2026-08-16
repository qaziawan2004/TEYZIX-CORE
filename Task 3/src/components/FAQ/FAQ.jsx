import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../data/data';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

const FAQ = ({ isDark }) => {
  const [openId, setOpenId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#FF6584]">Questions</span>
          </h2>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            Everything you need to know about our product.
          </p>
        </div>

        <div className="relative mb-8" data-aos="fade-up">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition-colors ${
              isDark
                ? 'bg-[#1A1A2E] border-gray-700 text-white placeholder-gray-400'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          />
        </div>

        <div className="space-y-4" data-aos="fade-up">
          {filteredFAQs.length === 0 ? (
            <p className={`text-center py-8 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              No questions found. Try a different search.
            </p>
          ) : (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className={`border rounded-lg overflow-hidden transition-colors ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className={`w-full px-6 py-4 flex justify-between items-center transition-colors text-left ${
                    isDark
                      ? 'bg-[#1A1A2E] hover:bg-[#2A2A4A]'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <span className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 py-4 ${
                        isDark ? 'bg-[#0F0F1A] text-gray-300' : 'bg-gray-50 text-gray-600'
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
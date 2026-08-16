import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/data';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Testimonials = ({ isDark }) => {
  const [current, setCurrent] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  useEffect(() => {
    if (!isAutoSliding) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const goToPrev = () => {
    setIsAutoSliding(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoSliding(true), 8000);
  };

  const goToNext = () => {
    setIsAutoSliding(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoSliding(true), 8000);
  };

  return (
    <section id="testimonials" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#FF6584]">Customers</span> Say
          </h2>
          <p className={`max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Don't just take our word for it – hear from real users.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl shadow-xl p-8 md:p-12 ${
                isDark ? 'bg-[#1A1A2E]' : 'bg-gray-50'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#6C63FF]"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < testimonials[current].rating
                            ? 'text-yellow-400'
                            : isDark ? 'text-gray-600' : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <p className={`text-lg italic mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    "{testimonials[current].text}"
                  </p>
                  <h4 className={`font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonials[current].name}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow ${
                isDark ? 'bg-[#1A1A2E]' : 'bg-gray-100'
              }`}
            >
              <FaChevronLeft className={isDark ? 'text-white' : 'text-gray-700'} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoSliding(false);
                    setCurrent(idx);
                    setTimeout(() => setIsAutoSliding(true), 8000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === current
                      ? 'bg-[#6C63FF] w-6'
                      : isDark ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow ${
                isDark ? 'bg-[#1A1A2E]' : 'bg-gray-100'
              }`}
            >
              <FaChevronRight className={isDark ? 'text-white' : 'text-gray-700'} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
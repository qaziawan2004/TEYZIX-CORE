import React from 'react';
import { motion } from 'framer-motion';
import { productFeatures } from '../../data/data';

const ProductShowcase = ({ isDark }) => {  // ← Accept isDark prop
  const colorMap = {
    blue: 'from-blue-500 to-indigo-600',
    green: 'from-emerald-500 to-teal-600',
    purple: 'from-purple-500 to-pink-600',
    orange: 'from-orange-500 to-red-500',
    pink: 'from-pink-500 to-rose-600',
    indigo: 'from-indigo-500 to-purple-600',
  };

  const bgMap = {
    blue: 'bg-blue-50 dark:bg-blue-900/20',
    green: 'bg-emerald-50 dark:bg-emerald-900/20',
    purple: 'bg-purple-50 dark:bg-purple-900/20',
    orange: 'bg-orange-50 dark:bg-orange-900/20',
    pink: 'bg-pink-50 dark:bg-pink-900/20',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/20',
  };

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1 bg-[#6C63FF]/10 text-[#6C63FF] text-sm font-semibold rounded-full mb-4 border border-[#6C63FF]/20">
            ✨ Features
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#FF6584]">Product</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Everything you need to build amazing products. Simple, powerful, and
            designed for teams of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`${bgMap[feature.color]} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                isDark 
                  ? 'bg-[#1A1A2E] border-[#1A1A2E] hover:border-[#6C63FF]/30' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#6C63FF]/30'
              } group cursor-pointer relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6C63FF]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorMap[feature.color]} flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {feature.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
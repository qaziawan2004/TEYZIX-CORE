import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../../data/data';
import { FaCheck } from 'react-icons/fa';

const Pricing = ({ isDark }) => {  // ← Accept isDark prop
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1 bg-[#FF6584]/10 text-[#FF6584] text-sm font-semibold rounded-full mb-4 border border-[#FF6584]/20">
            💰 Pricing
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#FF6584]">Transparent</span> Pricing
          </h2>
          <p className={`max-w-2xl mx-auto mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Choose the plan that works best for your team. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? (isDark ? 'text-white font-semibold' : 'text-gray-900 font-semibold') : (isDark ? 'text-gray-400' : 'text-gray-500')}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-gradient-to-r from-[#6C63FF] to-[#FF6584] rounded-full transition-colors shadow-lg"
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-md ${
                  isYearly ? 'left-7' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? (isDark ? 'text-white font-semibold' : 'text-gray-900 font-semibold') : (isDark ? 'text-gray-400' : 'text-gray-500')}`}>
              Yearly <span className="text-green-500 text-xs">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, index) => {
            const price = isYearly ? plan.price * 12 * 0.8 : plan.price;
            const priceDisplay = isYearly
              ? `$${Math.round(price / 12)}/mo`
              : `$${price}/mo`;

            return (
              <motion.div
                key={plan.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`rounded-3xl p-8 ${
                  plan.isPopular
                    ? 'bg-gradient-to-br from-[#6C63FF] to-[#5A52D5] text-white shadow-2xl scale-105 ring-4 ring-[#6C63FF]/30 ring-offset-4'
                    : isDark
                      ? 'bg-[#1A1A2E] text-white shadow-lg border border-[#1A1A2E] hover:border-[#6C63FF]/30'
                      : 'bg-gray-50 text-gray-900 shadow-lg border border-gray-200 hover:border-[#6C63FF]/30'
                } transition-all duration-300`}
              >
                {plan.isPopular && (
                  <span className="inline-block px-4 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-4">
                    🌟 Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.isPopular ? 'text-white/80' : (isDark ? 'text-gray-400' : 'text-gray-500')}`}>
                  {plan.description}
                </p>
                <div className="text-4xl font-bold mb-6">
                  {priceDisplay}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <FaCheck className={plan.isPopular ? 'text-white' : 'text-[#6C63FF]'} />
                      <span className={isDark && !plan.isPopular ? 'text-gray-300' : ''}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.isPopular
                      ? 'bg-white text-[#6C63FF] hover:shadow-xl hover:scale-105'
                      : isDark
                        ? 'bg-[#0F0F1A] text-white hover:bg-[#2A2A4A] hover:scale-105'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300 hover:scale-105'
                  } transition-all`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
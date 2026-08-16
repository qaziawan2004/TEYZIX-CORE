import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { featureComparison } from '../../data/data';

const FeatureComparison = ({ isDark }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleRows = expanded ? featureComparison.rows : featureComparison.rows.slice(0, 5);

  return (
    <section id= "features" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Compare <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#FF6584]">Features</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            See exactly what each plan offers and choose the right one for you.
          </p>
        </div>

        <div className="overflow-x-auto" data-aos="fade-up">
          <table className="w-full border-collapse">
            <thead>
              <tr className={isDark ? 'bg-[#1A1A2E]' : 'bg-gray-100'}>
                {featureComparison.headers.map((header, idx) => (
                  <th
                    key={idx}
                    className={`py-4 px-6 text-left font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    } ${idx === 0 ? 'text-left' : 'text-center'}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`border-b ${
                    isDark ? 'border-gray-700' : 'border-gray-200'
                  } ${
                    idx % 2 === 0
                      ? isDark ? 'bg-[#0F0F1A]/50' : 'bg-gray-50'
                      : isDark ? 'bg-[#0F0F1A]' : 'bg-white'
                  }`}
                >
                  <td className={`py-4 px-6 font-medium ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {row.feature}
                  </td>
                  {row.values.map((value, vIdx) => (
                    <td
                      key={vIdx}
                      className={`py-4 px-6 text-center ${
                        value === '✅' 
                          ? 'text-green-500 text-xl' 
                          : isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {value}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>

          {featureComparison.rows.length > 5 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setExpanded(!expanded)}
                className="px-6 py-2 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5A52D5] transition-colors"
              >
                {expanded ? 'Show Less' : 'Show All Features'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
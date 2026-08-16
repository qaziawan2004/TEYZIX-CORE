import React from 'react'
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'

const KPICard = ({ label, value, change, icon: Icon, color, bgColor, prefix = '', suffix = '' }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-4 sm:p-5 md:p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
            {label}
          </p>
          <p className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900 dark:text-white mt-0.5 sm:mt-1 truncate">
            {prefix}
            {typeof value === 'number' ? value.toLocaleString() : value || '0'}
            {suffix}
          </p>
        </div>
        <div className={`p-2 sm:p-3 rounded-xl ${bgColor} flex-shrink-0 ml-2`}>
          <Icon className={`text-base sm:text-xl md:text-2xl ${color}`} />
        </div>
      </div>
      {change !== undefined && change !== null && (
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-2 sm:mt-3">
          <span className={`flex items-center text-[10px] sm:text-xs md:text-sm font-medium ${change > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
            {change > 0 ? <FiArrowUp size={10} className="sm:text-sm mr-0.5" /> : <FiArrowDown size={10} className="sm:text-sm mr-0.5" />}
            {Math.abs(change)}%
          </span>
          <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 dark:text-gray-400">vs last month</span>
        </div>
      )}
    </div>
  )
}

export default KPICard
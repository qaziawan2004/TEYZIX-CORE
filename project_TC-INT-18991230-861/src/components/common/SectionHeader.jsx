import React from 'react'

const SectionHeader = ({ 
  badge, 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  const alignmentClass = centered ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 ${alignmentClass} ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary-600 bg-primary-100 dark:bg-primary-900/30 dark:text-primary-400 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  glass = false,
  padding = 'p-6',
  ...props 
}) => {
  const baseStyles = 'rounded-2xl bg-white dark:bg-secondary-800 shadow-lg'
  const hoverStyles = hover ? 'card-hover' : ''
  const glassStyles = glass ? 'glass-effect' : ''
  const paddingStyles = padding

  return (
    <div 
      className={`
        ${baseStyles}
        ${hoverStyles}
        ${glassStyles}
        ${paddingStyles}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
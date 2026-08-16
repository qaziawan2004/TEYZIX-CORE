import React from 'react'

const Container = ({ 
  children, 
  className = '',
  maxWidth = '7xl',
  ...props 
}) => {
  const maxWidthClasses = {
    'sm': 'max-w-screen-sm',
    'md': 'max-w-screen-md',
    'lg': 'max-w-screen-lg',
    'xl': 'max-w-screen-xl',
    '7xl': 'max-w-7xl',
    'full': 'max-w-full'
  }

  return (
    <div 
      className={`
        mx-auto px-4 sm:px-6 lg:px-8
        ${maxWidthClasses[maxWidth]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
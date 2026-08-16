import React from 'react'

const Loader = ({ size = 'md', text = 'Loading...' }) => {
  const sizes = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4',
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizes[size]} border-blue-500 border-t-transparent rounded-full animate-spin`}></div>
      {text && <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">{text}</p>}
    </div>
  )
}

export default Loader
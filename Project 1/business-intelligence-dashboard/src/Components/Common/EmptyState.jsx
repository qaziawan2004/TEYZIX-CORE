import React from 'react'

const EmptyState = ({ title = 'No data found', description = 'There are no items to display at the moment.' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="text-6xl mb-4">📭</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mt-1">{description}</p>
    </div>
  )
}

export default EmptyState
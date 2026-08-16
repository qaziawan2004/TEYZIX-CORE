import React from 'react'
import Button from './Button'

const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="text-6xl mb-4">⚠️</div>
      <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">Something went wrong</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} className="mt-4">
          Try Again
        </Button>
      )}
    </div>
  )
}

export default ErrorState
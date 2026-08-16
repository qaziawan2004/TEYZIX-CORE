import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

const StepIndicator = ({ currentStep, totalSteps = 3 }) => {
  const steps = ['Personal Info', 'Account Setup', 'Company Details']

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center relative">
        {/* Progress Bar Background */}
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-secondary-200 dark:bg-secondary-700" />
        
        {/* Progress Bar Fill */}
        <motion.div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-primary-600"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />

        {/* Steps */}
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber === currentStep
          const isCompleted = stepNumber < currentStep

          return (
            <div key={index} className="relative flex flex-col items-center z-10">
              <motion.div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                  ${isCompleted 
                    ? 'bg-primary-600 text-white' 
                    : isActive 
                      ? 'bg-primary-600 text-white ring-4 ring-primary-300 dark:ring-primary-800' 
                      : 'bg-secondary-200 dark:bg-secondary-700 text-secondary-500 dark:text-secondary-400'
                  }
                `}
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {isCompleted ? <FaCheck size={14} /> : stepNumber}
              </motion.div>
              <span className={`
                mt-2 text-xs font-medium hidden sm:block
                ${isActive 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : isCompleted
                    ? 'text-secondary-600 dark:text-secondary-400'
                    : 'text-secondary-400 dark:text-secondary-500'
                }
              `}>
                {step}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StepIndicator
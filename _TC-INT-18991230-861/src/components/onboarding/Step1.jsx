import React from 'react'
import { motion } from 'framer-motion'
import { useOnboarding } from '../../context/OnboardingContext'
import { validateOnboardingStep1 } from '../../utils/validation'
import Button from '../common/Button'

const Step1 = ({ onNext }) => {
  const { formData, updateFormData } = useOnboarding()
  const [errors, setErrors] = React.useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateOnboardingStep1(formData)
    
    if (Object.keys(validationErrors).length === 0) {
      onNext()
    } else {
      setErrors(validationErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Personal Information
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Tell us about yourself to get started.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 rounded-lg border 
              ${errors.fullName 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
              }
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
              focus:outline-none focus:ring-2 transition-all
            `}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="mt-1.5 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 rounded-lg border 
              ${errors.email 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
              }
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
              focus:outline-none focus:ring-2 transition-all
            `}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 rounded-lg border 
              ${errors.company 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
              }
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
              focus:outline-none focus:ring-2 transition-all
            `}
            placeholder="Acme Inc."
          />
          {errors.company && (
            <p className="mt-1.5 text-sm text-red-500">{errors.company}</p>
          )}
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Your Role *
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 rounded-lg border 
              ${errors.role 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
              }
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
              focus:outline-none focus:ring-2 transition-all appearance-none
            `}
          >
            <option value="">Select your role</option>
            <option value="founder">Founder / CEO</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
            <option value="other">Other</option>
          </select>
          {errors.role && (
            <p className="mt-1.5 text-sm text-red-500">{errors.role}</p>
          )}
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth>
          Continue
        </Button>
      </form>
    </motion.div>
  )
}

export default Step1
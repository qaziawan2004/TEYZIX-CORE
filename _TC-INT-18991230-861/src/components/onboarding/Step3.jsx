import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useOnboarding } from '../../context/OnboardingContext'
import { useAuth } from '../../context/AuthContext'
import { validateOnboardingStep3 } from '../../utils/validation'
import Button from '../common/Button'

const Step3 = ({ onNext, onPrev }) => {
  const { formData, updateFormData } = useOnboarding()
  const { register } = useAuth()
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateOnboardingStep3(formData)
    
    if (Object.keys(validationErrors).length === 0) {
      const userData = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        company: formData.company,
        role: formData.role,
        industry: formData.industry,
        teamSize: formData.teamSize,
        goals: formData.goals,
        newsletter: formData.newsletter
      }
      
      register(userData)
      onNext()
    } else {
      setErrors(validationErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const val = type === 'checkbox' ? checked : value
    updateFormData({ [name]: val })
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
        Company Details
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Tell us more about your company.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Industry *
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 rounded-lg border 
              ${errors.industry 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
              }
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
              focus:outline-none focus:ring-2 transition-all appearance-none
            `}
          >
            <option value="">Select your industry</option>
            <option value="technology">Technology</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="ecommerce">E-commerce</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="other">Other</option>
          </select>
          {errors.industry && (
            <p className="mt-1.5 text-sm text-red-500">{errors.industry}</p>
          )}
        </div>

        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Team Size *
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 rounded-lg border 
              ${errors.teamSize 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
              }
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
              focus:outline-none focus:ring-2 transition-all appearance-none
            `}
          >
            <option value="">Select team size</option>
            <option value="1-5">1-5 employees</option>
            <option value="6-20">6-20 employees</option>
            <option value="21-50">21-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="200+">200+ employees</option>
          </select>
          {errors.teamSize && (
            <p className="mt-1.5 text-sm text-red-500">{errors.teamSize}</p>
          )}
        </div>

        <div>
          <label htmlFor="goals" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            What are your primary goals? *
          </label>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            rows={3}
            className={`
              w-full px-4 py-3 rounded-lg border 
              ${errors.goals 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
              }
              bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
              focus:outline-none focus:ring-2 transition-all resize-none
            `}
            placeholder="e.g., Increase revenue, improve team collaboration, automate workflows..."
          />
          {errors.goals && (
            <p className="mt-1.5 text-sm text-red-500">{errors.goals}</p>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="newsletter" className="text-sm text-gray-600 dark:text-gray-400">
            Subscribe to our newsletter for updates and tips
          </label>
        </div>

        <div className="flex space-x-4 pt-4">
          <Button type="button" variant="secondary" size="lg" onClick={onPrev}>
            Back
          </Button>
          <Button type="submit" variant="primary" size="lg" fullWidth>
            Complete Setup
          </Button>
        </div>
      </form>
    </motion.div>
  )
}

export default Step3
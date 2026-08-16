import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useOnboarding } from '../../context/OnboardingContext'
import { validateOnboardingStep2 } from '../../utils/validation'
import Button from '../common/Button'

const Step2 = ({ onNext, onPrev }) => {
  const { formData, updateFormData } = useOnboarding()
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateOnboardingStep2(formData)
    
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
        Account Setup
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Create your account credentials.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Password *
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`
                w-full px-4 py-3 rounded-lg border 
                ${errors.password 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                }
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                focus:outline-none focus:ring-2 transition-all pr-12
              `}
              placeholder="Min 8 characters"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1.5 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Confirm Password *
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`
                w-full px-4 py-3 rounded-lg border 
                ${errors.confirmPassword 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 dark:border-gray-600 focus:ring-primary-500'
                }
                bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                focus:outline-none focus:ring-2 transition-all pr-12
              `}
              placeholder="Re-enter password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1.5 text-sm text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="flex space-x-4 pt-4">
          <Button type="button" variant="secondary" size="lg" onClick={onPrev}>
            Back
          </Button>
          <Button type="submit" variant="primary" size="lg" fullWidth>
            Continue
          </Button>
        </div>
      </form>
    </motion.div>
  )
}

export default Step2
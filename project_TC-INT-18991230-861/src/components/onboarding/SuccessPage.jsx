import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaRocket } from 'react-icons/fa'
import Button from '../common/Button'
import { useOnboarding } from '../../context/OnboardingContext'

const SuccessPage = () => {
  const { resetOnboarding } = useOnboarding()

  const handleReset = () => {
    resetOnboarding()
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="mb-6">
        <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
          <FaCheckCircle className="text-green-600 text-5xl" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-3">
        You're All Set! 🎉
      </h2>
      <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-2">
        Your account has been successfully created.
      </p>
      <p className="text-secondary-500 dark:text-secondary-500 mb-8">
        Welcome to SaaSPro! We're excited to have you on board.
      </p>

      <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-center space-x-2 text-primary-700 dark:text-primary-300">
          <FaRocket className="text-xl" />
          <span className="font-semibold">What's next?</span>
        </div>
        <p className="text-sm text-primary-600 dark:text-primary-400 mt-2">
          Check your email for a confirmation link and start exploring your dashboard.
        </p>
      </div>

      <div className="space-y-3">
        <Link to="/dashboard" onClick={handleReset}>
          <Button variant="primary" size="lg" fullWidth>
            Go to Dashboard
          </Button>
        </Link>
        <Link to="/" onClick={handleReset}>
          <Button variant="secondary" size="lg" fullWidth>
            Return to Home
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default SuccessPage
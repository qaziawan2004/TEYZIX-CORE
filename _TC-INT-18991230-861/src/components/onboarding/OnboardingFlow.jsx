import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../../context/OnboardingContext'
import { useAuth } from '../../context/AuthContext'
import StepIndicator from './StepIndicator'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import SuccessPage from './SuccessPage'
import LoginPage from './LoginPage'

const OnboardingFlow = () => {
  const { step, nextStep, prevStep, goToStep } = useOnboarding()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(true)

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  const handleCreateAccount = () => {
    setShowLogin(false)
    // Go to step 1 (personal info) to start registration
    goToStep(1)
  }

  const handleBackToLogin = () => {
    setShowLogin(true)
    goToStep(0)
  }

  const renderStep = () => {
    // If on step 0 (login) and showLogin is true, show login page
    if (step === 0 && showLogin) {
      return <LoginPage onNext={() => {
        // After successful login, go to step 1
        setShowLogin(true)
        goToStep(1)
      }} onCreateAccount={handleCreateAccount} />
    }
    
    switch (step) {
      case 1:
        return <Step1 onNext={nextStep} />
      case 2:
        return <Step2 onNext={nextStep} onPrev={prevStep} />
      case 3:
        return <Step3 onNext={nextStep} onPrev={prevStep} />
      case 4:
        return <SuccessPage />
      default:
        return null
    }
  }

  const showStepIndicator = step > 0 && step < 4

  return (
    <div className="max-w-2xl mx-auto">
      {showStepIndicator && <StepIndicator currentStep={step} />}
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default OnboardingFlow
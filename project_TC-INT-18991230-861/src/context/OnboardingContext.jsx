import React, { createContext, useState, useContext } from 'react'

export const OnboardingContext = createContext()

export const OnboardingProvider = ({ children }) => {
  const [step, setStep] = useState(0) // Start at 0 for login
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    password: '',
    confirmPassword: '',
    industry: '',
    teamSize: '',
    goals: '',
    newsletter: false
  })

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0))
  const goToStep = (stepNumber) => setStep(stepNumber)

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const resetOnboarding = () => {
    setStep(0)
    setFormData({
      fullName: '',
      email: '',
      company: '',
      role: '',
      password: '',
      confirmPassword: '',
      industry: '',
      teamSize: '',
      goals: '',
      newsletter: false
    })
  }

  return (
    <OnboardingContext.Provider value={{
      step,
      formData,
      nextStep,
      prevStep,
      goToStep,
      updateFormData,
      resetOnboarding
    }}>
      {children}
    </OnboardingContext.Provider>
  )
}

export const useOnboarding = () => {
  const context = useContext(OnboardingContext)
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider')
  }
  return context
}

export default OnboardingContext
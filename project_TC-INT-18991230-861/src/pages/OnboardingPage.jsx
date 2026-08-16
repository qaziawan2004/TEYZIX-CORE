import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import OnboardingFlow from '../components/onboarding/OnboardingFlow'

const OnboardingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 section-padding">
        <div className="container-custom">
          <OnboardingFlow />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default OnboardingPage
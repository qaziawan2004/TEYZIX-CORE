import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPlay, FaArrowRight } from 'react-icons/fa'
import Button from '../common/Button'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
      
      {/* Animated Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-300/20 dark:bg-primary-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gray-300/20 dark:bg-gray-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
              <span>🚀 New features available</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Build Your SaaS
              <span className="gradient-text block">Faster Than Ever</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              All-in-one platform to launch, grow, and scale your software business with powerful tools and beautiful interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/onboarding">
                <Button variant="primary" size="lg" className="group">
                  Start Free Trial
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group">
                <FaPlay className="mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 mt-8">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">10K+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Users</p>
              </div>
              <div className="w-px h-10 bg-gray-300 dark:bg-gray-700" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Uptime SLA</p>
              </div>
              <div className="w-px h-10 bg-gray-300 dark:bg-gray-700" />
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">4.9⭐</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">User Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 aspect-[4/3] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-2">Dashboard Preview</h3>
                  <p className="text-primary-100">Real-time analytics at a glance</p>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">$12.4K</div>
                      <div className="text-sm text-primary-100">Revenue</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">256</div>
                      <div className="text-sm text-primary-100">Users</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">87%</div>
                      <div className="text-sm text-primary-100">Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg px-4 py-2 animate-bounce-slow">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">🔥 Popular</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
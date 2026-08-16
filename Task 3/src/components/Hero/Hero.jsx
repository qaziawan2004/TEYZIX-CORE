import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #6C63FF 0%, #3F3D56 50%, #0F0F1A 100%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF6584]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#6C63FF]/30 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/10"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              🚀 Now Available – Version 3.0
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Build Amazing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6584] to-[#FF9A76]">
                Products
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-white/80">
                With Zero Effort
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-white/70 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The modern way to build stunning landing pages. Fast, beautiful, and
              packed with features your users will love.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a
                href="#pricing"
                className="px-6 md:px-8 py-3 bg-gradient-to-r from-[#6C63FF] to-[#5A52D5] text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 font-semibold shadow-lg text-sm md:text-base"
              >
                Get Started <FaArrowRight />
              </a>
              <a
                href="#demo"
                className="px-6 md:px-8 py-3 border-2 border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/40 transition-all flex items-center gap-2 backdrop-blur-sm text-sm md:text-base"
              >
                <FaPlay /> Watch Demo
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-6 md:gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { number: '10K+', label: 'Active Users' },
                { number: '99.9%', label: 'Uptime' },
                { number: '4.9⭐', label: 'Average Rating' },
              ].map((stat, idx) => (
                <div key={idx} className="text-white">
                  <div className="text-xl md:text-2xl font-bold">{stat.number}</div>
                  <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Product Preview */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
              {/* Window controls */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-xs text-white/40 ml-2">product-preview</span>
              </div>

              {/* Preview content */}
              <div className="bg-white/5 rounded-2xl p-6 md:p-8 min-h-[200px] md:min-h-[280px] flex items-center justify-center border border-white/5">
                <div className="text-center">
                  <div className="text-5xl md:text-7xl mb-3 md:mb-4 animate-bounce">🚀</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                    Your Product Here
                  </h3>
                  <p className="text-sm md:text-base text-white/50">
                    Preview your amazing product
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#FF6584] to-[#FF9A76] px-4 py-2 rounded-full shadow-2xl animate-bounce">
              <span className="text-white font-bold text-xs md:text-sm">✨ New Feature</span>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-[#6C63FF] px-4 py-2 rounded-full shadow-2xl animate-bounce delay-500">
              <span className="text-white font-bold text-xs md:text-sm">⚡ Fast & Secure</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
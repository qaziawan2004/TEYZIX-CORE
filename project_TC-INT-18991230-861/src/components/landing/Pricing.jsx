import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import { PRICING_PLANS } from '../../utils/constants'
import Container from '../common/Container'
import SectionHeader from '../common/SectionHeader'
import Card from '../common/Card'
import Button from '../common/Button'

const Pricing = () => {
  const [billing, setBilling] = useState('monthly')

  return (
    <section id="pricing" className="section-padding">
      <Container>
        <SectionHeader
          badge="Pricing"
          title="Choose Your Plan"
          subtitle="Select the perfect plan for your business needs. All plans include a 14-day free trial."
        />

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billing === 'monthly'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billing === 'yearly'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Yearly <span className="text-xs text-primary-600 dark:text-primary-400">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan, index) => {
            const price = billing === 'yearly' 
              ? `$${Math.round(parseInt(plan.price.replace('$', '')) * 0.8 * 12)}`
              : plan.price

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={plan.popular ? 'md:-mt-4' : ''}
              >
                <Card 
                  className={`h-full flex flex-col relative ${
                    plan.popular 
                      ? 'border-2 border-primary-600 dark:border-primary-400 shadow-xl' 
                      : ''
                  }`}
                  padding="p-8"
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {plan.description}
                    </p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {price}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="text-gray-500 dark:text-gray-400 ml-1">
                          /{billing === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <FaCheck className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? 'primary' : 'outline'} 
                    fullWidth
                    className={plan.popular ? 'shadow-lg' : ''}
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Pricing
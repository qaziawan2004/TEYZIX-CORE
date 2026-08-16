import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { TESTIMONIALS } from '../../utils/constants'
import Container from '../common/Container'
import SectionHeader from '../common/SectionHeader'
import Card from '../common/Card'

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary-50 dark:bg-secondary-800/50">
      <Container>
        <SectionHeader
          badge="Testimonials"
          title="What Our Customers Say"
          subtitle="Join thousands of satisfied customers who trust our platform for their business needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-secondary-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < testimonial.rating ? 'text-yellow-400' : 'text-secondary-300 dark:text-secondary-600'}
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-secondary-600 dark:text-secondary-300 italic">
                  "{testimonial.content}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials
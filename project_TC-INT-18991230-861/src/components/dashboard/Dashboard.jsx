import React from 'react'
import { motion } from 'framer-motion'
import AnalyticsCard from './AnalyticsCard'
import RecentActivity from './RecentActivity'
import UserProfile from './UserProfile'
import Container from '../common/Container'

const Dashboard = () => {
  const analyticsData = [
    {
      title: 'Total Revenue',
      value: '$48,295',
      icon: '💰',
      change: 12.5,
      color: 'green'
    },
    {
      title: 'Active Users',
      value: '2,847',
      icon: '👥',
      change: 8.3,
      color: 'blue'
    },
    {
      title: 'Conversion Rate',
      value: '24.8%',
      icon: '📈',
      change: -2.1,
      color: 'purple'
    },
    {
      title: 'Active Projects',
      value: '156',
      icon: '📊',
      change: 15.7,
      color: 'orange'
    }
  ]

  return (
    <div className="py-8">
      <Container>
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            Welcome back! Here's what's happening with your business.
          </motion.p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {analyticsData.map((data, index) => (
            <AnalyticsCard
              key={index}
              title={data.title}
              value={data.value}
              icon={data.icon}
              change={data.change}
              color={data.color}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          <div>
            <UserProfile />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Dashboard
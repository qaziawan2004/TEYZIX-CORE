import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '../common/Card'

const RecentActivity = () => {
  const [showAll, setShowAll] = useState(false)
  
  const allActivities = [
    {
      id: 1,
      user: 'Sarah Johnson',
      action: 'created a new project',
      project: 'Mobile App Redesign',
      time: '2 minutes ago',
      avatar: 'SJ'
    },
    {
      id: 2,
      user: 'Michael Chen',
      action: 'commented on',
      project: 'API Documentation',
      time: '15 minutes ago',
      avatar: 'MC'
    },
    {
      id: 3,
      user: 'Emily Rodriguez',
      action: 'completed task',
      project: 'User Authentication',
      time: '1 hour ago',
      avatar: 'ER'
    },
    {
      id: 4,
      user: 'James Wilson',
      action: 'joined the team',
      project: 'Design Team',
      time: '2 hours ago',
      avatar: 'JW'
    },
    {
      id: 5,
      user: 'Lisa Park',
      action: 'updated',
      project: 'Marketing Strategy',
      time: '3 hours ago',
      avatar: 'LP'
    },
    {
      id: 6,
      user: 'David Kim',
      action: 'deployed new version',
      project: 'Production Release',
      time: '5 hours ago',
      avatar: 'DK'
    },
    {
      id: 7,
      user: 'Anna Martinez',
      action: 'created a new ticket',
      project: 'Bug Fix #245',
      time: '6 hours ago',
      avatar: 'AM'
    }
  ]

  const displayedActivities = showAll ? allActivities : allActivities.slice(0, 5)

  const handleViewAll = () => {
    setShowAll(!showAll)
  }

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Recent Activity
        </h3>
        <button 
          onClick={handleViewAll}
          className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors cursor-pointer"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {displayedActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                {activity.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white truncate">
                  <span className="font-semibold">{activity.user}</span>
                  <span className="text-gray-500 dark:text-gray-400"> {activity.action} </span>
                  <span className="font-medium text-primary-600 dark:text-primary-400">
                    {activity.project}
                  </span>
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {activity.time}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Card>
  )
}

export default RecentActivity
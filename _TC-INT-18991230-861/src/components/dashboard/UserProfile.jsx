import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaEnvelope, FaBuilding, FaCog, FaSignOutAlt, FaTrash, FaTimes } from 'react-icons/fa'
import Card from '../common/Card'
import Button from '../common/Button'
import { useAuth } from '../../context/AuthContext'

const UserProfile = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated, logout, deleteAccount } = useAuth()
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleEditProfile = () => {
    navigate('/onboarding')
  }

  const handleSignOut = () => {
    logout()
    navigate('/')
  }

  const handleDeleteAccount = () => {
    deleteAccount()
    setShowDeleteModal(false)
    navigate('/')
    alert('Account deleted successfully.')
  }

  // Get user initials
  const getUserInitials = () => {
    if (user?.fullName) {
      const names = user.fullName.split(' ')
      if (names.length >= 2) {
        return names[0][0] + names[1][0]
      }
      return names[0][0] || 'U'
    }
    return 'U'
  }

  if (!isAuthenticated) {
    return (
      <Card className="h-full">
        <div className="flex flex-col items-center text-center py-8">
          <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl mb-4">
            👤
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Not Logged In
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Please log in to access your profile
          </p>
          <button
            onClick={() => navigate('/onboarding')}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors font-medium"
          >
            <span>Go to Login</span>
          </button>
        </div>
      </Card>
    )
  }

  return (
    <>
      <Card className="h-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center text-2xl font-bold mb-4"
          >
            {getUserInitials()}
          </motion.div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {user?.fullName || 'User'}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium">
            {user?.role || 'Member'}
          </p>

          <div className="w-full mt-6 space-y-3">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
              <FaEnvelope className="text-gray-400 dark:text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{user?.email || 'No email'}</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
              <FaBuilding className="text-gray-400 dark:text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{user?.company || 'No company'}</span>
            </div>
          </div>

          <div className="w-full mt-6 space-y-2">
            <button 
              onClick={handleEditProfile}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors font-medium cursor-pointer"
            >
              <FaCog size={16} />
              <span>Edit Profile</span>
            </button>
            
            <button 
              onClick={handleSignOut}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium cursor-pointer"
            >
              <FaSignOutAlt size={16} />
              <span>Sign Out</span>
            </button>

            <button 
              onClick={() => setShowDeleteModal(true)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors font-medium cursor-pointer"
            >
              <FaTrash size={16} />
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      </Card>

      {/* Delete Account Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowDeleteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Delete Account
                </h3>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <FaTimes className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-3xl mx-auto mb-4">
                  ⚠️
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Are you sure you want to delete your account? This action is <span className="font-bold text-red-600 dark:text-red-400">irreversible</span> and all your data will be permanently lost.
                </p>
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="danger"
                  fullWidth
                  onClick={handleDeleteAccount}
                >
                  Yes, Delete
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default UserProfile
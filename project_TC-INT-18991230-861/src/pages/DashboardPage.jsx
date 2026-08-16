import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Dashboard from '../components/dashboard/Dashboard'
import { FaHome } from 'react-icons/fa'
import Button from '../components/common/Button'
import { useAuth } from '../context/AuthContext'

const DashboardPage = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="pt-20">
        <div className="container-custom mt-4">
          <Link to="/">
            <Button variant="secondary" size="sm">
              <FaHome className="mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Dashboard />
      </main>
    </div>
  )
}

export default DashboardPage
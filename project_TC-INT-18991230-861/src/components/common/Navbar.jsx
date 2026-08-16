import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../../hooks/useTheme'
import { useAuth } from '../../context/AuthContext'
import { NAV_LINKS } from '../../utils/constants'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const isHomePage = location.pathname === '/'

  // Get user initials for avatar
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

  // Get first name
  const getFirstName = () => {
    if (user?.fullName) {
      return user.fullName.split(' ')[0]
    }
    return 'User'
  }

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled || !isHomePage ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - White in dark mode */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0" onClick={closeMenu}>
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              TECH<span className="text-primary-600 dark:text-primary-400">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage && NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Link to="/dashboard" className="text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Dashboard
            </Link>
            
            {/* Theme Toggle - White in dark mode */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="text-yellow-400" size={20} /> : <FaMoon className="text-gray-700" size={20} />}
            </button>

            {/* If user is authenticated and on homepage, show user name, else show Get Started */}
            {isHomePage && isAuthenticated && user ? (
              <Link to="/dashboard">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors cursor-pointer border-2 border-primary-200 dark:border-primary-700">
                  <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                    {getUserInitials()}
                  </div>
                  <span className="text-sm font-semibold text-primary-700 dark:text-white">
                    {getFirstName()}
                  </span>
                </div>
              </Link>
            ) : (
              <Link to="/onboarding">
                <Button variant="primary" size="sm">Get Started</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Buttons - White in dark mode */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="text-yellow-400" size={18} /> : <FaMoon className="text-gray-700" size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - White text in dark mode */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 dark:border-gray-700 animate-fade-in bg-white dark:bg-gray-900 rounded-b-2xl shadow-2xl">
            <div className="flex flex-col space-y-2 px-4">
              {isHomePage && NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium px-4 py-3 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
              <Link 
                to="/dashboard" 
                onClick={closeMenu} 
                className="text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium px-4 py-3 rounded-lg"
              >
                Dashboard
              </Link>
              
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              
              {isHomePage && isAuthenticated && user ? (
                <Link to="/dashboard" onClick={closeMenu}>
                  <div className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                      {getUserInitials()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-700 dark:text-white">
                        {user?.fullName || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Go to Dashboard →
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link to="/onboarding" onClick={closeMenu} className="px-1">
                  <Button variant="primary" fullWidth size="lg">
                    Get Started
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
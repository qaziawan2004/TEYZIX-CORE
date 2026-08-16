import React, { useState, useEffect } from 'react'
import { FiMenu, FiBell, FiSearch, FiX } from 'react-icons/fi'

const Header = ({ sidebarOpen, setSidebarOpen, pageTitle }) => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header 
      className="fixed top-0 right-0 h-16 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 transition-all duration-300 z-40 flex items-center px-3 sm:px-4 md:px-6 shadow-sm"
      style={{ 
        left: isMobile ? '0' : (sidebarOpen ? '16rem' : '5rem')
      }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 flex-shrink-0"
        >
          <FiMenu size={22} className="text-gray-700 dark:text-gray-300" />
        </button>

        <h1 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate hidden sm:block">
          {pageTitle}
        </h1>

        {/* Mobile Search Toggle */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 md:hidden flex-shrink-0"
        >
          <FiSearch size={20} className="text-gray-700 dark:text-gray-300" />
        </button>

        {/* Search Bar - Desktop */}
        <div className="relative hidden md:block flex-1 max-w-xs lg:max-w-md ml-2">
          <input
            type="text"
            placeholder="Type here to search..."
            className="w-full px-4 py-2 pl-10 bg-gray-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 text-sm"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Mobile Search Overlay */}
        {searchOpen && (
          <div className="fixed inset-0 top-16 bg-white dark:bg-slate-800 z-50 p-4 md:hidden">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type here to search..."
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                <FiX size={24} className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-auto">
        {/* Date/Time - Hide on mobile */}
        <div className="hidden xl:flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
          <span>33°C Partly sunny</span>
          <span className="font-medium">11:52 AM</span>
          <span>19-Jun-26</span>
        </div>

        {/* Date/Time - Small screen */}
        <div className="hidden sm:flex xl:hidden items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
          <span>11:52 AM</span>
          <span>19-Jun-26</span>
        </div>

        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 relative">
          <FiBell size={20} className="text-gray-700 dark:text-gray-300" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 px-2 sm:px-3 py-1.5 rounded-lg transition-all duration-200">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold shadow-md text-xs sm:text-sm flex-shrink-0">
            MN
          </div>
          <div className="hidden md:block min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Mudassir Naveed</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
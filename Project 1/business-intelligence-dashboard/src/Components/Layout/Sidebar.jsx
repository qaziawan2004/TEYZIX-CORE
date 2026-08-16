import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  FiHome, 
  FiBarChart2, 
  FiFileText, 
  FiUsers, 
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiTrendingUp,
  FiX
} from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { path: '/', icon: FiHome, label: 'Dashboard' },
    { path: '/analytics', icon: FiBarChart2, label: 'Analytics' },
    { path: '/reports', icon: FiFileText, label: 'Reports' },
    { path: '/customers', icon: FiUsers, label: 'Customers' },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside 
        className={`fixed left-0 top-0 h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 transition-all duration-300 z-50 ${
          isOpen ? 'w-64' : '-translate-x-full lg:translate-x-0 lg:w-20'
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 lg:hidden"
        >
          <FiX size={24} className="text-gray-700 dark:text-gray-300" />
        </button>

        {/* Logo Section - Changed to BI */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
              <FiTrendingUp className="text-white text-xl" />
            </div>
            {isOpen && (
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent whitespace-nowrap">
                BI
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200 hidden lg:block"
          >
            {isOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100%-8rem)]">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700'
                }
                ${!isOpen && 'lg:justify-center'}
              `}
            >
              <item.icon size={22} className="flex-shrink-0" />
              {isOpen && <span className="font-medium whitespace-nowrap">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <div className={`flex items-center ${!isOpen ? 'lg:justify-center' : 'justify-between'}`}>
            {isOpen && <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">Theme</span>}
            <ThemeToggle />
          </div>
          <NavLink
            to="/settings"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 mt-2 rounded-lg transition-all duration-200
              ${isActive 
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700'
              }
              ${!isOpen && 'lg:justify-center'}
            `}
          >
            <FiSettings size={22} className="flex-shrink-0" />
            {isOpen && <span className="font-medium whitespace-nowrap">Settings</span>}
          </NavLink>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
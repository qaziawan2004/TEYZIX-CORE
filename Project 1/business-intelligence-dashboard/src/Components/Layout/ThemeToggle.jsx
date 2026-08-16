import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiMoon, FiSun } from 'react-icons/fi'
import { toggleTheme } from '../../Redux/themeSlice'

const ThemeToggle = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? 
        <FiMoon size={20} className="text-gray-700" /> : 
        <FiSun size={20} className="text-yellow-400" />
      }
    </button>
  )
}

export default ThemeToggle
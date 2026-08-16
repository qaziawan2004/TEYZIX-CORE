import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = ({ isDark, toggleDark }) => {
  return (
    <button
      onClick={toggleDark}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-all hover:scale-110 transform duration-300"
      aria-label="Toggle dark mode"
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
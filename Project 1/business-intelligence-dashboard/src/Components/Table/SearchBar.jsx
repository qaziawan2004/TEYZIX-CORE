import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiSearch } from 'react-icons/fi'
import { setSearch } from '../../Redux/dashboardSlice'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.dashboard)

  return (
    <div className="relative flex-1 sm:flex-none min-w-[120px] sm:min-w-[160px]">
      <input
        type="text"
        placeholder="Search..."
        value={filters.search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="w-full px-3 sm:px-4 py-1.5 sm:py-2 pl-8 sm:pl-10 bg-gray-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 text-xs sm:text-sm"
      />
      <FiSearch className="absolute left-2 sm:left-3 top-2 sm:top-2.5 text-gray-400" size={14} />
    </div>
  )
}

export default SearchBar
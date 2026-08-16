import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatusFilter, setRegionFilter, resetFilters } from '../../Redux/dashboardSlice'
import { FiX } from 'react-icons/fi'

const Filters = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.dashboard)

  const hasActiveFilters = filters.status !== 'all' || filters.region !== 'all'

  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      <select
        value={filters.status}
        onChange={(e) => dispatch(setStatusFilter(e.target.value))}
        className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-all duration-200 text-xs sm:text-sm max-w-[100px] sm:max-w-none"
      >
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="inactive">Inactive</option>
        <option value="suspended">Suspended</option>
      </select>
      
      <select
        value={filters.region}
        onChange={(e) => dispatch(setRegionFilter(e.target.value))}
        className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-all duration-200 text-xs sm:text-sm max-w-[100px] sm:max-w-none"
      >
        <option value="all">All Regions</option>
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="East">East</option>
        <option value="West">West</option>
      </select>

      {hasActiveFilters && (
        <button
          onClick={() => dispatch(resetFilters())}
          className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
        >
          <FiX size={14} className="sm:text-base" />
          <span className="hidden xs:inline">Clear</span>
        </button>
      )}
    </div>
  )
}

export default Filters
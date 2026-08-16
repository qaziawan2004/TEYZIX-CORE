import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { setPage } from '../../Redux/dashboardSlice'

const Pagination = ({ totalItems, itemsPerPage = 10 }) => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.dashboard)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) return null

  return (
    <div className="flex flex-col xs:flex-row items-center justify-between mt-3 sm:mt-4 gap-2 sm:gap-3">
      <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 text-center xs:text-left">
        Showing {((filters.page - 1) * itemsPerPage) + 1} to{' '}
        {Math.min(filters.page * itemsPerPage, totalItems)} of {totalItems} entries
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => dispatch(setPage(filters.page - 1))}
          disabled={filters.page === 1}
          className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <FiChevronLeft size={14} className="sm:text-base" />
        </button>
        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-500 text-white rounded-lg text-xs sm:text-sm font-medium">
          {filters.page}
        </span>
        <button
          onClick={() => dispatch(setPage(filters.page + 1))}
          disabled={filters.page === totalPages}
          className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <FiChevronRight size={14} className="sm:text-base" />
        </button>
      </div>
    </div>
  )
}

export default Pagination
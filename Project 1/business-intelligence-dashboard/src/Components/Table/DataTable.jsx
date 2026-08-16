import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiChevronUp, FiChevronDown, FiDownload } from 'react-icons/fi'
import { setSort } from '../../Redux/dashboardSlice'
import SearchBar from './SearchBar'
import Filters from './Filters'
import Pagination from './Pagination'

const DataTable = ({ data }) => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.dashboard)
  const itemsPerPage = 10

  const filteredData = useMemo(() => {
    if (!data) return []
    
    let result = [...data]
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(item => 
        item.name?.toLowerCase().includes(searchLower) ||
        item.region?.toLowerCase().includes(searchLower)
      )
    }
    
    if (filters.status !== 'all') {
      result = result.filter(item => item.status === filters.status)
    }
    
    if (filters.region !== 'all') {
      result = result.filter(item => item.region === filters.region)
    }
    
    result.sort((a, b) => {
      const aVal = a[filters.sortBy]
      const bVal = b[filters.sortBy]
      if (typeof aVal === 'number') {
        return filters.sortOrder === 'asc' ? aVal - bVal : bVal - aVal
      }
      return filters.sortOrder === 'asc' 
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal))
    })
    
    return result
  }, [data, filters])

  const paginatedData = filteredData.slice(
    (filters.page - 1) * itemsPerPage,
    filters.page * itemsPerPage
  )

  const getStatusColor = (status) => {
    const colors = {
      'active': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      'pending': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      'inactive': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
      'suspended': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
    }
    return colors[status?.toLowerCase()] || colors.inactive
  }

  const handleSort = (sortBy) => {
    const newOrder = filters.sortBy === sortBy && filters.sortOrder === 'asc' ? 'desc' : 'asc'
    dispatch(setSort({ sortBy, sortOrder: newOrder }))
  }

  const columns = [
    { key: 'name', label: 'Customer Name' },
    { key: 'revenue', label: 'Revenue' },
    { key: 'orders', label: 'Orders' },
    { key: 'status', label: 'Status' },
    { key: 'region', label: 'Region' },
  ]

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-3 sm:p-4 md:p-6 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
        <div className="w-full sm:w-auto">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Customer Data</h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{filteredData.length} customers found</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <SearchBar />
          <Filters />
          <button className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200 border border-gray-200 dark:border-slate-700">
            <FiDownload size={14} className="sm:text-base" />
            <span className="hidden xs:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Table - Horizontal scroll on mobile */}
      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <div className="min-w-[600px] sm:min-w-full">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-slate-700">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                    className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors duration-200 whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1">
                      {col.label}
                      {filters.sortBy === col.key && (
                        filters.sortOrder === 'asc' ? 
                          <FiChevronUp size={14} className="sm:text-base" /> : 
                          <FiChevronDown size={14} className="sm:text-base" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="text-center py-6 sm:py-8 text-sm text-gray-500 dark:text-gray-400">
                    No customers found
                  </td>
                </tr>
              ) : (
                paginatedData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all duration-200"
                  >
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate max-w-[80px] sm:max-w-none">
                      {item.name}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                      ${item.revenue?.toLocaleString() || '0'}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {item.orders || 0}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium ${getStatusColor(item.status)} whitespace-nowrap`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {item.region}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination totalItems={filteredData.length} itemsPerPage={itemsPerPage} />
    </div>
  )
}

export default DataTable
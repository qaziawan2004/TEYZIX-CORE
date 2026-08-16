import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { 
  FiFileText, 
  FiDownload, 
  FiCalendar, 
  FiFilter,
  FiPrinter,
  FiBarChart2,
  FiPieChart,
  FiTrendingUp,
  FiUsers,
  FiDollarSign,
  FiShoppingBag
} from 'react-icons/fi'
import { exportToPDF } from '../Utils/exportPDF'
import { exportToCSV } from '../Utils/exportCSV'
import toast from 'react-hot-toast'

const Reports = () => {
  const { data } = useSelector((state) => state.dashboard)
  const [selectedReport, setSelectedReport] = useState('all')
  const [dateRange, setDateRange] = useState('this-month')

  if (!data) return null

  const reportTypes = [
    { id: 'all', label: 'All Reports', icon: FiFileText },
    { id: 'revenue', label: 'Revenue Report', icon: FiDollarSign },
    { id: 'sales', label: 'Sales Report', icon: FiShoppingBag },
    { id: 'customers', label: 'Customer Report', icon: FiUsers },
    { id: 'growth', label: 'Growth Report', icon: FiTrendingUp },
  ]

  const handleExportPDF = () => {
    try {
      exportToPDF(data.customers, 'Reports Export', 'reports-export.pdf')
      toast.success('PDF exported successfully!')
    } catch (error) {
      toast.error('Failed to export PDF')
    }
  }

  const handleExportCSV = () => {
    try {
      exportToCSV(data.customers, 'reports-data.csv')
      toast.success('CSV exported successfully!')
    } catch (error) {
      toast.error('Failed to export CSV')
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Generate and export detailed reports</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleExportPDF}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200"
          >
            <FiFileText size={18} />
            Export PDF
          </button>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-200"
          >
            <FiDownload size={18} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FiFilter className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters:</span>
          </div>
          
          <select
            value={selectedReport}
            onChange={(e) => setSelectedReport(e.target.value)}
            className="px-3 py-2 bg-gray-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white text-sm"
          >
            {reportTypes.map((type) => (
              <option key={type.id} value={type.id}>{type.label}</option>
            ))}
          </select>

          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 bg-gray-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white text-sm"
          >
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="this-quarter">This Quarter</option>
            <option value="this-year">This Year</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 text-sm">
            <FiCalendar size={16} />
            Apply
          </button>
        </div>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Revenue Report</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                ${data.kpi?.revenue?.value?.toLocaleString() || '0'}
              </p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <FiDollarSign className="text-2xl text-blue-500" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-emerald-500">↑ {data.kpi?.revenue?.change || 0}%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">vs last month</span>
          </div>
          <button className="mt-4 w-full py-2 text-sm text-blue-500 hover:text-blue-600 font-medium border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200">
            View Report
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Sales Report</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {data.sales?.length || 0} Months
              </p>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
              <FiBarChart2 className="text-2xl text-emerald-500" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-emerald-500">↑ 8.3%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">vs last year</span>
          </div>
          <button className="mt-4 w-full py-2 text-sm text-emerald-500 hover:text-emerald-600 font-medium border border-emerald-200 dark:border-emerald-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200">
            View Report
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Customer Report</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {data.kpi?.customers?.value?.toLocaleString() || '0'}
              </p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <FiUsers className="text-2xl text-purple-500" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-emerald-500">↑ {data.kpi?.customers?.change || 0}%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">vs last month</span>
          </div>
          <button className="mt-4 w-full py-2 text-sm text-purple-500 hover:text-purple-600 font-medium border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200">
            View Report
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Growth Report</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {data.kpi?.growth?.value || 0}%
              </p>
            </div>
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <FiTrendingUp className="text-2xl text-orange-500" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-emerald-500">↑ {data.kpi?.growth?.change || 0}%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">vs last month</span>
          </div>
          <button className="mt-4 w-full py-2 text-sm text-orange-500 hover:text-orange-600 font-medium border border-orange-200 dark:border-orange-800 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-200">
            View Report
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-all duration-200">
            <FiPrinter className="text-blue-500 text-xl" />
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Print Report</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Print current view</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-all duration-200">
            <FiPieChart className="text-emerald-500 text-xl" />
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Visualize Data</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Create charts</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-all duration-200">
            <FiDownload className="text-purple-500 text-xl" />
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Export All</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Download all data</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-all duration-200">
            <FiBarChart2 className="text-orange-500 text-xl" />
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Analytics</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">View insights</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reports
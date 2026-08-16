import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { 
  FiUsers, 
  FiUserPlus, 
  FiSearch, 
  FiFilter,
  FiMail,
  FiPhone,
  FiMapPin,
  FiMoreVertical,
  FiDownload,
  FiUser
} from 'react-icons/fi'

const Customers = () => {
  const { data } = useSelector((state) => state.dashboard)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')

  if (!data) return null

  const getStatusColor = (status) => {
    const colors = {
      'active': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      'pending': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      'inactive': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
      'suspended': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
    }
    return colors[status?.toLowerCase()] || colors.inactive
  }

  const getStatusBadge = (status) => {
    const badges = {
      'active': 'bg-emerald-500',
      'pending': 'bg-yellow-500',
      'inactive': 'bg-gray-500',
      'suspended': 'bg-rose-500',
    }
    return badges[status?.toLowerCase()] || 'bg-gray-500'
  }

  const filteredCustomers = data.customers?.filter(customer => {
    const matchesSearch = customer.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          customer.region?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || customer.status === selectedStatus
    return matchesSearch && matchesStatus
  }) || []

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Customers</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage and view all customer data
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200">
          <FiUserPlus size={18} />
          Add Customer
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.kpi?.customers?.value?.toLocaleString() || 0}
              </p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full">
              <FiUsers className="text-xl text-blue-500" />
            </div>
          </div>
          <div className="mt-2 text-sm text-emerald-500">↑ {data.kpi?.customers?.change || 0}% growth</div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.customers?.filter(c => c.status === 'active').length || 0}
              </p>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {Math.round((data.customers?.filter(c => c.status === 'active').length / (data.customers?.length || 1)) * 100)}% of total
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pending</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.customers?.filter(c => c.status === 'pending').length || 0}
              </p>
            </div>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-full">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">Awaiting activation</div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Revenue Generated</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                ${data.customers?.reduce((sum, c) => sum + (c.revenue || 0), 0)?.toLocaleString() || '0'}
              </p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-full">
              <FiUser className="text-xl text-purple-500" />
            </div>
          </div>
          <div className="mt-2 text-sm text-emerald-500">↑ 12.5% growth</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative flex-1 w-full">
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search customers by name or region..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 bg-gray-100 dark:bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
            <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-200">
              <FiDownload size={16} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Customer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredCustomers.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <div className="text-6xl mb-4">👤</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">No customers found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredCustomers.map((customer, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md">
                    {customer.name?.split(' ').map(n => n[0]).join('') || 'U'}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{customer.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                        {customer.status}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{customer.region}</span>
                    </div>
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200">
                  <FiMoreVertical className="text-gray-500" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Revenue</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    ${customer.revenue?.toLocaleString() || '0'}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Orders</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {customer.orders || 0}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700 flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200">
                  <FiMail size={14} />
                  Email
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200">
                  <FiPhone size={14} />
                  Call
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200">
                  <FiMapPin size={14} />
                  Location
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Customers
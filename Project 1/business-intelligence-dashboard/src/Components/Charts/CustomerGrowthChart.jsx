import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const CustomerGrowthChart = ({ data }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700">
          <p className="font-medium text-gray-900 dark:text-white text-sm">{label}</p>
          <p className="text-emerald-500 font-bold text-base sm:text-lg">{payload[0].value.toLocaleString()} customers</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-4 sm:p-6 transition-all duration-300">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Customer Growth</h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">New customers acquired monthly</p>
        </div>
      </div>
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data || []}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-slate-700" />
            <XAxis dataKey="month" stroke="#6b7280" className="dark:text-gray-400 text-[10px] sm:text-xs" />
            <YAxis stroke="#6b7280" className="dark:text-gray-400 text-[10px] sm:text-xs" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="customers" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981', r: 3 }} activeDot={{ r: 5 }} name="New Customers" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CustomerGrowthChart
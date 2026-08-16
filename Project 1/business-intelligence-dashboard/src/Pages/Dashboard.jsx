import React from 'react'
import { useSelector } from 'react-redux'
import KPICard from '../Components/Cards/KPICard'
import RevenueChart from '../Components/Charts/RevenueChart'
import SalesChart from '../Components/Charts/SalesChart'
import CustomerGrowthChart from '../Components/Charts/CustomerGrowthChart'
import CategoryChart from '../Components/Charts/CategoryChart'
import DataTable from '../Components/Table/DataTable'
import { exportToPDF } from '../Utils/exportPDF'
import { exportToCSV } from '../Utils/exportCSV'
import { 
  FiDollarSign, 
  FiUsers, 
  FiShoppingBag, 
  FiTrendingUp, 
  FiPercent,
  FiFileText,
  FiFile
} from 'react-icons/fi'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const { data } = useSelector((state) => state.dashboard)

  if (!data) return null

  const kpiConfig = [
    { key: 'revenue', label: 'Total Revenue', icon: FiDollarSign, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', prefix: '$' },
    { key: 'customers', label: 'Total Customers', icon: FiUsers, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { key: 'orders', label: 'Total Orders', icon: FiShoppingBag, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { key: 'growth', label: 'Monthly Growth', icon: FiTrendingUp, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20', suffix: '%' },
    { key: 'conversion', label: 'Conversion Rate', icon: FiPercent, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20', suffix: '%' },
  ]

  const handleExportPDF = () => {
    try {
      exportToPDF(data.customers, 'Dashboard Report', 'dashboard-report.pdf')
      toast.success('PDF exported successfully!')
    } catch (error) {
      toast.error('Failed to export PDF')
    }
  }

  const handleExportCSV = () => {
    try {
      exportToCSV(data.customers, 'customers-data.csv')
      toast.success('CSV exported successfully!')
    } catch (error) {
      toast.error('Failed to export CSV')
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Export Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <button
          onClick={handleExportPDF}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
        >
          <FiFileText size={16} className="sm:text-lg" />
          <span className="hidden xs:inline">Export as PDF</span>
          <span className="inline xs:hidden">PDF</span>
        </button>
        <button
          onClick={handleExportCSV}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
        >
          <FiFile size={16} className="sm:text-lg" />
          <span className="hidden xs:inline">Export as CSV</span>
          <span className="inline xs:hidden">CSV</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {kpiConfig.map((kpi) => {
          const value = data.kpi?.[kpi.key] || {}
          return (
            <KPICard
              key={kpi.key}
              label={kpi.label}
              value={value.value}
              change={value.change}
              icon={kpi.icon}
              color={kpi.color}
              bgColor={kpi.bg}
              prefix={kpi.prefix || ''}
              suffix={kpi.suffix || ''}
            />
          )
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <RevenueChart data={data.revenue} />
        <SalesChart data={data.sales} />
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <CustomerGrowthChart data={data.growth} />
        <CategoryChart data={data.category} />
      </div>

      {/* Data Table */}
      <DataTable data={data.customers} />
    </div>
  )
}

export default Dashboard
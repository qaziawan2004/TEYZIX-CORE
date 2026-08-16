import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './Components/Layout/Layout'
import Dashboard from './Pages/Dashboard'
import Analytics from './Pages/Analytics'
import Reports from './Pages/Reports'
import Customers from './Pages/Customers'
import Settings from './Pages/Settings'
import { fetchDashboardData } from './Redux/dashboardSlice'
import { setTheme } from './Redux/themeSlice'
import Loader from './Components/Common/Loader'
import ErrorState from './Components/Common/ErrorState'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)
  const { loading, error } = useSelector((state) => state.dashboard)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      dispatch(setTheme(savedTheme))
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch(setTheme('dark'))
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchDashboardData())
  }, [dispatch])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <Loader size="lg" text="Loading dashboard..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <ErrorState message={error} onRetry={() => dispatch(fetchDashboardData())} />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: theme === 'dark' ? '#1e293b' : '#ffffff',
            color: theme === 'dark' ? '#f1f5f9' : '#0f172a',
          },
        }}
      />
    </BrowserRouter>
  )
}

export default App
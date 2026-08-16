import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001'

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized access')
    }
    return Promise.reject(error)
  }
)

export const dashboardAPI = {
  getKPI: () => api.get('/kpi'),
  getRevenue: () => api.get('/revenue'),
  getSales: () => api.get('/sales'),
  getGrowth: () => api.get('/growth'),
  getCategory: () => api.get('/category'),
  getCustomers: (params) => api.get('/customers', { params }),
}
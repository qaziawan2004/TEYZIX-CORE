import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:3001'

export const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const [kpiRes, revenueRes, salesRes, growthRes, categoryRes, customersRes] = await Promise.all([
        axios.get(`${API_URL}/kpi`),
        axios.get(`${API_URL}/revenue`),
        axios.get(`${API_URL}/sales`),
        axios.get(`${API_URL}/growth`),
        axios.get(`${API_URL}/category`),
        axios.get(`${API_URL}/customers`),
      ])

      return {
        kpi: kpiRes.data,
        revenue: revenueRes.data,
        sales: salesRes.data,
        growth: growthRes.data,
        category: categoryRes.data,
        customers: customersRes.data,
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch data')
    }
  }
)

const initialState = {
  data: null,
  loading: false,
  error: null,
  filters: {
    search: '',
    status: 'all',
    region: 'all',
    sortBy: 'name',
    sortOrder: 'asc',
    page: 1,
    limit: 10,
  },
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.filters.search = action.payload
      state.filters.page = 1
    },
    setStatusFilter: (state, action) => {
      state.filters.status = action.payload
      state.filters.page = 1
    },
    setRegionFilter: (state, action) => {
      state.filters.region = action.payload
      state.filters.page = 1
    },
    setSort: (state, action) => {
      state.filters.sortBy = action.payload.sortBy
      state.filters.sortOrder = action.payload.sortOrder
    },
    setPage: (state, action) => {
      state.filters.page = action.payload
    },
    resetFilters: (state) => {
      state.filters = initialState.filters
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {
  setSearch,
  setStatusFilter,
  setRegionFilter,
  setSort,
  setPage,
  resetFilters,
} = dashboardSlice.actions

export default dashboardSlice.reducer
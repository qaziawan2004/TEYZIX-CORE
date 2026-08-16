import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './dashboardSlice'
import themeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    theme: themeReducer,
  },
})
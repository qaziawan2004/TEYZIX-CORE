import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const userData = JSON.parse(storedUser)
      setUser(userData)
      setIsAuthenticated(true)
    }
  }, [])

  // Register new user
  const register = (userData) => {
    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify(userData))
    // Save credentials for login
    localStorage.setItem('userCredentials', JSON.stringify({
      email: userData.email,
      password: userData.password
    }))
    setUser(userData)
    setIsAuthenticated(true)
    return true
  }

  // Login user
  const login = (email, password) => {
    const credentials = localStorage.getItem('userCredentials')
    if (credentials) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(credentials)
      if (email === storedEmail && password === storedPassword) {
        const userData = JSON.parse(localStorage.getItem('user'))
        setUser(userData)
        setIsAuthenticated(true)
        return true
      }
    }
    return false
  }

  // Logout user
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    // Don't remove credentials so user can login again
  }

  // Delete account
  const deleteAccount = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('userCredentials')
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      register,
      login,
      logout,
      deleteAccount
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthContext
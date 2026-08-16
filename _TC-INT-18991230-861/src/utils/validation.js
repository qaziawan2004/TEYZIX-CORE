export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePassword = (password) => {
  return password.length >= 8
}

export const validateOnboardingStep1 = (data) => {
  const errors = {}
  if (!data.fullName?.trim()) errors.fullName = 'Full name is required'
  if (!data.email?.trim()) errors.email = 'Email is required'
  else if (!validateEmail(data.email)) errors.email = 'Invalid email address'
  if (!data.company?.trim()) errors.company = 'Company name is required'
  if (!data.role?.trim()) errors.role = 'Role is required'
  return errors
}

export const validateOnboardingStep2 = (data) => {
  const errors = {}
  if (!data.password) errors.password = 'Password is required'
  else if (!validatePassword(data.password)) errors.password = 'Password must be at least 8 characters'
  if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords do not match'
  return errors
}

export const validateOnboardingStep3 = (data) => {
  const errors = {}
  if (!data.industry?.trim()) errors.industry = 'Industry is required'
  if (!data.teamSize) errors.teamSize = 'Please select team size'
  if (!data.goals?.trim()) errors.goals = 'Please describe your goals'
  return errors
}
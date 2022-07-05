import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const isAuthenticated = () => {
  return useAuth0().isAuthenticated
}

export function IfAuthenticated({ children }) {
  return isAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated({ children }) {
  return !isAuthenticated() ? <>{children}</> : null
}
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth.js'

export function PrivateRoute({ children }) {
  const { user } = useAuth()
  if (user === null) return null; 
  if (!user) {
    return <Navigate to='/login' replace />;
  }
  return children;
};
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth.js'

export function PrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to='/login' />;
};
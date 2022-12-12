import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/auth.js'

export function PrivateRoute({ children }) {
  const { user } = useAuth()
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
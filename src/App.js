import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react';
import { AuthProvider } from './contexts/Auth'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

import Header from './components/Header/Header';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Header />
        <AuthProvider>
          <Routes>
            <Route 
              path='/'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
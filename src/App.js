import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

import FrontPage from './components/FrontPage/FrontPage';
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import MainDisplay from './components/MainDisplay/MainDisplay';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <AuthProvider>
          <Sidebar />
          <MainDisplay />
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
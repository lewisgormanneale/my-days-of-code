import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Sidebar from "./components/Sidebar/Sidebar";
import MainDisplay from "./components/MainDisplay/MainDisplay";

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
}

export default App;

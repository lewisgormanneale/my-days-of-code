import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

import FrontPage from "../FrontPage/FrontPage";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";

export default function MainDisplay() {
  return (
    <main className="main-display">
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

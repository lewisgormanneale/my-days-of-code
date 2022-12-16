import React from "react";
import {
  MdOutlineCalendarToday,
  MdOutlineQueryStats,
  MdOutlinePersonSearch,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.js";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  function navigateToMyDays() {
    navigate("/profile");
  }

  function navigateToSettings() {
    navigate("/settings");
  }

  async function handleSignOut() {
    await signOut();
    navigate("/");
  }

  return (
    <nav>
      <div onClick={navigateToMyDays} className="sidebar-header">
        <MdOutlineCalendarToday />
        <h3>My Days</h3>
      </div>
      <div className="sidebar-header">
        <MdOutlineQueryStats />
        <h3>Statistics</h3>
      </div>
      <div className="sidebar-header">
        <MdOutlinePersonSearch />
        <h3>Search Users</h3>
      </div>
      <div onClick={navigateToSettings} className="sidebar-header">
        <MdOutlineSettings />
        <h3>Settings</h3>
      </div>
      <div onClick={handleSignOut} className="sidebar-header">
        <MdOutlineLogout />
        <h3>Log Out</h3>
      </div>
    </nav>
  );
}

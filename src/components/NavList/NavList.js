import React from "react";
import {
  MdOutlineCalendarToday,
  MdOutlineQueryStats,
  MdOutlinePersonSearch,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.js";
import "./NavList.css";

export default function NavList({ matches }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <ul>
        <NavLink to="profile">
          <li className="navbar-list-item">
            <MdOutlineCalendarToday className="navbar-icon" />
            <p className="navbar-text">My Days</p>
          </li>
        </NavLink>
        <NavLink to="statistics">
          <li className="navbar-list-item">
            <MdOutlineQueryStats className="navbar-icon" />
            <p className="navbar-text">Statistics</p>
          </li>
        </NavLink>
        <NavLink to="search">
          <li className="navbar-list-item">
            <MdOutlinePersonSearch className="navbar-icon" />
            <p className="navbar-text">Search Users</p>
          </li>
        </NavLink>
        <NavLink to="settings">
          <li className="navbar-list-item">
            <MdOutlineSettings className="navbar-icon" />
            <p className="navbar-text">Settings</p>
          </li>
        </NavLink>
        <NavLink onClick={handleSignOut} to="/" end>
          <li className="navbar-list-item">
            <MdOutlineLogout className="navbar-icon" />
            <p className="navbar-text">Log Out</p>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

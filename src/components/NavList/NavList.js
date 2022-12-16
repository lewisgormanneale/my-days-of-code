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

export default function NavList() {
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
            <MdOutlineCalendarToday />
            <p>My Days</p>
          </li>
        </NavLink>
        <NavLink to="statistics">
          <li className="navbar-list-item">
            <MdOutlineQueryStats />
            <p>Statistics</p>
          </li>
        </NavLink>
        <NavLink to="search">
          <li className="navbar-list-item">
            <MdOutlinePersonSearch />
            <p>Search Users</p>
          </li>
        </NavLink>
        <NavLink to="settings">
          <li className="navbar-list-item">
            <MdOutlineSettings />
            <p>Settings</p>
          </li>
        </NavLink>
        <NavLink onClick={handleSignOut} to="/" end>
          <li className="navbar-list-item">
            <MdOutlineLogout />
            <p>Log Out</p>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

import React from "react";
import { useAuth } from "../../contexts/AuthContext.js";
import NavList from "../NavList/NavList.js";
import "./Sidebar.css";

function Sidebar() {
  const { user } = useAuth();
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img
          src="images/logo-white-colored-transparent.png"
          alt="logo"
          className="logo"
        ></img>
      </div>
      {user && <NavList />}
    </div>
  );
}

export default Sidebar;

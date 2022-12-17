import React from "react";
import { useAuth } from "../../contexts/AuthContext.js";
import SidebarLogo from "../SidebarLogo/SidebarLogo.js";
import NavList from "../NavList/NavList.js";
import "./Sidebar.css";

function Sidebar() {
  const { user } = useAuth();
  if (user) {
    return (
      <div className="sidebar">
        <SidebarLogo />
        <NavList />
      </div>
    );
  }
}

export default Sidebar;

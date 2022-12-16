import React from "react";
import { useAuth } from "../../contexts/AuthContext.js";
import SidebarLogo from "../SidebarLogo/SidebarLogo.js";
import NavList from "../NavList/NavList.js";
import "./Sidebar.css";

function Sidebar() {
  const { user } = useAuth();
  return (
    <div className="sidebar">
      <SidebarLogo />
      {user && <NavList />}
    </div>
  );
}

export default Sidebar;

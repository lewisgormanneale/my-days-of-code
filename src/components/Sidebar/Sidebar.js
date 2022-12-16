import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext.js";
import SidebarLogo from "../SidebarLogo/SidebarLogo.js";
import NavList from "../NavList/NavList.js";
import "./Sidebar.css";

function Sidebar() {
  const { user } = useAuth();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 800px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 800px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="sidebar">
      <SidebarLogo matches={matches} />
      {user && <NavList matches={matches} />}
    </div>
  );
}

export default Sidebar;

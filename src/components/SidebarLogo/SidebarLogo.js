import React from "react";
import "./SidebarLogo.css";

export default function SidebarLogo() {
  return (
    <picture className="logo-container">
      <source
        media="(min-width:800px)"
        srcset="images/logo-white-colored-transparent.png"
      />
      <img src="images/square-logo.png" alt="logo" className="logo" />
    </picture>
  );
}

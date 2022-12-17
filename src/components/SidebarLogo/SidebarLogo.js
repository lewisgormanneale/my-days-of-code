import React from "react";
import { useNavigate } from "react-router";
import "./SidebarLogo.css";

export default function SidebarLogo() {
  const navigate = useNavigate();

  async function handleClick() {
    navigate("/");
  }

  return (
    <picture onClick={handleClick} className="logo-container">
      <source
        media="(min-width:800px)"
        srcSet="images/logo-white-colored-transparent.png"
      />
      <img src="images/square-logo.png" alt="logo" className="logo" />
    </picture>
  );
}

import React from "react";
import "./UserPanel.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.js";
import LoginWithGitHubButton from "../LoginWithGitHubButton/LoginWithGitHubButton";
import { MdLogout } from "react-icons/md";

function UserPanel() {
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();

  function navigateToSettings() {
    navigate("/settings");
  }

  async function handleSignOut() {
    await signOut();
    navigate("/login");
  }
  if (user) {
    return (
      <div className="user-panel">
        <div className="user-image-and-options">
          <div className="image-container">
            <img
              className="logged-in-user-image"
              src={profile?.avatar_url}
              alt={profile?.username}
            ></img>
          </div>
          <div className="logged-in-user-options">
            <button onClick={navigateToSettings}>Profile Settings</button>
            <button onClick={handleSignOut}>
              <MdLogout />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-panel">
        <LoginWithGitHubButton />
      </div>
    );
  }
}

export default UserPanel;

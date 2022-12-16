import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../supabase";
import "./Settings.css";

export default function Settings() {
  const navigate = useNavigate();
  const { profile, updates, setUpdates } = useAuth();
  const [newCodewarsUsername, setNewCodewarsUsername] = useState(
    profile.codewars_username
  );

  function navigateToMyDays() {
    navigate("/profile");
  }

  async function editCodewarsUsername(e) {
    e.preventDefault();
    let { data, error } = await supabase
      .from("profiles")
      .update({ codewars_username: newCodewarsUsername })
      .eq("id", profile.id);
    if (error) {
      console.log(error);
    }
    setUpdates([...updates, data]);
  }

  return (
    <div className="settings-page">
      <div className="profile">
        <div className="profile-header">
          <h2>Settings</h2>
          <button onClick={navigateToMyDays} className="profile-button">
            Return to My Days
          </button>
        </div>
        <div className="profile-info">
          <img
            className="profile-image"
            src={profile?.avatar_url}
            alt={profile?.username}
          ></img>
          <div>
            <h3>Name: {profile?.full_name}</h3>
            <h3>GitHub Username: {profile?.username}</h3>
            <p>
              <a href={`https://github.com/` + profile?.username}>
                View GitHub Profile
              </a>
            </p>
            <p>
              <a
                href={
                  `https://www.codewars.com/users/` + profile?.codewars_username
                }
              >
                View Codewars Profile
              </a>
            </p>
            <p>View Public My Days Of Code Profile (Coming Soon)</p>
          </div>
        </div>
        <div className="profile-edit-options">
          <div className="profile-header">
            <h2>Edit Account Details</h2>
          </div>
          <p>Change Name:</p>
          <p>Change Profile Image URL:</p>
          <p>Change Codewars Username:</p>
          <input
            name="codewars-username"
            id="codewars-username"
            type="text"
            placeholder={profile.codewars_username}
            required
            onChange={(e) => {
              setNewCodewarsUsername(e.target.value);
            }}
          ></input>
          <button onClick={editCodewarsUsername}>
            Change Codewars Username
          </button>
          <div className="profile-header">
            <h2>Privacy</h2>
          </div>
          <div className="privacy-field">
            <label htmlFor="profile-visibility">
              Let Anyone View My Days Of Code Profile (Coming Soon)
            </label>
            <input
              type="checkbox"
              id="profile-visibility"
              name="profile-visibility"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

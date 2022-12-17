import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../supabase";
import Footer from "../Footer/Footer";
import "./Settings.css";

export default function Settings() {
  const { profile, updates, setUpdates } = useAuth();
  const [newCodewarsUsername, setNewCodewarsUsername] = useState(
    profile.codewars_username
  );

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
      <div className="settings-window">
        <div className="settings-header">
          <h2>Settings</h2>
        </div>
        <h3>Name: {profile?.full_name}</h3>
        <p>Change Name:</p>
        <h3>GitHub Username: {profile?.username}</h3>
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
        <button onClick={editCodewarsUsername}>Change Codewars Username</button>
        <div className="settings-header">
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
      <Footer />
    </div>
  );
}

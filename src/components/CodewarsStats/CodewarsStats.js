import React from "react";
import "./CodewarsStats.css";
import { useAuth } from "../../contexts/AuthContext";
import { useCodewarsData } from "../../hooks/useCodewarsData";

function CodewarsStats() {
  const { profile } = useAuth();
  const [codewarsData] = useCodewarsData();

  if (profile.codewars_username) {
    return (
      <div className="codewars-stats">
        <p className="codewars-stats-text">
          {codewarsData.length} Codewars Challenges Completed
        </p>
        <img
          src={
            "https://www.codewars.com/users/" +
            profile.codewars_username +
            "/badges/micro"
          }
          alt={profile.codewars_username}
        ></img>
      </div>
    );
  }
}

export default CodewarsStats;

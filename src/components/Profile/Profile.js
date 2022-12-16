import React from "react";
import { useAuth } from "../../contexts/AuthContext.js";
import { useCodewarsData } from "../../hooks/useCodewarsData.js";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import Today from "../Today/Today";
import PreviousList from "../PreviousList/PreviousList";
import Footer from "../Footer/Footer.js";
import { useDays } from "../../hooks/useDays.js";

function Profile() {
  const { user, profile, updates, setUpdates } = useAuth();
  const [days] = useDays(user, updates);
  const [codewarsData] = useCodewarsData();
  const navigate = useNavigate();

  if (profile) {
    return (
      <div className="profile">
        <Today
          profile={profile}
          updates={updates}
          setUpdates={setUpdates}
          codewarsData={codewarsData}
        />
        <PreviousList
          user={user}
          days={days}
          updates={updates}
          setUpdates={setUpdates}
          codewarsData={codewarsData}
        />
        <Footer />
      </div>
    );
  } else {
    navigate("/");
  }
}

export default Profile;

import React from "react";
import { useAuth } from "../../contexts/AuthContext.js";
import { useCodewarsData } from "../../hooks/useCodewarsData.js";
import { useNavigate, useParams } from "react-router-dom";
import "./Profile.css";
import Today from "../Today/Today";
import PreviousList from "../PreviousList/PreviousList";
import Footer from "../Footer/Footer.js";
import { useProfileInfo } from "../../hooks/useProfileInfo.js";

function Profile() {
  const navigate = useNavigate();
  // Get username from URL, along with logged in user info
  let { username } = useParams();
  const { user, profile, updates, setUpdates } = useAuth();

  //get whatever info exists for the username in the URL
  const [profileInfo] = useProfileInfo(username, updates);

  //fix codewars
  const [codewarsData] = useCodewarsData();

  if (profile?.username === username) {
    return (
      <div className="profile-page">
        <Today
          profile={profile}
          updates={updates}
          setUpdates={setUpdates}
          codewarsData={codewarsData}
        />
        <PreviousList
          profileInfo={profileInfo}
          updates={updates}
          setUpdates={setUpdates}
          codewarsData={codewarsData}
        />
        {/* <Footer /> */}
      </div>
    );
  } else {
    //do a get request for the days of the username that has been navigated to - if it exists

    if (true) {
      return (
        <div className="profile-page">
          <PreviousList
            username={username}
            updates={updates}
            setUpdates={setUpdates}
            codewarsData={codewarsData}
          />
          <Footer />
        </div>
      );
    } else {
      //if it doesn't exist, navigate user back to homepage
      navigate("/");
    }
  }
}

export default Profile;

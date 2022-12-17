import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext.js";
import Footer from "../Footer/Footer.js";
import LoginWithGitHubButton from "../LoginWithGitHubButton/LoginWithGitHubButton";
import "./FrontPage.css";

export function FrontPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/");
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="front-page">
      <div className="front-page-main">
        <div className="front-page-banner">
          <div className="front-page-welcome">
            <h1>Welcome to</h1>
            <img
              src="images/logo-white-colored-transparent.png"
              alt="logo"
              className="logo"
            />
            <p>
              The <span className="highlight">best way</span> to record your
              coding journey!
            </p>
          </div>
          <div className="front-page-login">
            <LoginWithGitHubButton />
          </div>
        </div>
        <div className="front-page-details">
          <div className="example-screenshot-container">
            <img
              src="images/example-screenshot.png"
              alt="example-screenshot"
              className="example-screenshot"
            ></img>
          </div>
          <div className="front-page-description">
            <p>
              Inspired by the{" "}
              <a href="https://www.100daysofcode.com/">#100DaysOfCode</a>{" "}
              challenge comes My Days Of Code, a website designed to help anyone
              taking on the challenge as they record and share their progress.
            </p>
            <h3>Features Include:</h3>
            <ul>
              <li>
                Share Your Days: Share stylised screenshots of your day to
                multiple other social media sites - no copying and pasting plain
                text if you like to share your progress across Twitter and
                LinkedIn!
              </li>
              <li>
                A Home For Your Progress: Choose to make your profile public,
                and you can share a link to it for others to visit. If you're
                taking on the challenge to demonstrate your progress to
                employers, this lets you easily show your full journey to them
                in one place without distractions.
              </li>
              <li>
                Codewars Integration: Enter your Codewars username to easily see
                how many Codewars Challenges you've completed each day.
              </li>
            </ul>
            <p>
              Sign Up for free with GitHub above, and start your coding journey
              today!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FrontPage;

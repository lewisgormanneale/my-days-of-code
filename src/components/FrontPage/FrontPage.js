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
    <div className="login-screen">
      <div className="login-main">
        <div className="login">
          <h2>Welcome to My Days Of Code! Sign In Below:</h2>
          <LoginWithGitHubButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FrontPage;

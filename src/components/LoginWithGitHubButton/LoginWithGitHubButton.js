import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./LoginWithGitHubButton.css";

export function LoginWithGitHubButton() {
  const { signInWithGitHub, user } = useAuth();
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_SUPABASE_REDIRECT_URL;

  async function handleLogin(e) {
    e.preventDefault();
    const { data, error } = await signInWithGitHub({
      provider: "github",
      options: {
        redirectTo: `${URL}/profile`,
      },
    });
    if (error) {
      console.log(error);
    }
    console.log(data);
    navigate("/profile");
  }

  if (!user) {
    return (
      <button className="github-login-button" onClick={handleLogin}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="GitHub"
          role="img"
          viewBox="0 0 512 512"
        >
          <rect rx="15%" />
          <path d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z" />
        </svg>
        <span>Sign In With GitHub</span>
      </button>
    );
  }
}

export default LoginWithGitHubButton;

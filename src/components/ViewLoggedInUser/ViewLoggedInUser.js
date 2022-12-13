import React from 'react'
import './ViewLoggedInUser.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/auth.js'

function ViewLoggedInUser({ profile }) {
    const navigate = useNavigate()
    const { signOut } = useAuth()

    function navigateToProfile() {
        navigate('/profile')
    }

    async function handleSignOut() {
        await signOut()
        navigate('/login')
    }

  return (
    <div className='logged-in-user'>
        <div className='logged-in-user-name'>
            <p>Logged in as <span className='highlight'>{profile.username}</span></p>
        </div>
        <div className='user-image-and-options'>
            <div className='image-container'>
                <img className='logged-in-user-image' src={profile?.avatar_url} alt={profile?.username}></img>
            </div>
            <div className='logged-in-user-options'>
                <button onClick={navigateToProfile}>View Profile</button>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
        
    </div>
  )
}

export default ViewLoggedInUser;

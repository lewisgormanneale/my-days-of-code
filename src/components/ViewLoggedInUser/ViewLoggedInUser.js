import React from 'react'
import './ViewLoggedInUser.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/Auth.js'

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
        <div className='image-container'>
            <img className='logged-in-user-image' src={profile?.avatar_url} alt={profile?.username}></img>
        </div>
        <div className='logged-in-user-options'>
            <button onClick={navigateToProfile}>View Profile</button>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    </div>
  )
}

export default ViewLoggedInUser;

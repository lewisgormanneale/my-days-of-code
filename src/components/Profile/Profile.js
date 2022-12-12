import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../../contexts/useProfile'
import './Profile.css'

export default function Profile() {
  const navigate = useNavigate()
  const [profile] = useProfile();

  function navigateToDashboard() {
    navigate('/')
  }

  return (
    <div className='profile-screen'>
      <div className='profile'>
        <div className="profile-header">
          <h1>My Days Of Code Profile</h1>
          <button onClick={navigateToDashboard} >Return to Dashboard</button>
        </div>
        <div>
          <div className='image-container'>
              <img className='logged-in-user-image' src={profile?.avatar_url} alt={profile?.username}></img>
          </div>
        </div>
        <div className='profile-options-and-stats'>
          <p>Change Username:</p>
          <p>Change Profile Image:</p>
          <p>Change Codewars Username:</p>
        </div>
      </div>
      
    </div>
  )
}

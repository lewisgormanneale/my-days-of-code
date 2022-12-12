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
          <h2>My Days Of Code Profile</h2>
          <button onClick={navigateToDashboard} >Return to Dashboard</button>
        </div>
        <div className='profile-info'>
            <img className='profile-image' src={profile?.avatar_url} alt={profile?.username}></img>
            <div>
              <h3>Username: {profile?.username}</h3>
              <p>Link to mdoc profile if public (copy)</p>
              <p>Link to github profile</p>
              <p>Link to codewars profile</p>
            </div>
        </div>
        <div className='profile-options-and-stats'>
          <div className="profile-header">
            <h2>Edit Account Details</h2>
          </div>
          <p>Change Username:</p>
          <p>Change Profile Image:</p>
          <p>Change Codewars Username:</p>
          <div>Privacy</div>
          <p>Make My Profile Public:</p>
        </div>
      </div>
      
    </div>
  )
}

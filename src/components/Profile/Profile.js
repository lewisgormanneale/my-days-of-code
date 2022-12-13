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
          <button onClick={navigateToDashboard} className="profile-button" >Return to Dashboard</button>
        </div>
        <div className='profile-info'>
            <img className='profile-image' src={profile?.avatar_url} alt={profile?.username}></img>
            <div>
              <h3>Name: {profile?.full_name}</h3>
              <h3>GitHub Username: {profile?.username}</h3>
              <p><a href={`https://github.com/` + profile?.username}>View GitHub Profile</a></p>
              <p><a href={`https://www.codewars.com/users/` + profile?.codewars_username}>View Codewars Profile</a></p>
              <p>View Public My Days Of Code Profile (Coming Soon)</p>
            </div>
        </div>
        <div className='profile-edit-options'>
          <div className="profile-header">
            <h2>Edit Account Details</h2>
          </div>
          <p>Change Name:</p>
          <p>Change Profile Image URL:</p>
          <p>Change Codewars Username:</p>
          <div className="profile-header">
            <h2>Privacy</h2>
          </div>
          <div className='privacy-field'>
            <label for="profile-visibility">Let Anyone View My Days Of Code Profile (Coming Soon)</label>
            <input type="checkbox" id="profile-visibility" name="profile-visibility" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

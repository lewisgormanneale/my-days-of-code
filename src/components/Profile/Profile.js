import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'

export default function Profile() {
  const navigate = useNavigate()

  function navigateToDashboard() {
    navigate('/')
  }

  return (
    <div className='profile'>
      <button onClick={navigateToDashboard} >Return to Dashboard</button>
    </div>
  )
}

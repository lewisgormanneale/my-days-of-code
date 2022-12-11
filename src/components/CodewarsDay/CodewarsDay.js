import React from 'react'
import './CodewarsDay.css'

export default function CodewarsDay( { codewarsCompleted }) {
  return (
    <div className='codewars-day'>
        <p>{codewarsCompleted}</p>
    </div>
  )
}

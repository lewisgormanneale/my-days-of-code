import React from 'react'
import CodewarsStats from '../CodewarsStats/CodewarsStats'

export default function Statistics() {
  return (
    <div>Statistics
         {/* <div className="streak">
                        <h3>Current Streak:</h3>
                        <h3>Best Streak:</h3>
                        <p>(Missed a day? You can record previous days by changing the date when recording your day of code!)</p>
                </div> */}
                {/* <p>Total Days Recorded: {days.length}</p> */}
            <div className="stats-header">
                <h3>Connected Account Statistics</h3>
            </div>
            <div className="api-stats">
                <CodewarsStats />
            </div>
    </div>
  )
}
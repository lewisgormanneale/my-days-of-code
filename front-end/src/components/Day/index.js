import React from 'react'
import "./index.css"

function Day({ currentDay }) {
  return (
    <div className="day">
        <div className="day-header">
            <p>Day #{currentDay.day}</p>
            <p>{currentDay.date}</p>
        </div>
        <div>
            <p>{currentDay.primary_reflection}</p>
        </div>
    </div>
  )
}

export default Day;

import React from 'react'

function Day({ currentDay }) {
  return (
    <div>
        <div>
            <p>{currentDay.day}</p>
        </div>
        <div>
            <p>{currentDay.primary_reflection}</p>
        </div>
    </div>
  )
}

export default Day;

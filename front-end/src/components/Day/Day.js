import React, { useEffect, useState } from 'react'
import Share from '../Share/Share.js';
import "./Day.css"

function Day({ currentDay, codewarsData }) {
  
  const [dailyCodewars, setDailyCodewars] = useState([])
  const [currentDate, setCurrentDate] = useState(currentDay.date.slice(0, 10))

  useEffect(() => {
    function getDailyCodewars() {
      for (let i = 0; i < codewarsData.length; i++) {
        if (currentDate === codewarsData[i].completedAt.slice(0, 10)) {
          setDailyCodewars([...dailyCodewars, codewarsData[i].date])
        }
      };
    };
    getDailyCodewars();
  }, [currentDate, codewarsData])

  return (
    <div className="day">
        <div className="day-header">
            <p>Day #{currentDay.day}</p>
            <p>{currentDate}</p>
        </div>
        <div>
            <p>{currentDay.primary_reflection}</p>
        </div>
        <div>
          <p>Codewars Challenges completed on this day: {dailyCodewars.length}</p>
        </div>
        <Share />
    </div>
  )
}

export default Day;
import React, { useEffect, useState } from 'react'
import './CodewarsDay.css'

export default function CodewarsDay( { currentDate, codewarsData }) {
  
  const [codewarsCompletedToday, setCodewarsCompletedToday] = useState(0);

  useEffect(() => {
    function getDailyCodewars() {
      setCodewarsCompletedToday(0)
      let count = 0
      for (let i = 0; i < codewarsData?.length; i++) {
        if (currentDate === codewarsData[i]?.completedAt.slice(0, 10)) {
          count++
        }
      };
      setCodewarsCompletedToday(count)
    };
    getDailyCodewars();
  }, [codewarsData, currentDate])

  if (codewarsCompletedToday > 0) {
    return (
      <div className='codewars-day'>
        <div className='codewars-day-icon'>
          <p>{codewarsCompletedToday}</p>
        </div>
        <p>Codewars Challenges Completed Today</p>
      </div>
    )
  }
}

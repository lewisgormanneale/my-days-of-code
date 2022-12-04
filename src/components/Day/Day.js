import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase.js';
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

  async function editDay() {
    console.log('hello')
  }

  async function deleteDay(e) {
    e.preventDefault()
    let { data, error } = await supabase
        .from('days')
        .delete()
        .eq('id', currentDay.id)
  };

  return (
    <div className="day">
        <div className="day-header">
            <p>Day #{currentDay.day}</p>
            <p>{currentDate}</p>
        </div>
        <div className='day-text'>
            <p>{currentDay.post}</p>
        </div>
        <div className='day-options-and-stats'>
          <div className='edit-and-delete-day'>
            <button className="edit-button" onClick={editDay}>Edit Day</button>
            <button className="delete-button" onClick={deleteDay}>Delete Day</button>
          </div>
          <div className='day-stats'>
            <p>{dailyCodewars.length} Codewars Challenges Completed On This Day</p>
          </div>
          <Share />
        </div>
        
    </div>
  )
}

export default Day;
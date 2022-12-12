import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase.js';
import ReactQuill from 'react-quill';
import Share from '../Share/Share.js';
import "./Day.css"
import CodewarsDay from '../CodewarsDay/CodewarsDay.js';

function Day({ currentDay, updates, setUpdates, codewarsData }) {
  const [dailyCodewars, setDailyCodewars] = useState([])
  const [readOnly, setReadOnly] = useState(true)
  const [deleteButtonStatus, setDeleteButtonStatus] = useState("unclicked")
  const [theme, setTheme] = useState("bubble")

  const currentDate = currentDay.date.slice(0, 10)

  useEffect(() => {
    function getDailyCodewars() {
      for (let i = 0; i < codewarsData.length; i++) {
        if (currentDate === codewarsData[i].completedAt.slice(0, 10)) {
          setDailyCodewars([...dailyCodewars, codewarsData[i].date])
        }
      };
    };
    getDailyCodewars();
  }, [codewarsData])

  async function toggleEdit() {
    setReadOnly(!readOnly)
    if (theme === "bubble") {
      setTheme("snow")
    } else {
      setTheme("bubble")
    }
    if (readOnly === false) {
      editDay();
    }
  }

  async function editDay(e) {
    e.preventDefault()
    let { data, error } = await supabase
    //     .from('days')
    //     .update({ name: 'Australia' })
    //     .eq('id', currentDay.id)
    if (error) {
      console.log(error)
    }
    setUpdates([...updates, data])
  }

  async function deleteDay(e) {
    e.preventDefault()
    let { data, error } = await supabase
        .from('days')
        .delete()
        .eq('id', currentDay.id)
    if (error) {
      console.log(error)
    }
    setUpdates([...updates, data])
  };

  return (
    <div className="day">
        <div className="day-header">
            <p>Day #{currentDay.day}</p>
            <p>{currentDate}</p>
        </div>
        <ReactQuill
          value={currentDay.post}
          readOnly={readOnly}
          theme={theme}
        />
        <div className='day-options-and-stats'>
          <div className='edit-and-delete-day'>
            {/* <button className="edit-button" onClick={toggleEdit}>Edit Day</button> */}
            <button className="delete-button" onClick={deleteDay}>Delete Day</button>
          </div>
          <div className='day-stats'>
            <CodewarsDay codewarsCompleted={dailyCodewars.length} />
          </div>
          <Share />
        </div>
        
    </div>
  )
}

export default Day;
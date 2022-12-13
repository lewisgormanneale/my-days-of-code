import React, { useEffect, useState, useRef, useCallback } from 'react';
import { supabase } from '../../supabase.js';
import ReactQuill from 'react-quill';
import { toPng } from 'html-to-image';
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

  const ref = useRef(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `my-day-of-code-${currentDay.day}.png`
        link.href = dataUrl
        console.log(dataUrl)
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return (
    <div className="day" >
        <div ref={ref} className="screenshot-container" >
          <div className="day-header">
              <p>Day #{currentDay.day}</p>
              <img src="images/single-day-logo.png" alt="logo" className="day-logo"></img>
              <p>{currentDate}</p>
          </div>
          <ReactQuill
            value={currentDay.post}
            readOnly={readOnly}
            theme={theme}
          />
          <div className='hashtags-and-stats'>
            <p>#100DaysOfCode</p>
            <div className='day-stats'>
            {dailyCodewars.length > 0 &&
            <div className='codewars-container'>
                <CodewarsDay codewarsCompleted={dailyCodewars.length} />
                <p>Codewars Challenges Completed Today</p>
            </div>
            }
            </div>
            <p>#MyDaysOfCode</p>
          </div>
        </div>
        <div className='day-options'>
          <div className='edit-and-delete-day'>
            <button className="edit-button" onClick={toggleEdit}>Edit Day</button>
            <button className="delete-button" onClick={deleteDay}>Delete Day</button>
          </div>
          <div className='share-day'>
            <button className="share-button" onClick={onButtonClick}>Share</button>
          </div>
        </div>
    </div>
  )
}

export default Day;
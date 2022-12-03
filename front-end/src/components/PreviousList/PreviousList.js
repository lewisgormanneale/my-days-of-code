import React, { useState, useEffect } from "react";
import "./PreviousList.css"
import Day from "../Day/Day.js";

function PreviousList({ user, codewarsData }) {

    const [days, setDays] = useState([]);

    useEffect(() => {
        async function getDays() {
          const response = await fetch(`http://localhost:3001/api/days/`);
          const data = await response.json();
          setDays(data.payload);
        }
        getDays();
      }, [user]);

    return (
        <div className="previous-list">
            <h3>Your Previous Days Of Code</h3>
            {days.map(function (currentDay) {
                return (
                    <Day currentDay={currentDay} codewarsData={codewarsData}/>
                )
            })}
        </div>
    );
}

export default PreviousList;
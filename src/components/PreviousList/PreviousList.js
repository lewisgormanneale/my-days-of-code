import React, { useState, useEffect } from "react";
import "./PreviousList.css"
import Day from "../Day/Day.js";

function PreviousList({ user, days, updates, setUpdates, codewarsData }) {

    return (
        <div className="previous-list">
            <h3>Your Previous Days Of Code</h3>
            {days.map(function (currentDay, index, arr) {
                const prevDay = arr[index - 1];
                const timeDifference = new Date(prevDay?.date).getTime() - new Date(currentDay?.date).getTime()
                const dayDifference = timeDifference / (1000 * 3600 * 24);
                if (dayDifference === 1) {
                    return (
                        <div key={currentDay.id} className="day-container">
                            <div className="chain"></div>
                            <Day currentDay={currentDay} updates={updates} setUpdates={setUpdates} codewarsData={codewarsData}/>
                        </div>
                    )
                }
                const currentDate = new Date(currentDay?.date) 
                const todaysDate = new Date();
                if (currentDate.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0)) {
                   return (
                    <div key={currentDay.id} className="day-container">
                        <Day  currentDay={currentDay} updates={updates} setUpdates={setUpdates} codewarsData={codewarsData}/>
                    </div>
                   ) 
                }
                return (
                    <div key={currentDay.id} className="day-container">
                        <div  className="broken-chain"></div>
                        <Day currentDay={currentDay} updates={updates} setUpdates={setUpdates} codewarsData={codewarsData}/>
                    </div>
                )
            })}
        </div>
    );
}

export default PreviousList;
import React from "react";
import CodewarsStats from "../CodewarsStats/CodewarsStats.js";
import "./Stats.css"

function Stats({user, profile, days, codewarsData, setCodewarsData }) {
    return (
        <div className="stats">
            <div className="stats-header">
                <h3>Statistics</h3>
            </div>
                {/* <div className="streak">
                        <h3>Current Streak:</h3>
                        <h3>Best Streak:</h3>
                        <p>(Missed a day? You can record previous days by changing the date when recording your day of code!)</p>
                </div> */}
                <p>Total Days Recorded: {days.length}</p>
            <div className="stats-header">
                <h3>Connected Account Statistics</h3>
            </div>
            <div className="api-stats">
                <CodewarsStats />
            </div>
            <div className="stats-header">
                <h3>Search Users</h3>
            </div>
            <div className="search-users">
                <p>Coming Soon!</p>
            </div>
        </div>
    );
}

export default Stats;
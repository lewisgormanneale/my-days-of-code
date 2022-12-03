import React from "react";
import "./Today.css"

function Today({ date, user, profile }) {
    return (
        <div className="today">
            <div className="welcome">
                {profile &&
                    <h3>Hello {profile.username}! Today's date is {date}</h3>
                }
            </div>
            <div>
                <h3>Record your day of code below:</h3>
            </div>
            <form>
                <div className="day-info">
                    <input type='dropdown' placeholder="Day #"></input>
                    <input type='dropdown' placeholder="Date"></input>
                </div>
                <textarea></textarea>
                <div className="stats-and-submit">
                    <p>Github Commits:</p>
                    <p>Codewars Challenges:</p>
                    <button className="submit-button">Submit</button>
                </div>
                <div className="streak">
                    <h3>Current Streak:</h3>
                    <p>(Missed a day? You can record previous days by changing the date below!)</p>
                </div>
            </form>
            
        </div>
    );
}

export default Today;
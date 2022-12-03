import React from "react";
import "./Today.css"

function Today({ date, user, profile }) {
    return (
        <div className="today">
            <div className="welcome">
                {profile &&
                    <p>Hello {profile.username}! Today's date is {date}</p>
                }
            </div>
            <p>Record your day of code:</p>
            <form>
                <div className="day-info">
                    <input type='dropdown' placeholder="Day #"></input>
                    <input type='dropdown' placeholder="Date"></input>
                </div>
                <textarea></textarea>
                <div className="stats-and-submit">
                    <p>Github:</p>
                    <p>Codewars:</p>
                    <button className="submit-button">Submit</button>
                </div>
                
            </form>
            
        </div>
    );
}

export default Today;
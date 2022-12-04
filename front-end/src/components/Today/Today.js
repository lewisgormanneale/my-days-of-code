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
            <div className="call-to-action">
                <h3>Record your day of code below:</h3>
            </div>
            <form>
                <div className="day-info">
                    <input type='dropdown' placeholder="Day #"></input>
                    <input type='dropdown' placeholder="Date"></input>
                </div>
                <textarea placeholder="e.g. Today I signed up for My Days Of Code to track my progress!"></textarea>
                <div className="stats-and-submit">
                    <p>Github Commits:</p>
                    <p>Codewars Challenges:</p>
                    <button className="submit-button">Submit</button>
                </div>
            </form>
            
        </div>
    );
}

export default Today;
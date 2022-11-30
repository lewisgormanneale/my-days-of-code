import React from "react";
import "./index.css"

function Today({date, username}) {
    return (
        <div className="today">
            <div className="welcome">
                <p>Hello {username}! The date is {date}</p>
            </div>
            <p>Record your day of code:</p>
            <textarea></textarea>
        </div>
    );
}

export default Today;
import React from "react";
import "./Today.css"

function Today({date, user}) {
    return (
        <div className="today">
            <div className="welcome">
                {user &&
                    <p>Hello! The date is {date}</p>
                }
            </div>
            <p>Record your day of code:</p>
            <textarea></textarea>
        </div>
    );
}

export default Today;
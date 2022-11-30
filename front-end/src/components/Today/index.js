import React from "react";
import "./index.css"

function Today({date, username}) {
    return (
        <div className="today">
            <p>Hello {username}! What Did You Do Today?</p>
            <textarea></textarea>
        </div>
    );
}

export default Today;
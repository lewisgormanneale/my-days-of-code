import React from "react";
import Codewars from "../Codewars";
import "./index.css"

function Today({date, user}) {
    return (
        <div className="today">
            <Codewars date={date} user={user}/>
        </div>
    );
}

export default Today;
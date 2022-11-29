import React from "react";
import Codewars from "../Codewars";
import "./index.css"

function Stats({date, user, codewarsData, setCodewarsData }) {
    return (
        <div className="stats">
            <Codewars date={date} user={user} codewarsData={codewarsData} setCodewarsData={setCodewarsData} />
        </div>
    );
}

export default Stats;
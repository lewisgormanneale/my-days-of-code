import React from "react";
import Codewars from "../Codewars";
import GitHubCommits from "../GitHubCommits";
import "./index.css"

function Stats({date, user, codewarsData, setCodewarsData }) {
    return (
        <div className="stats">
            <Codewars user={user} codewarsData={codewarsData} setCodewarsData={setCodewarsData} />
            <GitHubCommits />
        </div>
    );
}

export default Stats;
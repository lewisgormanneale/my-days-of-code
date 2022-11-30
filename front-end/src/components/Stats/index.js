import React from "react";
import Codewars from "../Codewars";
import GitHubCommits from "../GitHubCommits";
import "./index.css"

function Stats({date, user, codewarsData, setCodewarsData }) {
    return (
        <div className="stats">
            <h3>Statistics</h3>
            <h4>All Time</h4>
            <div className="api-stats">
                <Codewars codewars_username={user.codewars_username} codewarsData={codewarsData} setCodewarsData={setCodewarsData} />
                <GitHubCommits />
            </div>
        </div>
    );
}

export default Stats;
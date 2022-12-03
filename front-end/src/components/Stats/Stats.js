import React from "react";
import Codewars from "../Codewars/Codewars.js";
import GitHubCommits from "../GitHubCommits/GitHubCommits.js";
import "./Stats.css"

function Stats({date, user, profile, codewarsData, setCodewarsData }) {
    return (
        <div className="stats">
            <h3>Statistics</h3>
            <h4>All Time</h4>
            <div className="api-stats">
                <Codewars user={user} profile={profile} codewars_username={profile.codewars_username} codewarsData={codewarsData} setCodewarsData={setCodewarsData} />
                <GitHubCommits />
            </div>
        </div>
    );
}

export default Stats;
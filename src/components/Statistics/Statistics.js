import React from "react";
import CodewarsStats from "../CodewarsStats/CodewarsStats";
import "./Statistics.css";
import Footer from "../Footer/Footer";

export default function Statistics() {
  return (
    <div className="statistics-page">
      <div className="statistics-window">
        <h2>Statistics</h2>
        {/* <div className="streak">
                        <h3>Current Streak:</h3>
                        <h3>Best Streak:</h3>
                        <p>(Missed a day? You can record previous days by changing the date when recording your day of code!)</p>
                </div> */}
        {/* <p>Total Days Recorded: {days.length}</p> */}
        <div className="stats-header">
          <h3>Connected Account Statistics</h3>
        </div>
        <div className="api-stats">
          <CodewarsStats />
        </div>
      </div>
      <Footer />
    </div>
  );
}

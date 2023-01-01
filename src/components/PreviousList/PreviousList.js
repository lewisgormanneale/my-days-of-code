import React from "react";
import "./PreviousList.css";
import Day from "../Day/Day.js";

function PreviousList({ username, days, updates, setUpdates, codewarsData }) {
  return (
    <div className="previous-list">
      <div className="profile-info">
        <p></p>
        <p>@{username}</p>
      </div>
      <h3>Days Of Code</h3>
      {days.map(function (currentDay, index, arr) {
        const prevDay = arr[index - 1];
        const timeDifference =
          new Date(prevDay?.date).getTime() -
          new Date(currentDay?.date).getTime();
        const dayDifference = timeDifference / (1000 * 3600 * 24);
        const currentDate = new Date(currentDay?.date);
        const todaysDate = new Date();
        let chain = <div className="broken-chain"></div>;
        if (dayDifference === 1) {
          chain = <div className="chain"></div>;
        } else if (
          currentDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)
        ) {
          chain = <div />;
        }

        return (
          <div key={currentDay.id} className="day-container">
            {chain}
            <Day
              currentDay={currentDay}
              updates={updates}
              setUpdates={setUpdates}
              codewarsData={codewarsData}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PreviousList;

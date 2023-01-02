import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import InfiniteScroll from "react-infinite-scroll-component";
import "./PreviousList.css";
import Day from "../Day/Day.js";

function PreviousList({ profileInfo, updates, setUpdates, codewarsData }) {
  const [days, setDays] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  async function getDays() {
    const offset = (page - 1) * 10;
    const { data, error } = await supabase
      .from("days")
      .select("id, day, date, post")
      .eq("user_id", profileInfo?.id)
      .order("date", { ascending: false })
      .range(offset, offset + 9);
    if (error) {
      console.log(error);
      return;
    } else {
      if (data.length <= 9) {
        setHasMore(false);
      }
      setDays([...days, ...data]);
      setPage(page + 1);
    }
  }

  useEffect(() => {
    getDays();
  }, [profileInfo]);

  return (
    <div className="previous-list">
      <div className="profile-info"></div>
      <h3>Days Of Code</h3>
      <InfiniteScroll
        dataLength={days.length} //This is important field to render the next data
        next={getDays}
        hasMore={hasMore}
        height={800}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {days.map((day) => (
          <h1 key={day.id}>{day.date}</h1>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default PreviousList;

{
  /* {days.map(function (currentDay, index, arr) {
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
                currentDate.setHours(0, 0, 0, 0) ===
                todaysDate.setHours(0, 0, 0, 0)
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
            })} */
}

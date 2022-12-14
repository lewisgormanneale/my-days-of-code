import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext.js";
import { useCodewarsData } from "../../hooks/useCodewarsData.js";
import { useParams } from "react-router-dom";
import { supabase } from "../../supabase";
import InfiniteScroll from "react-infinite-scroll-component";
import Day from "../Day/Day.js";
import "./Profile.css";
import Today from "../Today/Today";
import createChain from "../../services/createChain.js";
import { useProfileInfo } from "../../hooks/useProfileInfo.js";

function Profile() {
  let { username } = useParams();
  const { profile, updates, setUpdates } = useAuth();
  const [profileInfo] = useProfileInfo(username, updates);
  const [codewarsData] = useCodewarsData(profileInfo);

  const [days, setDays] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  async function getDays() {
    const offset = (page - 1) * 10;
    if (profileInfo.id) {
      const { data, error } = await supabase
        .from("days")
        .select("id, day, date, post")
        .eq("user_id", profileInfo.id)
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
  }

  useEffect(() => {
    getDays();
  }, [profileInfo]);

  async function createDay(postDay, postDate, postText) {
    let { data, error } = await supabase
      .from("days")
      .insert({
        day: postDay,
        date: postDate,
        post: postText,
        user_id: profile.id,
      })
      .select("*"); // New in v2 supabase API, you need to add a select to retrieve the data that has been inserted
    if (error) {
      console.log(error);
    }
    const sortedDays = [...days, data[0]].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setDays(sortedDays);
    setPage(page + 0.1);
  }

  async function deleteDay(currentDay) {
    let { data, error } = await supabase
      .from("days")
      .delete()
      .eq("id", currentDay.id);
    if (error) {
      console.log(error);
    }
    const sortedDays = days.filter((day) => day.id !== currentDay.id);
    setDays(sortedDays);
  }

  return (
    <div className="profile-page">
      <InfiniteScroll
        dataLength={days.length}
        next={getDays}
        hasMore={hasMore}
        height={1000}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center", paddingBottom: "15px" }}>
            <b>End Of Posts</b>
          </p>
        }
      >
        {profile?.username === username ? (
          <Today
            profile={profile}
            updates={updates}
            setUpdates={setUpdates}
            codewarsData={codewarsData}
            createDay={createDay}
          />
        ) : null}
        {days.map(function (currentDay, index, arr) {
          let chain = createChain(currentDay, index, arr);
          return (
            <div key={currentDay.id} className="day-container">
              {chain}
              <Day
                currentDay={currentDay}
                updates={updates}
                setUpdates={setUpdates}
                codewarsData={codewarsData}
                deleteDay={deleteDay}
              />
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default Profile;

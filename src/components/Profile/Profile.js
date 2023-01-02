import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext.js";
import { useCodewarsData } from "../../hooks/useCodewarsData.js";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabase";
import InfiniteScroll from "react-infinite-scroll-component";
import Day from "../Day/Day.js";
import "./Profile.css";
import Today from "../Today/Today";
import Footer from "../Footer/Footer.js";
import { useProfileInfo } from "../../hooks/useProfileInfo.js";

function Profile() {
  const navigate = useNavigate();
  // Get username from URL, along with logged in user info
  let { username } = useParams();
  const { user, profile, updates, setUpdates } = useAuth();

  //get whatever info exists for the username in the URL
  const [profileInfo] = useProfileInfo(username, updates);

  //fix codewars
  const [codewarsData] = useCodewarsData();

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
    <div className="profile-page">
      <InfiniteScroll
        dataLength={days.length} //This is important field to render the next data
        next={getDays}
        hasMore={hasMore}
        height={1000}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {profile?.username === username ? (
          <Today
            profile={profile}
            updates={updates}
            setUpdates={setUpdates}
            codewarsData={codewarsData}
          />
        ) : null}
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
      </InfiniteScroll>
    </div>
  );
}

export default Profile;
//   if (profile?.username === username) {
//     return (
//       <div className="profile-page">
//         <Today
//           profile={profile}
//           updates={updates}
//           setUpdates={setUpdates}
//           codewarsData={codewarsData}
//         />
//         <PreviousList
//           profileInfo={profileInfo}
//           updates={updates}
//           setUpdates={setUpdates}
//           codewarsData={codewarsData}
//         />
//         {/* <Footer /> */}
//       </div>
//     );
//   } else {
//     //do a get request for the days of the username that has been navigated to - if it exists

//     if (true) {
//       return (
//         <div className="profile-page">
//           <PreviousList
//             username={username}
//             updates={updates}
//             setUpdates={setUpdates}
//             codewarsData={codewarsData}
//           />
//           <Footer />
//         </div>
//       );
//     } else {
//       //if it doesn't exist, navigate user back to homepage
//       navigate("/");
//     }
//   }
// }

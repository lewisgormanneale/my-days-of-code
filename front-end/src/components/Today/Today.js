import React, {useEffect, useState} from "react";
import { supabase } from "../../supabase";
import "./Today.css"

function Today({ user, profile }) {
    const todaysDate = new Date().toISOString().substr(0, 10);
    const [postDay, setPostDay] = useState("");
    const [postDate, setPostDate] = useState(todaysDate);
    const [postText, setPostText] = useState("");

    async function createDay() {
        let { data, error } = await supabase
            .from('days')
            .insert({ day: {postDay}, date: {postDate}, post:{postText} })
        setPostDay("");
        setPostDate("");
        setPostText("");
    };

    return (
        <div className="today">
            <div className="welcome">
                {profile &&
                    <h3>Hello {profile.username}! Today's date is {todaysDate}</h3>
                }
            </div>
            <div className="call-to-action">
                <h3>Record your day of code below:</h3>
            </div>
            <form>
                <div className="day-info">
                    <input
                        className='post-day'
                        type='number' 
                        min='1' 
                        max='1000'
                        value={postDay}
                        onChange={(e) => {
                            setPostDay(e.target.value);
                            console.log(postDay)
                        }}
                        ></input>
                    <input 
                        className="post-date"
                        type='date'
                        min="2022-01-01"
                        value={postDate}
                        onChange={(e) => {
                            setPostDate(e.target.value);
                        }}
                    ></input>
                </div>
                <textarea placeholder="e.g. Today I signed up for My Days Of Code to track my progress!"></textarea>
                <div className="stats-and-submit">
                    <p>Github Commits:</p>
                    <p>Codewars Challenges:</p>
                    <button className="submit-button">Submit</button>
                </div>
            </form>
            
        </div>
    );
}

export default Today;
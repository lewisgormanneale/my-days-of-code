import React, { useState } from "react";
import { supabase } from "../../supabase";
import "./Today.css"

function Today({ user, profile }) {
    const todaysDate = new Date().toISOString().substr(0, 10);
    const [postDay, setPostDay] = useState(1);
    const [postDate, setPostDate] = useState(todaysDate);
    const [postText, setPostText] = useState("");

    async function createDay(e) {
        e.preventDefault()
        let { data, error } = await supabase
            .from('days')
            .insert({ day: postDay, date: postDate, post: postText, user_id: profile.id })
        setPostDay("");
        setPostDate("");
        setPostText("");
    };

    return (
        <div className="today">
            <div className="welcome">
                {profile &&
                    <div className="welcome-text">
                        <h3>Hello {profile.username}! Today's date is {todaysDate}.</h3>
                        <h3>Record Your Day Of Code Below...</h3>
                    </div>
                }
            </div>
            <form>
                <div className="day-info">
                    <div className="post-day-container">
                        <label htmlFor="post-day">Day:</label>
                        <input
                            name="post-day"
                            id="post-day"
                            className='post-day'
                            type='number' 
                            min='1' 
                            max='1000'
                            value={postDay}
                            onChange={(e) => {
                                setPostDay(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="post-date-container">
                        <label htmlFor='post-date'>Date:</label>
                        <input
                            name="post-date"
                            id="post-date"
                            className="post-date"
                            type='date'
                            min="2022-01-01"
                            value={postDate}
                            onChange={(e) => {
                                setPostDate(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <textarea 
                    placeholder="e.g. Today I signed up for My Days Of Code to track my progress!"
                    value={postText}
                    onChange={(e) => {
                        setPostText(e.target.value);
                    }}
                ></textarea>
                <div className="stats-and-submit">
                    <p>Github Commits:</p>
                    <p>Codewars Challenges:</p>
                    <button className="submit-button" onClick={createDay}>Submit</button>
                </div>
            </form>
            
        </div>
    );
}

export default Today;
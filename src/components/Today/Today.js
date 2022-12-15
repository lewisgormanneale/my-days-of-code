import React, { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import { supabase } from "../../supabase";
import { useAuth } from "../../contexts/AuthContext";
import "./Today.css"
import 'react-quill/dist/quill.snow.css';
import CodewarsDay from "../CodewarsDay/CodewarsDay";

function Today({ codewarsData }) {
    const { profile, updates, setUpdates } = useAuth()
    const todaysDate = new Date().toISOString().substr(0, 10);
    const [postDay, setPostDay] = useState(1);
    const [postDate, setPostDate] = useState(todaysDate);
    const [postText, setPostText] = useState("");

    async function createDay(e) {
        e.preventDefault()
        let { data, error } = await supabase
            .from('days')
            .insert({ day: postDay, date: postDate, post: postText, user_id: profile.id })
        if (error) {
            console.log(error)
        }
        setUpdates([...updates, data])
        setPostDay(1);
        setPostDate(todaysDate);
        setPostText("");
    };

    return (
        <div className="today-container">
            <div className="today">
            <div className="welcome">
                {profile &&
                    <div className="welcome-text">
                        <h3>Hello <span className="highlight">{profile.full_name}</span>! Today's date is <span className="highlight">{todaysDate}</span>.</h3>
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
                            required
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
                            required
                            min="2022-01-01"
                            value={postDate}
                            onChange={(e) => {
                                setPostDate(e.target.value);
                            }}
                        ></input>
                    </div>
                </div>
                <ReactQuill theme="snow" value={postText} onChange={setPostText} required />
                <div className="stats-and-submit">
                    <div className="today-codewars">
                        <CodewarsDay currentDate={todaysDate} codewarsData={codewarsData} />
                    </div>
                    <button className="submit-button" onClick={createDay}>Submit</button>
                </div>
            </form>
            </div>
        </div>
        
    );
}

export default Today;
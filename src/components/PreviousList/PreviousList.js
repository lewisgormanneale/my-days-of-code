import React, { useState, useEffect } from "react";
import "./PreviousList.css"
import Day from "../Day/Day.js";
import { supabase } from "../../supabase";

function PreviousList({ user, codewarsData }) {
    const [days, setDays] = useState([]);

    useEffect(() => {
    async function getDays() {
        const { data, error } = await supabase
            .from('days')
            .select('id, day, date, post')
            .order('date', { ascending: false })
        if (error) {
            console.log(error)
        } else {
            setDays(data);
        };
    }
    getDays();
    }, [user]);

    return (
        <div className="previous-list">
            <h3>Your Previous Days Of Code</h3>
            {days.map(function (currentDay) {
                return (
                    <Day key={currentDay.id} currentDay={currentDay} codewarsData={codewarsData}/>
                )
            })}
        </div>
    );
}

export default PreviousList;
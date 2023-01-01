import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export const useDays = (userId, updates) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    async function getDays() {
      const { data, error } = await supabase
        .from("days")
        .select("id, day, date, post")
        .eq("user_id", userId)
        .order("date", { ascending: false });
      if (error) {
        console.log(error);
      } else {
        setDays(data);
      }
    }
    getDays();
  }, [userId, updates]);

  return [days, setDays];
};

import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export const useDays = (user, updates) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    async function getDays() {
      const { data, error } = await supabase
        .from("days")
        .select("id, day, date, post")
        .order("date", { ascending: false });
      if (error) {
        console.log(error);
      } else {
        setDays(data);
      }
    }
    getDays();
  }, [user, updates]);

  return [days, setDays];
};

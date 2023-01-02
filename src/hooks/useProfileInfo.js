import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export const useProfileInfo = (username, updates) => {
  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    async function getProfileInfo() {
      const { data, error } = await supabase
        .from("profiles")
        .select(
          "id, full_name, username, private, codewars_username, avatar_url"
        )
        .eq("username", username);
      if (error) {
        console.log(error);
      } else {
        setProfileInfo(data[0]);
      }
    }
    getProfileInfo();
  }, [username, updates]);

  return [profileInfo, setProfileInfo];
};

import { useState, useEffect } from "react"
import { useAuth } from "./auth.js";
import { supabase } from "../supabase.js";

export const useProfile = () => {
    const { user } = useAuth()
    const [profile, setProfile] = useState({});

    useEffect(() => {
        async function getProfile() {
            if (user) {
            const { data, error } = await supabase
                .from('profiles')
                .select('id, full_name, username, codewars_username, avatar_url')
            if (error) {
                console.log(error)
            } else {
                setProfile(data[0]);
            };
            };
        };
        getProfile();
    }, [user])

  return [profile, setProfile];
};
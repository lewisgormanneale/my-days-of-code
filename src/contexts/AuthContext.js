import React, { useContext, useState, useEffect, createContext } from "react";
import { supabase } from "../supabase";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useLocalStorage("user", null);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    async function getProfile() {
      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("id, full_name, username, codewars_username, avatar_url");
        if (error) {
          console.log(error);
        } else {
          setProfile(data[0]);
        }
      }
    }
    getProfile();
  }, [user]);

  const value = {
    signUp: async (data) => await supabase.auth.signUp(data),
    signInWithGitHub: async (data) => await supabase.auth.signInWithOAuth(data),
    signOut: async () => await supabase.auth.signOut(),
    session,
    user,
    profile,
    updates,
    setUpdates,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

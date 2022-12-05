import React, { useContext, useState, useEffect, createContext } from 'react'
import { supabase } from '../supabase'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getSession() {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
              console.log(error)
            }
            const session = data.session;
            setUser(session?.user ?? null)
            setLoading(false)
        };
        getSession();

        const { data: listener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
              console.log(`Supabase auth event: ${event}`);
              setUser(session?.user ?? null)
              setLoading(false)
            }
        );

        return () => {
          listener?.subscription.unsubscribe();
        };
      }, [])
    
    const value = {
        signUp: async (data) => await supabase.auth.signUp(data),
        signInWithGitHub: async (data) => await supabase.auth.signInWithOAuth(data),
        signOut: async () => await supabase.auth.signOut(),
        user
    };
  
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    )
};
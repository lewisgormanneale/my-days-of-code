import React, { useEffect } from "react";
import { supabase } from '../../supabase.js'
import "./Login.css"

function Login({ user, setUser }) {

  useEffect(() => {
    async function checkUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      console.log(user.id)
    }
    checkUser();
    window.addEventListener('hashchange', function() {
      checkUser();
    })
  }, [setUser])

  async function signInWithGitHub() {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    });
  }

  async function signOut() {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (user) {
    return (
      <button onClick={signOut}>Sign Out</button>
    )
  }
  return (
    <button onClick={signInWithGitHub}>Sign In With GitHub</button>
  )
    
};

export default Login;
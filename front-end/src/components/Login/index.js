import React from "react";
import { useEffect } from "react";
import "./index.css"

function Login({ user, setUser }) {

    useEffect(() => {
        async function getUser() {
          const response = await fetch(`http://localhost:3001/api/users/1`);
          const data = await response.json();
          setUser(data.payload);
        }
        getUser();
      }, [setUser]);

    return (
        <button>Login</button>
    );
}

export default Login;
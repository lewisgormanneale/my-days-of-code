import React from "react";
import "./Header.css"
// import { useNavigate } from "react-router-dom";
// import { useAuth } from '../../contexts/Auth.js'

function Header() {
    // const navigate = useNavigate()
    // const { user, signOut } = useAuth()

    // async function handleSignOut() {
    //     await signOut()
    //     navigate('/login')
    // }

    return (
        <header className="header">
            <h1>My Days Of Code</h1>
            {/* <div>
                <p>Logged in as {user.id}</p>
                <button onClick={handleSignOut}>Sign out</button>
            </div> */}
            
        </header>
    );
}

export default Header;
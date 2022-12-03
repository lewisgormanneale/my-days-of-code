import React from "react";
import Login from "../Login/Login.js";
import "./Header.css"

function Header({ user, setUser }) {
    return (
        <header className="header">
            <p>(icon)</p>
            <h1>My Days Of Code</h1>
            <div>
                <Login user={user} setUser={setUser} />
            </div>
        </header>
    );
}

export default Header;
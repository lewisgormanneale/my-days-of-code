import React from "react";
import Login from "../Login";
import Register from "../Register";
import "./index.css"

function Header({ user, setUser }) {
    return (
        <header className="header">
            <p>(icon)</p>
            <h1>My Days Of Code</h1>
            <div>
                <Login user={user} setUser={setUser} />
                <Register user={user} setUser={setUser} />
            </div>
        </header>
    );
}

export default Header;
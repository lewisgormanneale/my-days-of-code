import React from "react";
import { useAuth } from '../../contexts/AuthContext.js'
import Navbar from "../Navbar/Navbar.js";
import "./Sidebar.css"

function Sidebar() {
    const { user, profile } = useAuth()
    return (
        <div className="sidebar">
            <div className="logo-and-profile-picture">
                <img src="images/logo-white-colored-transparent.png" alt="logo" className="logo"></img>
                <div className='image-container'>
                    <img className='logged-in-user-image' src={profile?.avatar_url} alt={profile?.username}></img>
                </div>
            </div>
            {user &&
                <Navbar />
            }
        </div>
    );
}

export default Sidebar;
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import "./Header.css";

function Header() {

    //Set up dark mode toggle here
    if (MdOutlineDarkMode) {

    }

    return (
        <header className="header">
            <GiHamburgerMenu />
            <img src="images/logo-white-colored-transparent.png" alt="logo" className="logo"></img>
            <MdOutlineWbSunny />
        </header>
    );
}

export default Header;
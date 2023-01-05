import React from "react";
import "./navbar.module.css";

function Navbar({isLoggedIn, changePageHandler}) {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

/*    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });*/

    return (
        <>
        <nav>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="nav-links">
                <li>
                    {isLoggedIn ? "Logout": "Login"}
                </li>
            </ul>
            <ul>
                <li>
                    <a onClick={() => changePageHandler("about-us")} href="#">About Us</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a onClick={() => changePageHandler("rechtliches")} href="#">Rechtliches</a>
                </li>
            </ul>
        </nav> 
        </>
    )
}

export default Navbar;
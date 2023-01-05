import React from "react";

function Navbar({isLoggedIn, changePageHandler}) {



    return (
        <>
        <nav>
            <ul>
                <li>
                    {isLoggedIn ? "Logout": "Login"}
                </li>
            </ul>
            <ul>
                <li onClick={() => changePageHandler("about-us")}>
                    About Us
                </li>
            </ul>
            <ul>
                <li onClick={() => changePageHandler("rechtliches")}>
                    Rechtliches
                </li>
            </ul>
        </nav> 
        </>
    )
}

export default Navbar;
import React, { useRef } from "react";
import "./navbar.module.css";

{
  /* logout prop definieren */
}

function Navbar({ isLoggedIn, changePageHandler, logoutHandler }) {
  const hamburger = useRef(null);
  const navLinks = useRef(null);

  function btnLogout() {
    logoutHandler();
  }
  //    const hamburger = document.querySelector('.hamburger');
  //    const navLinks = document.querySelector('.nav-links');

  /*    hamburger.onClick(() => {
        navLinks.classList.toggle('open');
    });*/

  return (
    <>
      <nav>
        <div className="hamburger" ref={hamburger}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-links" ref={navLinks}>
          <li>
            {/* logout bei onClick aktivieren  */}
            {isLoggedIn ? (
              <a href="#" onClick={btnLogout}>
                Logout
              </a>
            ) : (
              <a href="#">{isLoggedIn ? "Logout" : "Login"}</a>
            )}
          </li>
        </ul>
        <ul>
          <li>
            <a onClick={() => changePageHandler("about-us")} href="about-us.html">
              About Us
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              onClick={() => changePageHandler("rechtliches")}
              href="Rechtliches"
            >
              Rechtliches
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

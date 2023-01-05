import React from "react";
import styles from "./navbar.module.css";

function Navbar({ isLoggedIn, changePageHandler, logoutHandler }) {

  function btnLogout() {
    logoutHandler();
  }

  return (
    <nav className={styles['top-nav']}>
      <input type="checkbox" id={styles['menu-toggle']}/>
      <label className={styles['menu-button-container']} htmlFor={styles['menu-toggle']}>
        <div className={styles['menu-button']}></div>
      </label>
      <ul className={styles.menu}>
        <li>
          {isLoggedIn ? (
            <a href="#" onClick={btnLogout}>Logout</a>
          ) : (
            <a href="#">{isLoggedIn ? "Logout" : "Login"}</a>
          )}
        </li>
        <li>
          <a onClick={() => changePageHandler("about-us")} href="#">
            About Us
          </a>
        </li>
        <li>
          <a
            onClick={() => changePageHandler("rechtliches")}
            href="#"
          >
            Rechtliches
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

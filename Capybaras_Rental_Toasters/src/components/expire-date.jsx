import React, { useRef, useState } from "react";
import {
  deserialize,
  serialize,
  users as example_users,
} from "../utils/local-storage";

function ExpireDate({ isLoggedIn }) {
  if (isLoggedIn) {
    const userID = ("; " + document.cookie)
      .split(`; userID=`)
      .pop()
      .split(";")[0];
    let users = [];
    users = deserialize();
    const [showPopup, setShowPopup] = useState(false);

    // ---------------------------------
    console.log(users);
    // ---------------------------------

    let totaltoastcount = 0,
      totalvisitcount = 0;
    users.map((user) => {
      totaltoastcount = totaltoastcount + parseFloat(user.toast_count);
      totalvisitcount = totalvisitcount + parseFloat(user.visit_count);
    });
    for (let user in users) {
    }
    for (let user of users) {
      if (userID == user.id) {
        console.log(user.expire_date);
        if (isLoggedIn) {
          return (
            <>
                <section id="userinfo">
                <h3 id="sectionheader">Benutzerinformationen</h3>
                <p className="sectionText">{"👤 - " + user.username}</p>
                <p className="sectionText">{"📅 - " + user.expire_date}</p>
                <p className="sectionText">{"👁‍🗨 - " + user.visit_count}</p>
                <p className="sectionText">{"👀 - " + totalvisitcount}</p>

                <button id="button" onClick={() => setShowPopup(true)}>Abo erneuern</button> 
                </section>
                {showPopup && (
                <div>
                <div className="overlay" onClick={() => setShowPopup(false)} />
                <div className="popup">
                    <h1 className="popup-header">Das ist das Popup</h1>
                    <div className="popup-body">
                    Hier ist der Inhalt des Popups.
                    </div>
                    <div className="popup-footer">
                    <button className="popup-button" onClick={() => setShowPopup(false)}>
                        Schließen
                    </button>
                    </div>
                </div>
                </div>
            )}
            </>
          );
        }
      }
    }
  }
}

export default ExpireDate;

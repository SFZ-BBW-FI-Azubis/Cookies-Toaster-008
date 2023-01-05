import { useState } from "react";
import {
  deserialize,
  serialize,
  users as example_users,
} from "../utils/local-storage";

const userProvider = () => { // Arrow Function
  const [isLoggedIn, setIsLoggedIn] = useState(false); // use state liefert liste zurück weil eckige klammern = array (liste)
  const users = []; // wir können const benutzen weil inhalt in klammern verändert wird, geht auch bei geschweiften klammern
  addDummyUsers();

  function addDummyUsers() {
    example_users.map((user) => { // map geht jedes item einmal durch
      addUser(user);
    });
  }

  // add user
  function addUser(newUser) {
    // check if user exists
    for (let user of users) {
      if (user.id === newUser.id) {
        return "User Exists!";
      }
    }

    users.push(newUser);
    serialize(users);
  }

  // @todo - delete user?
  // @todo - update user
  // @todo - get user
  // @todo - get users

  function getUsers() {
    users = deserialize();
  }

  // @todo - subscribe
  // @todo - visit count
  // @todo - toast count

  // user Login
  function loginUser(username, password) {
    for (let user of users) {
      if (user.username === username) {
        if (user.password === password) {
          setIsLoggedIn(true);
          return "Login successful!";
        }
        return "Wrong password!";
      }
    }
    return "Wrong username!";
  }

  // @todo - user Logout
  function logoutUser() {
    setIsLoggedIn(false);
  }

  return { addUser, getUsers, isLoggedIn, loginUser, logoutUser };
};

export default userProvider;

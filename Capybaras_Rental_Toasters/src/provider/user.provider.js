import { useState } from "react";
import { toast } from "react-toastify"
import {
  deserialize,
  serialize,
  users as example_users,
} from "../utils/local-storage";

const userProvider = () => { // Arrow Function
  const [isLoggedIn, setIsLoggedIn] = useState(false); // use state liefert liste zurück weil eckige klammern = array (liste)
  let users = []; 
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
          toast.success('Eingeloggt als ' + user.username, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            document.cookie = "userID=" + user.id
          return "Login successful!";
        }
        toast.error('Falsches Passwort für Benutzer ' + user.username, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        return "Wrong password!";
      }
    }
    toast.error('Diesen Benutzer gibt es nicht', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    return "Wrong username!";
  }

  // @todo - user Logout
  function logoutUser() {
    document.cookie = `userID=''; max-age=0`;
    setIsLoggedIn(false);
  }

  return { addUser, getUsers, isLoggedIn, loginUser, logoutUser };
};

export default userProvider;

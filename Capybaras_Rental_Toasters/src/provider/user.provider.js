import { useState } from 'react';
import { deserialize, serialize, users as example_users} from "../utils/local-storage";

const userProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const users = []
    addDummyUsers();

    function addDummyUsers() {
        example_users.map(user => { addUser(user) });
    }

    // @todo - add user
    function addUser(newUser) {

        // @todo - check if user exists
        for (let user in users) {
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
        users = deserialize()
    }

    // @todo - subscribe
    // @todo - visit count
    // @todo - toast count

    // user Login
    function loginUser(username, password){
        for (let user in users) {
            if(user.username === username) {
                if (user.password === password) {
                    setIsLoggedIn(true);
                }
            }
        }
    }

    // @todo - user Logout
    function logoutUser() {
        setIsLoggedIn(false);
    }

    return { addUser, getUsers, isLoggedIn, loginUser, logoutUser };
}

export default userProvider;
import { deserialize, serialize, users as example_users} from "../utils/local-storage";

const userProvider = () => {
    const users = example_users;

    // @todo - add user
    function addUser(user) {
        users.push(user);
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
}

export default userProvider;
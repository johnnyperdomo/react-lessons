import { useEffect, useState } from "react";

import "./App.css";

function App() {
    const [users, setUsers] = useState([]);

    //call api
    //then render
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((apiUsers) => {
                console.log(apiUsers);

                setUsers(apiUsers);
            });
    }, []);

    return (
        <>
            <h1>User List</h1>

            <ul>
                {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <li>{user.name}</li>
                        </div>
                    );
                })}
            </ul>
        </>
    );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { FunctionComponent } from "./FunctionComponent";

function App() {
    const [users, setUsers] = useState([]);

    //called on mount; fetch api
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                setUsers(data);
            });
    }, []);

    return (
        <>
            <FunctionComponent favoriteNumber={3} />

            <h1>Users</h1>
            {JSON.stringify(users)}
        </>
    );
}

export default App;

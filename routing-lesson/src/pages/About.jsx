import { useLoaderData } from "react-router-dom";

export function About() {
    const users = useLoaderData();
    console.log(users[0]);
    return (
        <>
            <h1>About</h1>
            johnny loves jamon and iris
            <ol>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ol>
        </>
    );
}

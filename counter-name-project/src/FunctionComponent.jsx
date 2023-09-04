/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export function FunctionComponent({ favoriteNumber }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [items, setItems] = useState([
        { id: crypto.randomUUID(), name: "item 1" },
        { id: crypto.randomUUID(), name: "Item 2" },
    ]);

    function incrementAge() {
        setAge((currentAge) => {
            return currentAge + 1;
        });
    }

    function decrementAge() {
        setAge((currentAge) => {
            return currentAge - 1;
        });
    }

    //useeffects are like side effects that subscribe to certain variables when they change

    useEffect(() => {
        // console.log("only the name was changed");
        document.title = name;

        //you can also use a cleanup function within the useEffect; return(), like for unmounting event listeners when it finishes mounting

        setTimeout(() => {
            console.log(`my name is ${name}`);
        }, 1000);
    }, [name]);

    useEffect(() => {
        console.log("only the age was changed: ", age);
    }, [age]);

    useEffect(() => {
        console.log("this runs only when the use effect is mounted");

        //only called when component unmounts, since it's a 1 call function
        return () => {
            console.log("bye");
        };
    }, []);

    console.log("render");

    return (
        <>
            <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            <button onClick={decrementAge}>-</button>
            {age}
            <button onClick={incrementAge}>+</button>
            <br />

            <p>
                My name is {name} and I am {age} years old
            </p>

            {favoriteNumber != null && `my fave number is ${favoriteNumber}`}

            <pre>
                {items.map((item) => (
                    <div key={item.id}>
                        {item.name} {item.id}
                    </div>
                ))}
            </pre>
        </>
    );
}

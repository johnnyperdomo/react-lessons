import { useState } from "react";
import "./App.css";

function slowGetter() {
    console.log("state setter");
    return "Kyle";
}

function App() {
    //dynamic changing data

    //this gets called multiple times when state changes
    // const [name, setName] = useState(slowGetter());

    //if you run a function inside of use state, it only gets run once, when it's state changes. so it doesn't get called multiple times
    const [name, setName] = useState(slowGetter);
    const [age, setAge] = useState(27);
    const [num, setNum] = useState(0);

    function handleClick() {
        setAge((currentAge) => {
            //using it this way, it gets run with the "current" value of your state + adding 1 to it, not just only running when the "next" view renders
            return currentAge + 1;
        });

        if (name === "sally") {
            setName("Kyle");
            return;
        }

        setName("sally");
    }

    function incrementNumber() {
        setNum((currentNum) => {
            if (currentNum == 5) return currentNum; //max it out at 5

            return currentNum + 1;
        });
    }

    return (
        <>
            <h1 onClick={handleClick}>
                Hi {name} {age}
            </h1>

            <button onClick={incrementNumber}>Increment Number</button>

            <h3>The current number is: {num}</h3>

            <label htmlFor="name">Type a new name:</label>
            <input
                type="text"
                id="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
            />
        </>
    );
}

export default App;

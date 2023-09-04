import { useState } from "react";
import "./App.css";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
    //with arrays, you never modify the actual arr value, you just modify the copies of the array
    const [arr, setArr] = useState(INITIAL_VALUE);

    //6 buttons

    function removeFirstEl() {
        setArr((currentValues) => {
            return currentValues.slice(1);
        });
    }

    function removeLastEl() {
        setArr((currentValues) => {
            return currentValues.slice(0, -1);
        });
    }

    function removeFirstEl() {
        setArr((currentValues) => {
            return currentValues.slice(1);
        });
    }

    function removeSpecificLetter(letter) {
        setArr((currentValues) => {
            return currentValues.filter((el) => el !== letter);
        });
    }

    function addLetterToStart(letter) {
        setArr((currentValues) => {
            //we don't want to do arr.push(0) bcuz this changes the value

            return [letter, ...currentValues];
        });
    }

    function addLetterToEnd(letter) {
        setArr((currentValues) => {
            //we don't want to do arr.push(0) bcuz this changes the value

            return [...currentValues, letter];
        });
    }

    function clear() {
        setArr([]);
    }

    function reset() {
        setArr(INITIAL_VALUE);
    }

    function addLetterAtIndex(letter, index) {
        setArr((currentVals) => {
            //1. this gets the copies of all the letter before the index
            //2. then inserts letter at index
            //3. then adds the coies of all the letters after the index
            return [...currentVals.slice(0, index), letter, ...currentVals.slice(index)];
        });
    }

    return (
        <>
            <button onClick={removeFirstEl}>remove first el</button>
            <br />
            <button onClick={removeLastEl}>remove last el</button>
            <br />
            <button onClick={() => removeSpecificLetter("A")}>remove all A's</button>
            <br />
            <button onClick={() => removeSpecificLetter("B")}>remove all B's</button>
            <br />
            <button onClick={() => removeSpecificLetter("C")}>remove all C's</button>
            <br />
            <button onClick={() => addLetterToStart("K")}>add letter to start</button>
            <br />
            <button onClick={() => addLetterToEnd("W")}>add letter to end</button>
            <br />

            <button onClick={() => addLetterAtIndex("M", 2)}>Add Letter at Index</button>
            <br />

            <button onClick={() => clear()}>clear</button>
            <br />
            <button onClick={() => reset()}>reset</button>
            <br />

            <h1>{arr.join(", ")}</h1>
        </>
    );
}

export default App;

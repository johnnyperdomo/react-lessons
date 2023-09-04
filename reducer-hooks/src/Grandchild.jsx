import { useContext, useReducer } from "react";
import { NameContext } from "./App";

function reducer(count, action) {
    switch (action.type) {
        case "decrement":
            return count - 1;

        case "increment":
            return count + 1;
    }
    console.log(action);
}

export function GrandChild() {
    const value = useContext(NameContext); //returns the value of content, from the provider on the grandparent component

    //useState is a basic Hook for managing simple state transformation, and useReducer is an additional Hook for managing more complex state logic
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            {value.name}
            <br />

            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            {count}
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </>
    );
}

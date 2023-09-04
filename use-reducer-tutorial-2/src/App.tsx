import { useReducer, useState } from "react";
import "./App.css";

type State = {
    count: number;
    error: string | null;
};

type Action = {
    type: "increment" | "decrement";
};

//useReducer allows you to make copies of the state to make changes
function reducer(state: State, action: Action) {
    const { type } = action;

    switch (type) {
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null,
    });

    // const [count, setCount] = useState(0);

    return <>hi</>;
}

export default App;

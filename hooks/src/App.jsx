import { useCallback, useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [name, setName] = useState("");

    //useref; to be able to access/store the values between re-rendeers, without actually causing it to re-render
    const kyleRef = useRef("Kyle");

    //this useMemo hook is used for measuring performance, to calculate, but it can also boost performance in some cases; special use cases
    // useMemo();

    //useCallback hook, it's exactly like useMemo, but it passes in a function instead
    // useCallback();

    console.log(kyleRef.current);

    return (
        <>
            <label htmlFor="">
                Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <button onClick={() => (kyleRef.current = Math.random())}>Change ref</button>
        </>
    );
}

export default App;

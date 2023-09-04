import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
    //refs help you persist data without rerendering the page; a use-case could be for referencing elements in HTML
    const [name, setName] = useState<string>("James");
    // const kyleRef = useRef<string>("kyle");
    const inputRef = useRef<HTMLInputElement | null>(null);

    console.log(name);

    useEffect(() => {
        console.log(inputRef.current?.focus);
        inputRef.current?.focus();
    }, []);

    return (
        <>
            <label htmlFor="">
                Name:
                <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            </label>
        </>
    );
}

export default App;

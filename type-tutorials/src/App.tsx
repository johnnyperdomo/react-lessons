import { useRef, useState } from "react";
import "./App.css";
import { Button } from "./Button";
import { Child } from "./Child";

function App() {
    const [value, setValue] = useState<string>(); //can add empty state with type
    const inputRef = useRef<string>("testing"); //adding null makes it only a "read-only" property

    inputRef.current = "new value";

    console.log(inputRef.current);

    return (
        <>
            <Child name={"Johnny"}>
                <Button outline disabled name="Johnny">
                    Hi I'm a button!
                </Button>
            </Child>
        </>
    );
}

export default App;

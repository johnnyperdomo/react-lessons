import { useRef } from "react";
import "./App.css";
import { CustomInput } from "./CustomInput";

function App() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (inputRef.current) {
            console.log(inputRef.current.value);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CustomInput ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;

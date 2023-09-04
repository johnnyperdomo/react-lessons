import { useState } from "react";
import "./App.css";
import { useToggle } from "./useToggle";

//custom hooks are just functions to separate logic

function App() {
    // const [name, setName] = useState("");
    const nameInput = useInputValue("");

    const [isDarkMode, toggleDarkMode] = useToggle(false);
    // const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div
            style={{
                background: isDarkMode ? "#333" : "white",
                color: isDarkMode ? "white" : "#333",
            }}>
            <label htmlFor="">
                Name:
                <input {...nameInput} />
            </label>
            <br />
            <br />
            <button onClick={() => toggleDarkMode((d: boolean) => !d)}>Toggle Dark Mode</button>
        </div>
    );
}

function useInputValue(initialValue: any) {
    const [value, setValue] = useState(initialValue);

    return { value, onChange: (e) => setValue(e.target.value) };
}

export default App;

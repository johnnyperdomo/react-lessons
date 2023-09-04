import { createContext } from "react";
import "./App.css";
import { Counter } from "./Counter";

//create context is used when passing down props to nested children, doing this another way is called prop drilling, and it's a bad practice
export const NameContext = createContext();

function App() {
    const name = "Johnny";

    return (
        <>
            <NameContext.Provider value={{ name }}>
                <Counter />
            </NameContext.Provider>
        </>
    );
}

export default App;

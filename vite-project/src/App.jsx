import { TodoList } from "./TodoList";
import { NameDisplay } from "./NameDisplay";
import { TodoListClass } from "./TodoListClass";
import { TodoListItem } from "./TodoListItem";
import "./App.css";

function App() {
    //you can have custom labels in jsx
    // const myCustomLabel = <label htmlFor="inputId">Helloo</label>;

    const myAge = 23;

    return (
        <div>
            {/* <h3>hi yo soy un h1 header</h3>
            <MyButton /> */}
            {/* <label htmlFor="" style={{ backgroundColor: "red" }}>
                {2 + 2}
            </label>

             */}
            {/* {myCustomLabel}
            <input id="inputId" type="number" defaultValue={3} /> */}

            <TodoList />
            <NameDisplay name="Johnny" age={myAge}>
                {/* //children */}

                <span>Pizza</span>
            </NameDisplay>

            <TodoListClass />

            <TodoListItem isComplete={true}>
                <span>Take out the trash</span>
            </TodoListItem>

            <div>
                <img src="https://placebear.com/300/300" alt="" />
            </div>
        </div>
    );
}

//components; they should start with a capital letter to differentiate from divs
function MyButton() {
    return <button>yoooo hi i'm a button</button>;
}

export default App;

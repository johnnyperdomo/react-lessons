import { useRef, useState } from "react";

import "./App.css";

function App() {
    const [newTodoName, setnewTodoName] = useState("");
    const [todos, setTodos] = useState([]);
    const nameRef = useRef("Johnny"); // use ref can be useful for input forms, since they don't render until you submit

    function addNewTodo(e) {
        e.preventDefault();
        if (newTodoName === "") return;

        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                { name: newTodoName, completed: false, id: crypto.randomUUID() },
            ];
        });

        setnewTodoName("");
    }

    function toggleTodo(id, completed) {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) return { ...todo, completed };

                return todo;
            });
        });
    }

    function deleteTODO(todoID) {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== todoID);
        });
    }

    return (
        <>
            <ul id="list">
                {todos.map((todo) => {
                    return (
                        <li className="list-item" key={todo.id}>
                            <label className="list-item-label">
                                <input
                                    type="checkbox"
                                    data-list-item-checkbox
                                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                                />
                                <span data-list-item-text>{todo.name}</span>
                            </label>
                            <button data-button-delete onClick={() => deleteTODO(todo.id)}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>

            <form id="new-todo-form" onSubmit={addNewTodo}>
                {JSON.stringify(todos)}
                <label htmlFor="todo-input">New todo</label>
                <input
                    type="text"
                    id="todo-input"
                    value={newTodoName}
                    onChange={(e) => setnewTodoName(e.target.value)}
                />

                <input type="text" ref={nameRef} />

                <textarea name="" id="" cols="30" rows="10" defaultValue="gf"></textarea>

                <button>Add TODO</button>
            </form>
        </>
    );
}

export default App;

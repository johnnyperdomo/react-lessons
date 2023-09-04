export function TodoListItem({ children, isComplete }) {
    let name = children;

    return (
        <>
            <label htmlFor="item">{name}</label>

            <input type="checkbox" id="item" defaultChecked={isComplete} />
        </>
    );
}

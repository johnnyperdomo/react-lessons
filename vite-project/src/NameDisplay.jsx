//it can be like this
// export function NameDisplay(props) {
//      My name is {props.name} and I'm {props.age} years old

// this is destructured
// the child is passed through a special prop
export function NameDisplay({ name, age = 30, children }) {
    console.log(name, age, children);

    const favFood = children; //passed from the child. also accessed props.children

    return (
        <>
            <h2>
                My name is {name} and I'm {age} years old, and my favorite food is {favFood}
            </h2>
        </>
    );
}

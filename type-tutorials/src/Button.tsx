import type { ComponentProps } from "react";
import { Child } from "./Child";

type ButtonProps = {
    outline: boolean;
} & ComponentProps<"button"> &
    ComponentProps<typeof Child>;

//this is a generic type, to infer what your type is
type ListProps<Item> = {
    items: Item[];
    getKey: (item: Item) => React.Key;
    renderItem: (item: Item) => React.ReactNode;
};

//use this with the useReducer
// type Action =
//     | {
//           type: "Increment";
//           increaseBy: number;
//       }
//     | {
//           type: "Decrement";
//           decreaseBy: number;
//       };

export function Button({ outline, ...props }: ButtonProps) {
    return <button style={{ border: outline ? "1px solid red" : undefined }} {...props}></button>;
}

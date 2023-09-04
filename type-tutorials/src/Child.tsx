import type { ReactNode } from "react";

type ChildProps = {
    name: string;
    children: ReactNode; // anything that needs to pass as a children, like jsx
};

export function Child({ name, children }: ChildProps) {
    return (
        <>
            <h1>{name}</h1>

            <div>{children}</div>
        </>
    );
}

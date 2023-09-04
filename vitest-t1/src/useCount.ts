import { useState } from "react";

// export type Count = {
//     count: number;
//     incrementCount: () => void;
//     decrementCount: () => void;
// };

export function useCount(initialCount: number = 0) {
    const [count, setCount] = useState(initialCount);

    return {
        count,
        incrementCount: () => setCount((c) => c + 1),
        decrementCount: () => setCount((c) => c - 1),
    };
}

import { useCallback, useState } from "react";

export function useArray(initialValue: number[]) {
    const [array, setArray] = useState(initialValue);

    //wrap them inside a callback when using functions in a custom hook so if you ever need to use it later in a useEffect (so that's its created only once, with the empty dependency array)
    const push = useCallback((element: number) => {
        setArray((a) => [...a, element]);
    }, []);

    // function push(element: number) {
    //     setArray((a) => [...a, element]);
    // }

    const replace = useCallback((index: number, newElement: number) => {
        setArray((a) => {
            return [...a.slice(0, index), newElement, ...a.slice(index + 1)];
        });
    }, []);

    const filter = useCallback((callback: any) => {
        setArray((a) => {
            return a.filter(callback);
        });
    }, []);

    const remove = useCallback((index: number) => {
        setArray((a) => {
            return [...a.slice(0, index), ...a.slice(index + 1)];
        });
    }, []);

    const clear = useCallback(() => {
        setArray([]);
    }, []);

    const reset = useCallback(() => {
        setArray(initialValue);
    }, [initialValue]);

    // return { array, set: setArray, push };

    return { array, set: setArray, push, replace, filter, remove, clear, reset };
}

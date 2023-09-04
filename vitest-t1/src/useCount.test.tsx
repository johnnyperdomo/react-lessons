//testing a hook; useCount Component
import { renderHook, act } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCount } from "./useCount";

describe("#useCount", () => {
    test("increments and decrements when funcs are called", () => {
        // const { result } = renderHook(() => useCount(4)); [simple way]

        const { result } = renderHook(({ initialCount }) => useCount(initialCount), {
            initialProps: { initialCount: 0 },
        });
        result.current.count;

        //testing what the value of the component should be
        expect(result.current.count).toBe(0);

        //act makes sure state updates before it checks the next line of code
        act(() => result.current.incrementCount());
        act(() => result.current.incrementCount());
        expect(result.current.count).toBe(2);

        act(() => result.current.decrementCount());
        expect(result.current.count).toBe(1);
    });
});

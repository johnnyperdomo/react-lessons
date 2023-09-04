import { useState } from "react";

export function useToggle(initialValue: boolean) {
    const [value, setValue] = useState(initialValue);

    function toggle() {
        setValue((currentValue: boolean) => !currentValue);
    }

    return [value, toggle];
}

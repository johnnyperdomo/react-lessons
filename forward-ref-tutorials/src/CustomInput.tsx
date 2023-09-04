import { forwardRef } from "react";

//put the refs after the props
export function InnerInput(props, ref) {
    return <input {...props} ref={ref} style={{ border: "2px solid green" }} />;
}

//passes the ref to component
export const CustomInput = forwardRef(InnerInput);

//testing a component

import { describe, expect, test } from "vitest";
import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("should render counter", () => {
    render(<Counter />);
    screen.debug();

    //if you want to expect things (references); for checking actual values => expect().toEqual
    expect(0).toBe(0);
});

describe("Counter component", () => {
    test("it should render the initial count", () => {
        expect(1).toBe(1);

        render(<Counter />);

        //how the page actually looks
        screen.debug();
        //this should be in the document

        //for async checks => findBy... (awaits for element to show on screen or animation)
        //for when checking elements NOT on page => queryBy...
        expect(screen.getByText("3")).toBeInDocument();
    });

    test("should increment or decrement when clicking +/- buttons", async () => {
        //to interact with your screen:
        const user = userEvent.setup();
        render(<Counter />);
        const minusButton = screen.getByText("-");
        const plusBtn = screen.getByText("+");

        //what essentially you expect to happen after you click a button
        await user.click(plusBtn);
        expect(screen.getByText("1")).toBeInDocument();

        await user.click(minusButton);
        expect(screen.getByText("0")).toBeInDocument();
    });
});

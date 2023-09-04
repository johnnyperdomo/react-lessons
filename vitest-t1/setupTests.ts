import matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import { mockServer } from "./src/test-setup/mockServer";

//anything that you want to use to test elements in the DOM
expect.extend(matchers);

//after you finish testing, you're telling react to clean up everything that's on the screen
afterEach(() => {
    cleanup();
});

////fake an api server call
beforeAll(() => {
    mockServer.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
    cleanup();
    mockServer.resetHandlers();
});

//close out the mock server
afterAll(() => {
    mockServer.close();
});

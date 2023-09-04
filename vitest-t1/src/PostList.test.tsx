import matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect, beforeAll, afterAll, describe, test } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import { mockServer } from "./test-setup/mockServer";
import { rest } from "msw";
import { renderHook, act } from "@testing-library/react";

describe("PostList Component", () => {
    test("should get a list of posts", async () => {
        mockServer.use(
            rest.get("http://example.com/api/posts", (req, res, ctx) => {
                return res(
                    ctx.status(200),
                    ctx.json([
                        { id: 1, title: "post 1" },
                        { id: 2, title: "post 2" },
                    ])
                );
            })
        );

        expect(await screen.findByText("post 1").toBeInDocument());
    });
});

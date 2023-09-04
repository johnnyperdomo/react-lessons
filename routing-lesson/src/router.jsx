import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { NavLayout } from "./NavLayout";
//react router library; works similar to angular library
//with nested routers
export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        errorElement: <h1>Error</h1>,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/about",
                element: <About />, //can load things from an api on route; loader automatically converts it into json as well
                loader: ({ request: { signal } }) => {
                    return fetch("https://jsonplaceholder.typicode.com/users", { signal });
                },
            },
            {
                path: "/store",
                element: <Store />,
            },
        ],
    },
]);

import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from '../App';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/apps",
        element: <p>Hello</p>
    },
    {
        path: "*",
        element: <p>Not Found</p>
    }
])

export default routes;
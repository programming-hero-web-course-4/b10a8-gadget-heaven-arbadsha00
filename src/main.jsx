import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Dashboard from "./components/Dashboard";
import Cards from "./components/Cards";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader : ()=>fetch("../gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <Cards></Cards>,
            loader : ()=>fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader : ()=>fetch("../gadgets.json"),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

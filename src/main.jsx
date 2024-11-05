import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Error from "./components/Error";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Dashboard from "./components/Dashboard";
import Cards from "./components/Cards";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Offers from "./components/Offers";

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
        loader : ()=>fetch("../gadgets.json"),
      },
      {
        path: "/offers",
        element: <Offers></Offers>
        
      },
      {
        path: "/dashboard",
        element: <Navigate to="/dashboard/cart" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
            loader : ()=>fetch("../gadgets.json"),
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>,
            loader : ()=>fetch("../gadgets.json"),
          },
        ],
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

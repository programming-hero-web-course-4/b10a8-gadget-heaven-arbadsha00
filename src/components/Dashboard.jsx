import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Dashboard = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="">
      <div className=" bg-primary mx-auto py-6 space-y-4 text-center">
        <h1 className="text-3xl font-bold text-white r">Dashboard</h1>
        <p className="text-white w-4/5 md:w-3/5  mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-5 items-center justify-center">
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              `btn rounded-full px-16 text-lg font-semibold ${
                isActive ? "text-primary" : "btn-outline text-white"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              `btn rounded-full px-16 text-lg font-semibold ${
                isActive ? "text-primary" : "btn-outline text-white"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
          </div>
          <Outlet></Outlet>
    </div>
    </HelmetProvider>
    
  );
};

export default Dashboard;

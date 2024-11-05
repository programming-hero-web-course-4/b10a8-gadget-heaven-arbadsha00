import React from "react";
import { NavLink } from "react-router-dom";

const Explore = () => {
  return (
    
    <div className="bg-white p-4 rounded-xl space-y-4">
      <NavLink
        to="/category/all"
        className={({ isActive }) =>
          `btn rounded-full w-full font-semibold text-lg   text-gray-600 ${
            isActive ? "bg-primary text-white" : "bg-[#f7f7f7]"
          }`
        }
      >
        All Products
      </NavLink>
      <NavLink
        to="/category/Laptops"
        className={({ isActive }) =>
          `btn rounded-full w-full font-semibold text-lg   text-gray-600 ${
            isActive ? "bg-primary text-white" : "bg-[#f7f7f7]"
          }`
        }
      >
        Laptops
      </NavLink>
      <NavLink
        to="/category/Phones"
        className={({ isActive }) =>
          `btn rounded-full w-full font-semibold text-lg  ] text-gray-600 ${
            isActive ? "bg-primary text-white" : "bg-[#f7f7f7]"
          }`
        }
      >
        Phones
      </NavLink>
      <NavLink
        to="/category/Accessories"
        className={({ isActive }) =>
          `btn rounded-full w-full font-semibold text-lg   text-gray-600 ${
            isActive ? "bg-primary text-white" : "bg-[#f7f7f7]"
          }`
        }
      >
        Accessories
      </NavLink>
      <NavLink
        to="/category/Smart Watches"
        className={({ isActive }) =>
          `btn rounded-full w-full font-semibold text-lg   text-gray-600 ${
            isActive ? "bg-primary text-white" : "bg-[#f7f7f7]"
          }`
        }
      >
        Smart Watches
      </NavLink>
      <NavLink
        to="/category/MacBook"
        className={({ isActive }) =>
          `btn rounded-full w-full font-semibold text-lg   text-gray-600 ${
            isActive ? "bg-primary text-white" : "bg-[#f7f7f7]"
          }`
        }
      >
        MacBook
      </NavLink>
      <NavLink
        to="/category/iPhone"
        className={({ isActive }) =>
          `btn rounded-full w-full font-semibold text-lg   text-gray-600 ${
            isActive ? "bg-primary text-white" : "bg-[#f7f7f7]"
          }`
        }
      >
        Iphone
      </NavLink>
    </div>
  );
};

export default Explore;

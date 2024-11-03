import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
const Nav = () => {
  return (
    <div className="sticky top-0   z-50 bg-white/30 backdrop-blur-md">
      <nav className="container mx-auto px-4 flex justify-between items-center my-6">
        <h1 className="text-xl font-bold">Gadget Heaven</h1>
        <ul className="hidden md:flex gap-6">
          <NavLink
            className={({ isActive }) =>
              `font-semibold  ${
                isActive ? "text-primary underline" : "text-gray-600"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold  ${
                isActive ? "text-primary underline" : "text-gray-600"
              }`
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold  ${
                isActive ? "text-primary underline" : "text-gray-600"
              }`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </ul>
        <div className="flex items-center gap-3">
          <button className="btn btn-circle btn-outline text-xl hover:bg-primary">
            <MdOutlineShoppingCart />
                  </button>
                  <button className="btn btn-circle btn-outline text-xl hover:bg-primary">
                  <FaRegHeart />
          </button>
          <div className="dropdown dropdown-bottom dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="m-1">
              <RiMenu3Fill className="text-xl hover:text-primary" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-slate-100 rounded-xl z-[1] w-52 p-4 mt-4 shadow  space-y-2  "
            >
              <NavLink
                className={({ isActive }) =>
                  `font-semibold  ${
                    isActive ? "text-primary underline" : "text-gray-600"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-semibold  ${
                    isActive ? "text-primary underline" : "text-gray-600"
                  }`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-semibold  ${
                    isActive ? "text-primary underline" : "text-gray-600"
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

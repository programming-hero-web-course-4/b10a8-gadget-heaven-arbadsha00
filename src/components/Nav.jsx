import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { PurchaseContext, WishContext } from "./Context";
import { getPurchase, getWish } from "./LS";
import logo from "../assets/logo.png";
const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    const isHomePath =
      location.pathname === "/" || location.pathname.startsWith("/category/");
    setIsHome(isHomePath);
  }, [location]);

  const { totalWish, setTotalWish } = useContext(WishContext);
  const { totalPurchase, setTotalPurchase } = useContext(PurchaseContext);
  useEffect(() => {
    setTotalPurchase(getPurchase().length);
    setTotalWish(getWish().length);
  }, [setTotalPurchase, setTotalWish]);
  return (
    <div
      className={`    ${
        isHome
          ? "bg-primary text-white mx-2 mt-2 md:mt-4 md:mx-4  rounded-t-xl "
          : "bg-white pt-2 md:pt-4"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img className="w-8" src={logo} alt="" />
          <h1 className="text-xl font-bold">Gadget Heaven</h1>
        </div>
        <ul className="hidden md:flex gap-6">
          <NavLink
            className={({ isActive }) =>
              `font-semibold  ${
                isActive ? ` underline ${isHome ? "" : "text-gray-600"}` : ""
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold  ${
                isActive ? ` underline ${isHome ? "" : "text-primary"}` : ""
              }`
            }
            to="/offers"
          >
            Offers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold  ${
                isActive ? ` underline ${isHome ? "" : "text-primary"}` : ""
              }`
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold  ${
                isActive ? ` underline ${isHome ? "" : "text-primary"}` : ""
              }`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </ul>
        <div className="flex items-center gap-3 ">
          <div className="flex">
            <button
              onClick={() => navigate("/dashboard/cart")}
              className={` btn btn-sm md:btn-md btn-circle btn-outline ${
                isHome
                  ? "text-white hover:bg-black"
                  : "hover:bg-primary  hover:text-white"
              }`}
            >
              <MdOutlineShoppingCart className="text-base md:text-xl"/>
            </button>
            {totalPurchase !== 0 && (
              <span className="indicator-item badge">{totalPurchase}</span>
            )}
          </div>
          <div className="flex">
            <button
              onClick={() => navigate("/dashboard/wishlist")}
              className={`btn btn-sm md:btn-md btn-circle btn-outline text-xl ${
                isHome
                  ? "text-white hover:bg-black"
                  : "hover:bg-primary hover:text-white"
              }`}
            >
              <FaRegHeart className="text-base md:text-xl"/>
            </button>
            {totalWish !== 0 && (
              <span className="indicator-item badge">{totalWish}</span>
            )}
          </div>
          <div className="dropdown dropdown-bottom dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="m-1">
              <RiMenu3Fill
                className={
                  isHome
                    ? "text-white hover:text-black text-xl"
                    : "hover:text-primary text-xl"
                }
              />
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
              <NavLink
                className={({ isActive }) =>
                  `font-semibold  ${
                    isActive ? "text-primary underline" : "text-gray-600"
                  }`
                }
                to="/offers"
              >
                Offers
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

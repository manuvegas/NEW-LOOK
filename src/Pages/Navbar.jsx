import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Search from "../components/ComponentsUI/Search";
import ShoppingCart from "../components/ComponentsUI/ShoppingCart";
import BurgerNavbar from "../components/ComponentsUI/BurgerNavbar";

const AppNavbar = () => {
  return (
    <header className="flex justify-center">
      <nav className="bg-[#060606]  fixed top-0 w-full z-50">
        <div className=" mx-auto px-2 sm:px-6 lg:px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-1">
                <img
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  src="../UI/Logo.png"
                  alt="NewLook"
                />
                <h1 className="font-extrabold sm:text-xl">NEW LOOK</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Search />
              <Link to="/login">
                <FaUser className="sm:h-5 sm:w-5" />
              </Link>
              <ShoppingCart />
              <BurgerNavbar />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppNavbar;

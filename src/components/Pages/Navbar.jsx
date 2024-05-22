import React from "react";
import { IoLogIn } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Search from "../ComponentsUI/Search";
import ShoppingCart from "../ComponentsUI/ShoppingCart";
import BurgerNavbar from "../ComponentsUI/BurgerNavbar";

const AppNavbar = () => {
  return (
    <header className="flex justify-center">
      <nav className="bg-[#060606]  fixed top-0 w-full z-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <Link to="/" className="">
                <img
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  src="../UI/Logo.png"
                  alt="NewLook"
                />
              </Link>
              <h1 className="font-extrabold sm:text-xl">NEW LOOK</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Search />
              <Link to="/Login">
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

import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Search from "../components/ComponentsUI/Search";
import ShoppingCart from "../components/ComponentsUI/ShoppingCart";
import BurgerNavbar from "../components/ComponentsUI/BurgerNavbar";

const AppNavbar = () => {
  return (
    <header className="flex justify-center">
      <nav className="bg-[rgb(15,15,15)] fixed top-0 w-full z-50">
        <div className=" mx-auto flex flex-col items-center justify-center px-2 sm:px-6 lg:px-6">
          <div className="flex items-center mt-2">
            <Link to="/" className="flex items-center gap-1">
              <img
                className="h-8 w-8 sm:h-8 sm:w-8"
                src="../UI/Logo.png"
                alt="NewLook"
              />
              <h1 className="font-extrabold text-3xl">NEW LOOK</h1>
            </Link>
          </div>
          <div className="flex h-16">
            <div className="flex items-center space-x-10">
              <Search />
              <Link to="/login">
                <FaUser className="h-5 w-6" />
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

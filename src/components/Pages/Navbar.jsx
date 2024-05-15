import React from "react";
import { IoLogIn } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Search from "../UI/Search";
import Products from "../UI/Products";
import ShoppingCart from "../UI/ShoppingCart";

const AppNavbar = () => {
  return (
    <section className="flex justify-center">
      <nav className="bg-black  fixed top-0 w-full z-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="hiden">
                <img
                  className="h-10 w-auto"
                  src="../UI/Logo.png"
                  alt="NewLook"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/Login" className="">
                <IoLogIn className="h-6 w-6" />
              </Link>
              <Link to="/Contactos" className="">
                <FaUser className="h-5 w-5" />
              </Link>
              <Search />
              <ShoppingCart />
              <Products />
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default AppNavbar;

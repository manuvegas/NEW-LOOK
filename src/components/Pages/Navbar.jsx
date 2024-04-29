import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <section className="flex justify-center">
      <nav className="bg-black  fixed top-0 w-full z-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="hiden">
                <img
                  className="h-8 w-auto"
                  src="../UI/Logo.png"
                  alt="NewLook"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/Login" className="">
                <FaUser className="h-5 w-5" />
              </Link>
              <button
                className="  focus:outline-none focus:text-gray-300"
              >
                <RiSearchLine className="h-6 w-6" />
              </button>
              <button
                className=" focus:outline-none focus:text-gray-300"
              >
                <IoCartSharp className="h-6 w-6" />
              </button>
              <button
                className=" focus:outline-none focus:text-gray-300"
              >
                <CiBoxList className="h-6 w-6" />
              </button>
  
            </div>
          </div>
        </div>
        
      </nav>
    </section>
  );
};

export default AppNavbar;

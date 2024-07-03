import React from "react";

const Button = ({ children, className }) => {
  return (
    <div>
      <button
        className={`cursor-pointer relative group overflow-hidden border border-white ${className}`}
      >
        <span className="font-bold text-white text-sm relative z-10 group-hover:text-white duration-500">
          {children}
        </span>
        <span className="absolute top-0 left-0 w-full bg-[#060606] duration-500 group-hover:-translate-x-full h-full"></span>
        <span className="absolute top-0 left-0 w-full bg-[#060606] duration-500 group-hover:translate-x-full h-full"></span>

        <span className="absolute top-0 left-0 w-full bg-[#060606] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
        <span className="absolute delay-300 top-0 left-0 w-full bg-[#060606] duration-500 group-hover:translate-y-full h-full"></span>
      </button>
    </div>
  );
};

export default Button;

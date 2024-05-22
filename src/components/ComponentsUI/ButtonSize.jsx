import React from "react";

const ButtonSize = ({className}) => {
  const sizes = [
    {
      talle: "S",
    },
    {
      talle: "M",
    },
    {
      talle: "L",
    },
    {
      talle: "XL",
    },
    {
      talle: "XXL",
    },
    {
      talle: "48",
    },
    {
      talle: "50",
    },
  ];
  return (
    <div className="flex flex-wrap gap-2 ${}">
      {sizes.map((size, index) => (
        <div key={index}>
          <button className={`relative px-8 py-2 rounded-md  isolation-auto z-10 border before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-black hover:font-bold ${className}`}>{size.talle}</button>
        </div>
      ))}
    </div>
  );
};

export default ButtonSize;

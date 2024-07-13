import React from "react";

const ButtonSize = ({ className }) => {
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
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size, index) => (
        <div key={index}>
          <button className={`${className}`}>{size.talle}</button>
        </div>
      ))}
    </div>
  );
};

export default ButtonSize;

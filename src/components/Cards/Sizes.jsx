import React from "react";

const Sizes = ({title}) => {
  const  sizes = [{
    prenda:"BUZOS",
    medidas:[{s:"",m:"",l:"",xl:"",xxl:""}]
  }]

  return (
    <>
      <div className="p-4 rounded-lg shadow-md border border-gray-300">
      <h2 className="text-2xl text-center font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className="font-semibold">Talle</div>
        <div className="font-semibold">Largo</div>
        <div className="font-semibold">Ancho</div>
        <div>S</div>
        <div>40cm</div>
        <div>30cm</div>
        <div>M</div>
        <div>42cm</div>
        <div>32cm</div>
        <div>L</div>
        <div>44cm</div>
        <div>34cm</div>
        <div>XL</div>
        <div>46cm</div>
        <div>36cm</div>
      </div>
    </div>
    </>
  );
};

export default Sizes;

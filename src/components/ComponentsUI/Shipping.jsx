import React from "react";

const shippingCards = [
  {
    title: "Correo Argentino",
    cards: "../tarjetas-credito/correoArg.png",
  },
  {
    title: "Oca",
    cards: "../tarjetas-credito/oca.png",
  },
];

const Shipping = () => {
  return (
    <div className="flex flex-wrap max-w-56">
      {shippingCards.map(({ cards, title },index) => (
        <img src={cards} alt={title} key={index} className="w-12 h-auto m-1"/>
      ))}
    </div>
  );
};

export default Shipping;

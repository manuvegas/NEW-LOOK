import React from "react";

const creditCards = [
  {
    title: "Visa",
    card: "../tarjetas-credito/visa.png",
  },
  {
    title: "MasterCard",
    card: "../tarjetas-credito/mastercard.png",
  },
  {
    title: "American Express",
    card: "../tarjetas-credito/american.png",
  },
  {
    title: "Cash",
    card: "../tarjetas-credito/efectivo.png",
  },
  {
    title: "Transferencia Bancaria",
    card: "../tarjetas-credito/transferencia.png",
  },
  {
    title: "Naranja",
    card: "../tarjetas-credito/naranja.png",
  },
  {
    title: "cabal",
    card: "../tarjetas-credito/cabal.png",
  },
];

const CreditCards = () => {
  return (
    <>
      <div className="flex flex-wrap max-w-56">
        {creditCards.map(({ title, card }, index) => (
          <img
            src={card}
            alt={title}
            className="w-12 h-auto m-1"
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default CreditCards;

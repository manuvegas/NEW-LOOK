import React from "react";

const CreateCards = () => {
  return (
    <div>
      <div className="bg-[#060606] text-white p-6 rounded-lg max-w-sm sm:max-w-xl mx-auto shadow-lg  animate__animated animate__fadeIn">
        <h1 className="text-lg font-extrabold text-center">
          CREACION DE TARJETA
        </h1>
        <form className="p-3">
          <h2 className="text-md font-bold mt-3">TITULO</h2>
          <input
            id="titulo"
            name="titulo"
            placeholder="Titulo de la tarjeta:"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />
          <h2 className="text-md font-bold mt-3">PRECIO</h2>
          <input
            id="precio"
            name="precio"
            placeholder="Precio de la tarjeta:"
            type="number"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />
          <h2 className="text-md font-bold mt-3">CUOTAS</h2>
          <input
            id="cuotas"
            name="cuotas"
            placeholder="Cantidad de cuotas para el producto de la tarjeta"
            type="number"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />
          <h2 className="text-md font-bold mt-3">IMAGEN</h2>
          <input
            id="imagen"
            name="imagen"
            placeholder="Agregar la imagen de la tarjeta"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />
          <h2 className="text-md font-bold mt-3">STOCK</h2>
          <input
            id="stock"
            name="stock"
            placeholder="Stock disponible de el producto de la tarjeta"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />
          <h2 className="text-md font-bold mt-3">CATEGORIA</h2>
          <input
            id="stock"
            name="stock"
            placeholder="Stock disponible de el producto de la tarjeta"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />
        </form>
        <div className="flex items-center justify-center">
          <button className=" rounded-md bg-black px-5 py-3 font-semibold leading-7 text-white hover:bg-black/60">
            AGREGAR TARJETA
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCards;

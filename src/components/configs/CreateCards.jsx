import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "@/Fetching/products.feching";

const CreateCards = () => {
  const [errorText, setErrorText] = useState("");
  const [colores, setColores] = useState([
    { nombre: "", talles: [{ nombre: "", stock: "" }] },
  ]);
  const navigate = useNavigate();

  const handleChangeColor = (colorIndex, field, value) => {
    const newColores = [...colores];
    newColores[colorIndex][field] = value;
    setColores(newColores);
  };

  const handleChangeTalle = (colorIndex, talleIndex, field, value) => {
    const newColores = [...colores];
    newColores[colorIndex].talles[talleIndex][field] = value;
    setColores(newColores);
  };

  const handleAddColor = () => {
    setColores([
      ...colores,
      { nombre: "", talles: [{ nombre: "", stock: "" }] },
    ]);
  };

  const handleRemoveColor = (index) => {
    const newColores = [...colores];
    newColores.splice(index, 1);
    setColores(newColores);
  };

  const handleAddTalle = (colorIndex) => {
    const newColores = [...colores];
    newColores[colorIndex].talles.push({ nombre: "", stock: "" });
    setColores(newColores);
  };

  const handleRemoveTalle = (colorIndex, talleIndex) => {
    const newColores = [...colores];
    newColores[colorIndex].talles.splice(talleIndex, 1);
    setColores(newColores);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const producto = {
        titulo: e.target.titulo.value,
        precio: e.target.precio.value,
        descripcion: e.target.descripcion.value,
        img: e.target.imagen.value,
        cuotas: e.target.cuotas.value,
        categoria: e.target.categoria.value,
        colores: colores.map((color) => ({
          nombre: color.nombre,
          talles: color.talles.map((talle) => ({
            nombre: talle.nombre,
            stock: parseInt(talle.stock),
          })),
        })),
      };
      await createProduct(producto);
      setErrorText("");
      navigate("/");
    } catch (error) {
      setErrorText(error.message);
    }
  };
  return (
    <div>
      <div className="custom-shadow text-white p-6 rounded-lg max-w-sm sm:max-w-xl mx-auto animate__animated animate__fadeIn">
        <h1 className="text-lg font-extrabold text-center">
          CREACION DE TARJETA
        </h1>
        <form className="p-3" onSubmit={handleSubmit}>
          <label htmlFor="titulo" className="text-md font-bold mt-3">
            TITULO
          </label>
          <input
            id="titulo"
            name="titulo"
            placeholder="Titulo de la tarjeta:"
            type="text"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />

          <label htmlFor="precio" className="text-md font-bold mt-3">
            PRECIO
          </label>
          <input
            id="precio"
            name="precio"
            placeholder="Precio de la tarjeta:"
            type="number"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />

          <label htmlFor="cuotas" className="text-md font-bold mt-3">
            CUOTAS
          </label>
          <input
            id="cuotas"
            name="cuotas"
            placeholder="Cantidad de cuotas para el producto de la tarjeta"
            type="number"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            required
          />

          <label htmlFor="imagen" className="text-md font-bold mt-3">
            IMAGEN
          </label>
          <input
            id="imagen"
            name="imagen"
            placeholder="Agregar la imagen de la tarjeta"
            type="file"
            onChange={(e) => {}}
            className="flex h-10  border-gray-300 bg-transparent text-sm "
            required
          />
          <label htmlFor="descripcion" className="text-md font-bold mt-3">
            DESCRIPCION
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripción del producto"
            className="flex h-20 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            required
          ></textarea>
          {colores.map((color, colorIndex) => (
            <div key={colorIndex}>
              <label
                htmlFor={`colorNombre-${colorIndex}`}
                className="text-md font-bold mt-3 block"
              >
                COLOR {colorIndex + 1}
              </label>
              <input
                id={`colorNombre-${colorIndex}`}
                name={`colorNombre-${colorIndex}`}
                placeholder="Nombre del color"
                value={color.nombre}
                onChange={(e) =>
                  handleChangeColor(colorIndex, "nombre", e.target.value)
                }
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              {color.talles.map((talle, talleIndex) => (
                <div key={`${colorIndex}-${talleIndex}`} className="ml-5">
                  <label
                    htmlFor={`talleNombre-${colorIndex}-${talleIndex}`}
                    className="text-md font-bold mt-3 block"
                  >
                    TALLE {talleIndex + 1}
                  </label>
                  <input
                    id={`talleNombre-${colorIndex}-${talleIndex}`}
                    name={`talleNombre-${colorIndex}-${talleIndex}`}
                    placeholder="Nombre del talle"
                    value={talle.nombre}
                    onChange={(e) =>
                      handleChangeTalle(
                        colorIndex,
                        talleIndex,
                        "nombre",
                        e.target.value
                      )
                    }
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                  <input
                    id={`talleStock-${colorIndex}-${talleIndex}`}
                    name={`talleStock-${colorIndex}-${talleIndex}`}
                    placeholder="Stock del talle"
                    type="number"
                    value={talle.stock}
                    onChange={(e) =>
                      handleChangeTalle(
                        colorIndex,
                        talleIndex,
                        "stock",
                        e.target.value
                      )
                    }
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                  {talleIndex > 0 && (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveTalle(colorIndex, talleIndex)
                        }
                        className="text-red-500 mt-1"
                      >
                        Eliminar Talle
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <div className="mx-auto">
                <button
                  type="button"
                  onClick={() => handleAddTalle(colorIndex)}
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md"
                >
                  Agregar Talle
                </button>
                {colorIndex > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveColor(colorIndex)}
                    className="text-red-500 mt-1 font-bold"
                  >
                    Eliminar Color
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="mb-5 mt-2">
            <button
              type="button"
              onClick={handleAddColor}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Agregar Color
            </button>
          </div>
          <label htmlFor="categoria" className="text-md font-bold mt-3">
            CATEGORIA
          </label>
          <select
            id="categoria"
            name="categoria"
            className="w-full bg-[#060606] border p-2 text-white rounded"
            required
          >
            <option value="buzo">Buzo</option>
            <option value="remera">Remera</option>
            <option value="pantalon">Pantalón</option>
            <option value="campera">Campera</option>
          </select>

          <div className="flex items-center justify-center flex-col mt-5">
            {errorText && <span className="text-red-500 ">{errorText}</span>}
            <button
              type="submit"
              className="rounded-md bg-black px-5 py-3 font-semibold leading-7 text-white hover:bg-black/60"
            >
              AGREGAR TARJETA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCards;

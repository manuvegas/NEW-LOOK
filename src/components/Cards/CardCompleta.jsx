import React, { useEffect, useState } from "react";
import Card from "./Card";
import OffCanvasFiltros from "../UI/OffCanvasFiltros";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import BreadCumbs from "../UI/BreadCumbs";
import  {Button}  from "../UI/Button";
import "animate.css";
import { Input } from "../UI/Input";

const CardCompleta = ({ data, defaultSortBy, categoria}) => {
  const [selectedCategory, setSelectedCategory] = useState("TODO");
  const [selectedColor, setSelectedColor] = useState("TODO");
  const [precioDesde, setPrecioDesde] = useState("");
  const [precioHasta, setPrecioHasta] = useState("");
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [isOpen, setIsOpen] = useState(false);

  // Obtener todos los colores presentes en los datos
  const colors = [
    "TODO",
    ...new Set(data.map((item) => item.color).filter((color) => color)),
  ];

  const filteredItems =
    selectedCategory === "TODO"
      ? data
      : data.filter((item) => item.titulo === selectedCategory);

  const filteredByColor =
    selectedColor === "TODO"
      ? filteredItems
      : filteredItems.filter((item) => item.color === selectedColor);

  const filteredByPrice =
    precioDesde && precioHasta
      ? filteredByColor.filter(
          (item) =>
            item.precio >= parseInt(precioDesde) &&
            item.precio <= parseInt(precioHasta)
        )
      : filteredByColor;

  const sortItems = (criterio) => {
    switch (criterio) {
      case "loMasVendidos":
        return [...filteredByPrice].sort((a, b) => b.ventas - a.ventas);
      case "precioMayor":
        return [...filteredByPrice].sort((a, b) => b.precio - a.precio);
      case "precioMenor":
        return [...filteredByPrice].sort((a, b) => a.precio - b.precio);
      case "losMasNuevos":
        return [...filteredByPrice].sort(
          (a, b) => new Date(b.fecha) - new Date(a.fecha)
        );
      default:
        return [...filteredByPrice];
    }
  };

  const sortedItems = sortItems(sortBy);

  const getCountByCategory = (category, property) => {
    return category === "TODO"
      ? data.length
      : filteredItems.filter(
          (item) => item[property] && item[property].includes(category)
        ).length;
  };

  useEffect(() => {
    setSortBy(defaultSortBy);
  }, [defaultSortBy]);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="mx-auto px-4 animate__animated animate__fadeIn">
      <div className="max-w-[980px] mx-auto text-black">
        <div className="flex justify-around items-center pt-24 mx-auto sm:justify-between">
          <div className="rounded-full">
            <button onClick={toggleFilters} className="flex items-center">
              <HiAdjustmentsHorizontal size={40} />
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">{categoria}</h1>
          </div>
        </div>
        <div className="mt-3 flex justify-center">
          <BreadCumbs />
        </div>
      </div>
      <div>
        <nav className="flex flex-wrap justify-center items-center mx-auto my-1 max-w-[1020px] ">
          {sortedItems.length === 0 ? (
            <p className="text-white">
              No se encontraron resultados con tu búsqueda.
            </p>
          ) : (
            sortedItems.map((item, index) => (
              <Card
                id={item.id}
                titulo={item.titulo}
                img={item.img}
                antiguo={item.antiguo}
                cuotas={item.cuotas}
                off={item.off}
                precio={item.precio}
                key={index}
                
              />
            ))
          )}
        </nav>

        <OffCanvasFiltros
          isOpen={isOpen}
          toggleFilters={toggleFilters}
          handleClose={handleClose}
        >
          <div className="bg-black text-white p-4 rounded max-w-lg mt-10">
            <h2 className="text-center text-3xl font-extrabold pb-4">
              FILTROS
            </h2>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold my-3">COLOR</h2>
              <div className="flex flex-row gap-2 flex-wrap">
                {colors.map((color, index) => (
                  <Button
                    key={index}
                    className={
                      selectedColor === color
                        ? "bg-dark text-white rounded border flex items-center space-x-2"
                        : "bg-dark text-white rounded border flex items-center space-x-2"
                    }
                    onClick={() => setSelectedColor(color)}
                  >
                    <span
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></span>
                    <span>
                      {color === "TODO" ? "Todos" : color} (
                      {getCountByCategory(color, "color")})
                    </span>
                  </Button>
                ))}
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold my-3">PRECIO</h2>
                <div className="flex gap-5 sm:items-center sm:space-x-4 ">
                  <Input
                    className={"w-28 h-8 text-white"}
                    type={"number"}
                    variant={"underlined"}
                    id={"precioDesde"}
                    value={precioDesde}
                    label={"Desde:"}
                    onChange={(e) => setPrecioDesde(e.target.value)}
                  />
                  <Input
                    className={"w-28 h-8 text-white"}
                    type={"number"}
                    variant={"underlined"}
                    id={"precioHasta"}
                    value={precioHasta}
                    label={"Hasta:"}
                    onChange={(e) => setPrecioHasta(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">ORDENAR POR:</h3>
                <select
                  className="w-full  bg-dark border p-2 text-white rounded"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Predeterminado</option>
                  <option value="loMasVendidos">Lo más vendidos</option>
                  <option value="precioMayor">Precio de mayor a menor</option>
                  <option value="precioMenor">Precio de menor a mayor</option>
                  <option value="losMasNuevos">Los más nuevos</option>
                </select>
              </div>
            </div>
          </div>
        </OffCanvasFiltros>
      </div>
    </div>
  );
};

export default CardCompleta;

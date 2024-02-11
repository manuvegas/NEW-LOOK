import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";

const CardCompleta = ({ data, defaultSortBy }) => {
  const [selectedCategory, setSelectedCategory] = useState("TODO");
  const [selectedColor, setSelectedColor] = useState("TODO");
  const [precioDesde, setPrecioDesde] = useState("");
  const [precioHasta, setPrecioHasta] = useState("");
  const [sortBy, setSortBy] = useState(defaultSortBy);

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

  return (
    <div className="containerPrincipal">
      <nav className="contenedorFiltros">
        <div className="contenedor">
          <h2 className="filtros">FILTROS</h2>
          <div className="filtroSection">
            <h3 className="tituloFiltros">COLOR</h3>
            {colors.map((color, index) => (
              <button
                key={index}
                className={
                  selectedColor === color
                    ? "filtroButtonSelected"
                    : "filtroButton"
                }
                onClick={() => setSelectedColor(color)}
              >
                <span
                  className="colorCircle"
                  style={{ backgroundColor: color.toLowerCase() }}
                ></span>
                {color === "TODO" ? "Todos" : color} (
                {getCountByCategory(color, "color")})
              </button>
            ))}
          </div>
          <div className="filtroSection">
            <h3 className="tituloFiltros">PRECIO</h3>
            <label htmlFor="precioDesde">DESDE:</label>
            <input
            className="inputPrice"
              type="number"
              id="precioDesde"
              value={precioDesde}
              onChange={(e) => setPrecioDesde(e.target.value)}
            />
            <label htmlFor="precioHasta">HASTA:</label>
            <input
            className="inputPrice"
              type="number"
              id="precioHasta"
              value={precioHasta}
              onChange={(e) => setPrecioHasta(e.target.value)}
            />
          </div>
          <div className="filtroSection">
            <h3 className="tituloFiltros">ORDENAR POR:</h3>
            <select
              className="ordenarPor"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option className="opcionesOrdenarPor" value="default">
                Predeterminado
              </option>
              <option className="opcionesOrdenarPor" value="loMasVendidos">
                Lo más vendidos
              </option>
              <option className="opcionesOrdenarPor" value="precioMayor">
                Precio de mayor a menor
              </option>
              <option className="opcionesOrdenarPor" value="precioMenor">
                Precio de menor a mayor
              </option>
              <option className="opcionesOrdenarPor" value="losMasNuevos">
                Los más nuevos
              </option>
            </select>
          </div>
        </div>
      </nav>

      <div className="navCard">
        {sortedItems.length === 0 ? (
          <p className="noResults">
            No se encontraron resultados con tu búsqueda.
          </p>
        ) : (
          sortedItems.map((item, index) => (
            <ListCard
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
      </div>
    </div>
  );
};

export default CardCompleta;

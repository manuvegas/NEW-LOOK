import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const buzos = [
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo1.jpeg",
    titulo: "BUZO 1",
    color: "NEGRO",
    off: 30,
    antiguo: 32000,
    precio: 20000,
    cuotas: "",
    ventas: 41,
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo2.jpeg",
    titulo: "BUZO 2",
    color: "BLANCO",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 5,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo3.jpeg",
    titulo: "BUZO 3",
    color: "BLANCO",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 40,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo4.jpeg",
    titulo: "BUZO 4",
    color: "NEGRO",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 40,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo5.jpeg",
    titulo: "BUZO 5",
    color: "GRIS",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 36,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo6.jpeg",
    titulo: "BUZO 6",
    color: "NEGRO",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 38,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo7.jpeg",
    titulo: "BUZO 7",
    color: "GRIS",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 10,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo8.jpeg",
    titulo: "BUZO 8",
    color: "BLANCO",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 15,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo9.jpeg",
    titulo: "BUZO 9",
    color: "NEGRO",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 12,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo10.jpeg",
    titulo: "BUZO 10",
    color: "NEGRO",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 29,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo11.jpeg",
    titulo: "BUZO 11",
    color: "NEGRO",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 35,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo12.jpeg",
    titulo: "BUZO 12",
    color: "BLANCO",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 17,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo13.jpeg",
    titulo: "BUZO 13",
    color: "GRIS",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 11,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    img: "/img(buzos)/buzo14.jpeg",
    titulo: "BUZO 14",
    color: "NEGRO",
    off: "30",
    antiguo: 40000,
    precio: 20000,
    ventas: 39,
    cuotas: "",
    sizes: ["s", "m", "l", "xl", "xxl"],
  },
];

buzos.forEach((buzo) => {
  buzo.precio = buzo.antiguo - (buzo.antiguo * buzo.off) / 100;
});

const ListBuzo = () => {
  const [selectedCategory, setSelectedCategory] = useState("TODO");
  const [selectedColor, setSelectedColor] = useState("TODO");
  const [precioDesde, setPrecioDesde] = useState("");
  const [precioHasta, setPrecioHasta] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const categories = ["TODO", ...new Set(buzos.map((item) => item.titulo))];
  const colors = ["TODO", "BLANCO", "NEGRO", "GRIS"];

  const filteredBuzos =
    selectedCategory === "TODO"
      ? buzos
      : buzos.filter((item) => item.titulo === selectedCategory);

  const filteredByColor =
    selectedColor === "TODO"
      ? filteredBuzos
      : filteredBuzos.filter((item) => item.color === selectedColor);

  const filteredByPrice =
    precioDesde && precioHasta
      ? filteredByColor.filter(
          (item) =>
            item.precio >= parseInt(precioDesde) &&
            item.precio <= parseInt(precioHasta)
        )
      : filteredByColor;

      const sortBuzos = (criterio) => {
        switch (criterio) {
          case "loMasVendidos":
            return [...filteredByPrice].sort((a, b) => b.ventas - a.ventas);
          case "precioMayor":
            return [...filteredByPrice].sort((a, b) => b.precio - a.precio);
          case "precioMenor":
            return [...filteredByPrice].sort((a, b) => a.precio - b.precio);
          case "losMasNuevos":
            return [...filteredByPrice].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
          default:
            return [...filteredByPrice]; // Devuelve una copia del array sin ordenar
        }
      };

  const sortedBuzos = sortBuzos(sortBy);

  const getCountByCategory = (category, property) => {
    return category === "TODO"
      ? buzos.length
      : filteredBuzos.filter((item) => item[property].includes(category))
          .length;
  };

  return (
    <div className="containerPrincipal">
      <nav className="contenedorFiltros">
        <div className="contenedor">
          <h2 className="filtros">Filtros</h2>
          <div className="filtroSection">
            <h3>Color</h3>
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
                {color} ({getCountByCategory(color, "color")})
              </button>
            ))}
          </div>
          <div className="filtroSection">
            <h3>Precio</h3>
            <label htmlFor="precioDesde">Desde:</label>
            <input
              type="number"
              id="precioDesde"
              value={precioDesde}
              onChange={(e) => setPrecioDesde(e.target.value)}
            />
            <label htmlFor="precioHasta">Hasta:</label>
            <input
              type="number"
              id="precioHasta"
              value={precioHasta}
              onChange={(e) => setPrecioHasta(e.target.value)}
            />
          </div>
          <div className="filtroSection">
            <h3>Ordenar por:</h3>
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
        {sortedBuzos.length === 0 ? (
          <p className="noResults">
            No se encontraron resultados con tu búsqueda.
          </p>
        ) : (
          sortedBuzos.map((item, index) => (
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

export default ListBuzo;

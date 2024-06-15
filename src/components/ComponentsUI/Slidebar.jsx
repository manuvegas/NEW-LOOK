import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../UI/resizable";
import Button from "./Button";
import { Input } from "../UI/input";
import ButtonSize from "./ButtonSize";
import Card from "../Cards/Card";

const Slidebar = () => {
  const location = useLocation();
  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual
  const [prendas, setPrendas] = useState([]);
  const { titulo } = useParams();

  useEffect(() => {
    fetch("../prendas.json") // Asegúrate de que esta ruta sea correcta
      .then((response) => response.json())
      .then((data) => {
        const prendasFiltradas = data.filter(
          (item) => item.categoria === titulo
        );
        setPrendas(prendasFiltradas);
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, [titulo]);
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25}>
        <div className=" p-2 mt-24">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold my-3">COLOR</h2>
            <div className="flex flex-row gap-2 flex-wrap">
              <Button className={"px-6 py-1"} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold my-3">PRECIO</h2>
              <div className="flex flex-col gap-5">
                <Input
                  className={"w-28 h-8 text-white"}
                  type={"number"}
                  variant={"underlined"}
                  id={"precioDesde"}
                  label={"Desde:"}
                  placeholder="Desde:"
                />
                <Input
                  className={"w-28 h-8 text-white"}
                  type={"number"}
                  variant={"underlined"}
                  id={"precioHasta"}
                  label={"Hasta:"}
                  placeholder="Hasta:"
                />
              </div>
            </div>
            <div>
              <h3 className="text-md font-semibold my-3">TALLES</h3>
              <ButtonSize className={"text-xs"}/>
            </div>
            <div className="flex flex-col">
              <h3 className="text-md font-semibold">ORDENAR POR:</h3>
              <select
                className="w-full bg-[#060606] border p-2 text-white rounded"
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
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="mt-24">
          <span className="font-semibold">
            <div className="">
              <nav className="contenedor2 mb-10">
                {prendas.length === 0 ? (
                  <p className="text-white">
                    No se encontraron resultados con tu búsqueda.
                  </p>
                ) : (
                  prendas.map((item, index) => (
                    <Card
                      id={item.id}
                      titulo={item.titulo}
                      img={item.img}
                      precio={item.precio}
                      key={index}
                    />
                  ))
                )}
              </nav>
            </div>
          </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Slidebar;

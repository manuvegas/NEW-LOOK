import { React, useState } from "react";
import Button from "../UI/Button";
import Select from "../UI/SelectUI";
import InputUI from "../UI/InputUI";
import OffCanvasDetails from "../UI/OffCanvasDetails";

const CardInspect = ({
  titulo,
  img,
  precio,
  colores,
  cuotas,
  precioPorCuota,
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false); // Estado para controlar si el off-canvas está abierto

  const openDetails = () => {
    setIsDetailsOpen(true);
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <section className="  animate__animated animate__fadeIn text-white">
      <div className="bg-black rounded-md p-5">
        <div className="flex flex-col md:flex-row gap-5 items-center max-w-[380px] md:max-w-[1020px]">
          <div className="text center">
            <img
              src={img}
              alt={titulo}
              className="w-[370px] h-[490px] object-cover"
            />
          </div>
          <div className="w-[300px] text-left">
            <div className="flex flex-col gap-2 h-[490px]">
              <h1 className="text-3xl font-extrabold">{titulo}</h1>
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-xl">${precio}</p>
                {cuotas ? (
                  <span className="font-semibold">{cuotas} cuotas de ${(precio / cuotas).toFixed(2)} </span>
                ) : (
                  null
                )}
                {/* Agregamos el mapeo de colores aquí */}
                <div className="flex flex-row gap-2">
                  {colores.map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
                <span className="text-xs">
                  Modelo:183 cm de altura y talla XL
                </span>
              </div>
              <div>
                <Select />
              </div>
              <div>
                <InputUI
                  className="w-2/4"
                  variant="underlined"
                  label="CANTIDAD"
                />
              </div>
              <Button
                className={"text-left inline-block w-1/2 mt-2"}
                onClick={openDetails} // Abre el off-canvas al hacer clic
              >
                Ver mas detalles
              </Button>
              <div className="flex justify-center mt-3">
                <Button className="mx-auto">AÑADIR AL CARRITO</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDetailsOpen && (
        <OffCanvasDetails
          isOpen={isDetailsOpen}
          closeCanvas={closeDetails}
          titulo={titulo}
          img={img}
          precio={precio}
          colores={colores}
        />
      )}
    </section>
  );
};

export default CardInspect;

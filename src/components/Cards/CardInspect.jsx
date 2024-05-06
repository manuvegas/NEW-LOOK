import { React } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/input";

const CardInspect = ({ titulo, img, precio, colores, cuotas }) => {
  return (
    <section className="  animate__animated animate__fadeIn text-white">
      <div className="bg-black rounded-md p-5">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="text center ">
            <img
              src={img}
              alt={titulo}
              loading="lazy"
              className="w-[420px] h-[490px] md:w-[600px] md:h-[800px] object-cover"
            />
          </div>
          <div className="text-left">
            <div className="flex flex-col gap-2 h-[490px] md:h-[800px] lg:w-[500px]">
              <h1 className="text-3xl text-center font-extrabold">{titulo}</h1>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-5 justify-center">
                  <p className="font-bold text-2xl">${precio}</p>
                  {cuotas ? (
                    <span className="font-bold">
                      {cuotas} Cuotas de ${(precio / cuotas).toFixed(2)}
                    </span>
                  ) : null}
                </div>
                {/* Agregamos el mapeo de colores aquí */}
                <div className="text-center">
                  <div className="flex justify-center flex-row gap-3 mb-5">
                    {colores.map((color, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: color }}
                      ></button>
                    ))}
                  </div>
                  <span className="text-md font-bold">
                    Modelo : 1,75 cm de altura y talle XL
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 justify-center">
                <span className="text-md font-bold">CANTIDAD</span>
                <Input
                  className="w-2/4"
                  variant="underlined"
                  label="CANTIDAD"
                />
              </div>
              <div className="flex justify-center mt-3">
                <Button className="mx-auto p-5 border">
                  AÑADIR AL CARRITO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardInspect;

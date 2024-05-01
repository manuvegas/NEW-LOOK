import { React } from "react";
import  {Button } from "../UI/Button";
import  Input  from "../UI/Input";


const CardInspect = ({ titulo, img, precio, colores, cuotas }) => {
  return (
    <section className="  animate__animated animate__fadeIn text-white">
      <div className="bg-black rounded-md p-5">
        <div className="flex flex-col md:flex-row gap-5 items-center max-w-[380px] md:max-w-[1020px]">
          <div className="text center">
            <img
              src={img}
              alt={titulo}
              loading="lazy"
              className="w-[420px] h-[490px] md:w-[500px] md:h-[700px] object-cover"
            />
          </div>
          <div className="w-[320px] text-left">
            <div className="flex flex-col gap-2 h-[490px] md:h-[700px]">
              <h1 className="text-3xl text-center font-extrabold">{titulo}</h1>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-5 justify-center">
                  <p className="font-semibold text-2xl">${precio}</p>
                  {cuotas ? (
                    <span className="font-semibold">
                      {cuotas} cuotas de ${(precio / cuotas).toFixed(2)}
                    </span>
                  ) : null}
                </div>
                {/* Agregamos el mapeo de colores aquí */}
                <div className="flex flex-row gap-2">
                  {colores.map((color, index) => (
                    <button
                      key={index}
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: color }}
                    ></button>
                  ))}
                </div>
                <span className="text-xs">
                  Modelo:183 cm de altura y talla XL
                </span>
              </div>
              <div>
                <Input
                  className="w-2/4"
                  variant="underlined"
                  label="CANTIDAD"
                />
              </div>
              <div className="flex justify-center mt-3">
                <Button className="mx-auto">AÑADIR AL CARRITO</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardInspect;

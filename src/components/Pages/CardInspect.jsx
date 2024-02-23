import React from "react";
import Accordion from "../UI/Accordion";
import Button from "../UI/Button";
import Select from "../UI/SelectUI";
import DescriptionCard from "../Cards/DescriptionCard"


const CardInspect = ({ titulo, img, precio, colores }) => {
  return (
    <section className="mb-48 mt-2 animate__animated animate__fadeIn">
      <div className="flex flex-col md:flex-row gap-5 items-center max-w-[380px] md:max-w-[1020px]">
        <div className="flex flex-row gap-5  md:flex-col md:h-[410px]">
          <button>
            <img src={img} alt={titulo} className="w-12 md:w-16" />
          </button>
          <button>
            <img src={img} alt={titulo} className="w-12 md:w-16" />
          </button>
          <button>
            <img src={img} alt={titulo} className="w-12 md:w-16 " />
          </button>
          <button>
            <img src={img} alt={titulo} className="w-12 md:w-16" />
          </button>
        </div>
        <div className="text center md:mt-20">
          <img src={img} alt="" className="w-[370px] h-[490px] object-cover" />
        </div>
        <div className="w-[300px] text-left">
          <div className="flex flex-col gap-2 h-[420px]">
            <h1 className="text-3xl font-bold">{titulo}</h1>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-xl">${precio}</p>
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
              <button className="underline text-left">Ver medidas</button>
            </div>
            <div>
              <Select />
            </div>
            <Accordion title="COMPOSICION Y CUIDADOS">
              <DescriptionCard/>
            </Accordion>
            <Button className="py-2">AÑADIR AL CARRITO</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardInspect;

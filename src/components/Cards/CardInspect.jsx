import { React } from "react";
import Button from "../ComponentsUI/Button";
import ButtonSize from "../ComponentsUI/ButtonSize";
import AccordionCard from "../ComponentsUI/AccordionCard";
import BreadCumbs from "../UI/BreadCumbs";

const CardInspect = ({ titulo, img, precio, cuotas, colores, descripcion }) => {
  return (
    <section className="animate__animated animate__fadeIn text-white mt-20">
      <div className="bg-[#060606] rounded-md p-1">
        <div className="flex flex-col lg:flex-row gap-5">
          <div>
            <img
              src={img}
              alt={titulo}
              loading="lazy"
              className="w-[100%] h-[100%] md:w-[100%] md:h-[100%] object-cover"
            />
          </div>
          <div className="text-left">
            <div className="flex flex-col gap-2 h-[760px] md:h-[800px] lg:w-[600px]">
              <div className="flex justify-between items-baseline">
                <h1 className="text-3xl font-extrabold pt-3">{titulo}</h1>
                <BreadCumbs />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-10 justify-between">
                  <p className="font-bold text-2xl">${precio}</p>
                  {cuotas ? (
                    <span className="font-bold text-md text-blue-500">
                      {cuotas} Cuotas de ${(precio / cuotas).toFixed(2)}
                    </span>
                  ) : null}
                </div>
                <div className="flex gap-4 items-center">
                  <p>TALLE:</p>
                  <ButtonSize
                    className={
                      "border rounded-lg font-extrabold gap-2 px-2 flex flex-wrap"
                    }
                  />
                </div>
                <div className="flex justify-center mt-3">
                  <Button className="mx-auto py-2 px-40 bg-lime-500 text-black font-bold hover:bg-lime-600">
                    AÑADIR AL CARRITO
                  </Button>
                </div>
              </div>
              <AccordionCard />
              <div className="mt-4">
                <h2 className="text-sm font-bold">
                  MEDIDAS EN CENTIMETROS(cm)(APROXIMADAS DE REFERENCIA)
                </h2>
                <div className="text-sm mt-2 flex flex-col gap-1">
                  <p>Talle 38: cintura: 39cm - largo:100cm - botamanga: 21cm</p>
                  <p>Talle 40: cintura: 41cm - largo:101cm - botamanga: 22cm</p>
                  <p>Talle 42: cintura: 43cm - largo:102cm - botamanga: 23cm</p>
                  <p>Talle 44: cintura: 46cm - largo:103cm - botamanga: 24cm</p>
                  <p>Talle 46: cintura: 47cm - largo:104cm - botamanga: 25cm</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-blue-500 font-extrabold mt-2">
                    El modelo mide 1,75 cm de altura y es talle XL
                  </span>
                  <span className="text-sm font-extrabold">
                    (Las medidas son tomadas de punta a punta)
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <span className="font-bold text-sm">
                  ESTE PRODUCTO TIENE UNICAMENTE CAMBIO POR TALLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardInspect;

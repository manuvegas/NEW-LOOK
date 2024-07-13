import React from "react";

const Cambios = () => {
  return (
    <div className=" mt-28 mb-5 custom-shadow text-white p-6 rounded-lg max-w-sm sm:max-w-xl md:max-w-3xl mx-auto   animate__animated animate__fadeIn">
      <div className="mb-5">
        <h1 className="text-white text-2xl text-center font font-extrabold">
          CAMBIOS Y DEVOLUCIONES
        </h1>
      </div>
      <div className="">
        <h2 className="text-lg font-bold ">CAMBIOS POR TALLE</h2>
        <p className="font-base text-md py-1">
          Si el talle no era el indicado, podés realizar el cambio del mismo
          dentro de los 3 días habiles siguientes de haber recibido el paquete y
          tiene una demora de 6 dias habiles de despacho . Las prendas deben
          estar en el mismo estado en que fueron despachadas: con su packaging
          correspondientes.
        </p>
        <p className="font-base text-md py-1">
          Los cambios son por envio escribinos por
          <span className="text-green-500 font-bold"> Whatsapp </span>
          informándonos tu CAMBIO, tu nro de orden, la prenda que deseas cambiar
          y el talle que deseas obtener. Te indicaremos qué tenés que hacer para
          enviarlo. El costo de los envíos correrá por cuenta del cliente.
        </p>
        <p className="font-base text-md py-1">
          Para evitar situaciones de cambios por talles, todas las prendas
          tienen una tabla de talle con sus medidas en la descripción del
          producto, te pedimos tengas en cuenta esto a la hora de elegirlos. Si
          aún tenés dudas, podes comunicarte con nosotros por
          <span className="text-green-500 font-bold"> Whatsapp</span> para una
          comunicación mas rápida
          <span className="font-extrabold text-blue-600">(011) 3062-1331</span>
          .El horario de atención es de Lunes a Viernes de 12 a 17hs.
        </p>
        <p className="font-base text-md py-1 font-bold text-center text-red-700 my-5">
          Modelos que tenga indicado en su nombre "DESCONTINUO " no tienen
          cambio por talle ni por modelo !!!
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold ">DEVOLUCIONES</h2>
        <p className="font-base text-md py-1">
          Nuestros productos por el momento no tienen devolución, dada la
          infraestructura del emprendimiento, consideramos que aceptan las
          politicas de compra dada todas estas normas.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-bold">ACLARACION</h2>
        <p className="font-base text-md py-1">
          Si no esta de acuerdo con estas normas abstenerce de realizar la
          compra.
        </p>
      </div>
    </div>
  );
};

export default Cambios;

import React from "react";

const ComoComprar = () => {
  return (
    <section className="pt-32 pb-28">
      <div className="bg-[#060606] text-white p-6 rounded-lg max-w-sm sm:max-w-xl mx-auto shadow-lg  animate__animated animate__fadeIn">
        <div className="mb-5">
          <h1 className="font-bold text-lg text-center">COMO COMPRAR</h1>
        </div>
        <div className="flex flex-col gap-4">
          <ol className="">
            <li>Elige el producto que deseas comprar.</li>
            <li>
              Haz clic en el botón de "Agregar al carrito". Esto agregará el
              producto a tu carrito y te llevará al mismo.
            </li>
            <li>
              Puedes seguir agregando otros productos al carrito o sino haz clic
              en "Iniciar Compra".
            </li>
            <li>Completa tus datos de contacto y haz clic en "Continuar".</li>
            <li>
              Ingresa la dirección a donde deseas recibir el producto. Luego haz
              clic en "Continuar".
            </li>
            <li>
              Elige el medio de pago.Una vez que hayas elegido el medio de pago,
              haz clic en "Continuar".
            </li>
            <li>
              Finalmente en la página de Confirmación de compra puedes revisar
              toda la información de la compra. Luego haz clic en "Continuar".
            </li>
            <li>
              Ahí serás redirigido a otra pantalla para que completes los datos
              sobre la forma de pago elegida. Después de confirmar la compra
              recibirás un correo de nuestra parte, ese no será un comprobante
              de pago.
            </li>
            <li>
              Una vez acreditado el pago, haremos el envío correspondiente de
              los productos que hayas comprado.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ComoComprar;

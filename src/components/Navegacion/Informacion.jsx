import {React,useEffect} from "react";
import "./Navegacion.css";
import { useLocation } from "react-router-dom";

const Informacion = () => {
  const location = useLocation();

  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual
  return (
    <section className="sectionInfo">
      <div>
        <h1 className="titulos">INFORMACION</h1>
      </div>
      <div className="divInfo">
        <h2 className="tituloInfo">COMO COMPRAR</h2>
        <p className="textoInfo">
          <b className="opcionesInfo">1-TARJETA DE CRÉDITO Y DÉBITO:</b>Podés
          abonar de forma segura con todas las tarjetas a través Mercado Pago.
          Tenemos 3 cuotas sin interés.
        </p>
        <p className="textoInfo">
          <b className="opcionesInfo">2-TRANSFERENCIA:</b>El pago por
          transferencia bancaria también es válido y cuenta con un 10% de
          descuento, el descuento se aplica automáticamente seleccionando el
          método de pago. Es importante que una vez realizada la transferencia
          nos envíes al mail el comprobante con el nombre al que esta hecha la
          transferencia y el nro de tu pedido. Las compras que no estén abonadas
          serán canceladas a las 24hs sin excepción.
        </p>
        <p className="textoInfo">
          <b className="opcionesInfo">3-EFECTIVO:</b>Podes abonar en efectivo a
          través de mercado pago con la opción "pago fácil o rapipago".
        </p>
      </div>
      <div className="divInfo">
        <h2 className="tituloInfo">ENVIOS</h2>
        <p className="textoInfo">
          Realizamos envíos a todo el país por los siguientes medios: Correo
          Argentino y Epick. Para saber el costo sólo hay que colocar el código
          postal en la calculadora de envios que aparece ingresando a los
          productos o en el carrito de compras.
          <i>
            IMPORTANTE !! : LAS FECHA DE ENTREGA QUE FIGURAN AL MOMENTO DE
            COLOCAR TU CÓDIGO POSTAL ES UN ESTIMADO NO ES LA FECHA EXACTA.
          </i>
        </p>
        <h4 className="tituloTexto">EPICK</h4>
        <p className="textoInfo">
          Las entregas son de lunes a viernes hábiles, los horarios de entrega
          son de 8:00 a 20:00 hs, no coordinamos horarios específicos. Recibirás
          un email el mismo día de su visita para avisarte en qué rango horario
          pasaran, si no se encuentra nadie volveran a visitarte dentro de los
          próximos 3 días hábiles, si no logran encontrarte en ninguna de las 2
          visitas, devolveran tu paquete al domicilio de origen (desde donde fue
          enviado), sin devolución de dinero. Desde la web de epick podrás
          conocer el estado de tu envío ingresando el codigo que se le asigna a
          tu pedido que se te envia por mail. Pedimos estar atentos al mail e
          ingresarlo correctamente ya que por este medio se te enviara todo lo
          correspondiente a tu envio y los avisos de visita como se mensiona mas
          arriba.
        </p>
        <h4 className="tituloTexto">CORREO ARGENTINO</h4>
        <p className="textoInfo">
          Despachamos todos los dias (habiles), las entregas se realizan de
          lunes a viernes dentro de la banda horaria de 9 a 18 hs. Una vez
          despachada tu compra se te mandara al mail los datos del envio para
          que puedas realizar el seguimiento del mismo desde la pagina del
          correo (pedimos estar atentos al mail e ingresarlo correctamente)
        </p>
        <li className="liInfo">
          <i>A DOMICILIO:</i> Se enviara exclusivamente a la direccion que
          ingreses en "envio", por esto pedimos prestar atencion al ingresar la
          direccion ya que no nos haremos cargo si se ingresa algun dato
          erroneo. Tener en cuenta que se establece un tiempo de 5 días hábiles
          de llegada (puede ser mas o menos dependiendo la distancia, y la
          demora que presente correo argentino), ellos son los encargados de
          manejar los tiempos y horarios de entrega una vez despachados los
          pedidos (no se puede definir ni elegir horarios de entraga), por esto
          mismo pedimos estar atentos al seguimiento desde el momento en el que
          se manda el codigo. Si no hay nadie en el domicilio al momento de la
          entrega, el pedido será enviado a la sucursal de correo argentino mas
          cercana a tu localidad y tendrás una semana para retirarlo por la
          misma con DNI y el codigo de seguimiento, de lo contrario nos será
          devuelto y el cargo del reenvió correrá a cargo del cliente.
        </li>
        <li className="liInfo">
          <i>A SUCURSAL:</i> Es importante ingresar la sucursal a la que queres
          que te enviemos el pedido, de lo contrario se enviara por defecto a la
          sucursal de la localidad que ingreses.Tener en cuenta que se establece
          un tiempo de 5 días hábiles de llegada (puede ser mas o menos
          dependiendo la distancia, y la demora que presente correo argentino),
          por esto mismo pedimos estar atentos al seguimiento desde el momento
          en el que se manda el codigo, ya que tendrás una semana para retirarlo
          por la sucursal elegida. Cuando al revisar el código el mismo diga “EN
          ESPERA EN SUCURSAL” ya esta disponible para retirar, se retira
          presentando dni (de la persona a la que esta a nombre el pedido) y
          codigo de seguimiento, para retirar otra persona es necesario permiso
          y copia de dni de la persona titular del envio . Si pasado los 7 dias
          habiles el pedido no es retirado por la sucursal, el pedido nos será
          devuelto y el cargo del reenvió correrá a cargo del cliente.
        </li>
      </div>
      <div className="divInfo">
        <h2 className="tituloInfo">CUIDA TUS PRENDAS</h2>
        <li className="liInfo">
          RECOMENDAMOS PARA PRESERVARLAS CORRECTAMENTE:
        </li>
        <li className="liInfo">
          LAVAR TODAS LAS PRENDAS A MANO, CON AGUA FRÍA, DEL REVÉS Y CON COLORES
          SIMILARES.
        </li>
        <li className="liInfo">
          EN CASO DE LAVAR A MÁQUINA HACERLO CON UN LAVADO CORTO / RÁPIDO.
        </li>
        <li className="liInfo">NO USAR QUITAMANCHAS, LAVANDINA O CLORO.</li>
        <li className="liInfo">
          SECAR A LA SOMBRA Y DEL REVÉS PARA EVITAR PERDER EL COLOR DE LA TELA.
        </li>
        <li className="liInfo">CENTRIFUGADO CORTO. EVITAR SECADORA.</li>
        <li className="liInfo">PLANCHAR DEL REVÉS A TEMPERATURA MEDIA. </li>
        <li className="liInfo">NO PLANCHAR SOBRE LA ESTAMPA.</li>
      </div>
    </section>
  );
};

export default Informacion;

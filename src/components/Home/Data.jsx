import { FaTruck } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { BsBank2 } from "react-icons/bs";
import "./Data.css"

const Data = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="carruselInicio">
            <div className="iconosCarrusel">
              <FaTruck size={30} />
            </div>
            <div className="divData">
              <p>ENVIOS GRATIS A TODO EL PAIS</p>
              <span>
              PARA COMPRAS SUPERIORES A $60.000!
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="carruselInicio">
            <div className="iconosCarrusel">
              <CiCreditCard1 size={30} />
            </div>
            <div className="divData">
              <p>3 CUOTAS SIN INTERES</p>
              <span>
                TODOS LOS MEDIOS DE PAGO 3 CUOTAS SIN INTERES!
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="carruselInicio">
            <div className="iconosCarrusel">
              <BsBank2 size={30} />
            </div>
            <div className="divData">
              <p>15% OFF</p>
              <span>TRANSFERENCIA BANCARIA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

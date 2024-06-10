import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../UI/accordion";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import { LiaStoreAltSolid } from "react-icons/lia";

const AccordionCard = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className={"text-sm"}>
          <div className="flex items-center gap-2">
            <CiCreditCard1 size={20} />
            MEDIOS DE PAGO
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div>
            <button>
              <span className=" text-lime-500">
                6 cuotas sin interés de $8.316,67
              </span>
            </button>
            <p>35% de descuento pagando con Transferencia</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className={"text-sm"}>
          <div className="flex items-center gap-2">
            <CiDeliveryTruck size={20} />
            MEDIOS DE ENVIO
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p>pepe</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className={"text-sm"}>
          <div className="flex items-center gap-2">
            <LiaStoreAltSolid size={20} />
            NUESTRO LOCAL
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p>NewLook - Solo Retiros - Parque Avellaneda - CABA - 8 a 16hs</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCard;

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const AccordionUI = ({ children, title, color }) => {
  const titleStyle = {
    color: color || "white", // Si no se proporciona un color, se usa blanco por defecto
  };

  return (
    <div>
      <Accordion className="w-[300px] border text-white">
        <AccordionItem key="1" title={<span style={titleStyle}>{title}</span>}>
          {children}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionUI;

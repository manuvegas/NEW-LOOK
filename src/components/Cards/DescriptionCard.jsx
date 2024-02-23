import React from "react";
import { MdIron } from "react-icons/md";
import { TbBleachOff } from "react-icons/tb";
import { BiSolidDryer } from "react-icons/bi";
import { TbWashDrycleanOff } from "react-icons/tb";
import { GiWashingMachine } from "react-icons/gi";

const DescriptionCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold underline">Composicion</h3>
      <span className="text-sm lg:text-md">Externo 100% algodón,al menos el 50% de algodón reciclado</span>
      <h3 className="font-semibold underline">Cuidados</h3>
      <div className="flex flex-col gap-3 text-sm">
        <span className="flex gap-1 text-xs lg:text-md">
          <GiWashingMachine size={20}/> LAVAR A MÁQUINA HASTA 30ºC/86ºF CICLO SUAVE
        </span>
        <span className="flex gap-1 text-xs lg:text-md">
          <TbBleachOff size={20}/>
          NO USA BLANQUEADOR
        </span>
        <span className="flex gap-1 text-xs lg:text-md">
          <MdIron size={20}/>
          PLANCHAR HASTA 110ºC/230ºF
        </span>
        <span className="flex gap-1 text-xs lg:text-md">
          <TbWashDrycleanOff size={20}/> NO LAVAR EN SECO
        </span>
        <span className="flex gap-1 text-xs lg:text-md">
          <BiSolidDryer size={20}/>
          NO SECAR EN SECADORA
        </span>
      </div>
    </div>
  );
};

export default DescriptionCard;

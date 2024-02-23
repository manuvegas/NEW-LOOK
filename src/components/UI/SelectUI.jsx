import React from "react";
import { Select, SelectItem} from "@nextui-org/react";

const SelectUI = () => {
  const talles = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];
  return (
    <div>
      <Select label="TALLES"  className="max-w-xs" style={{background: "rgb(1,1,1)"}}>
        {talles.map((talle) => (
          <SelectItem key={talle.value} value={talle.value} color="primary" className="text-black" >
            {talle.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectUI;

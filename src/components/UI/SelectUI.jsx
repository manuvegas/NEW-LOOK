import React from "react";
import { Select, SelectItem, spacingScaleKeys } from "@nextui-org/react";

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
      <Select
        label={<span className="text-white">TALLES</span>}
        className="max-w-xs"
        style={{ background: "rgb(5,5,5)" }}
      >
        {talles.map((talle) => (
          <SelectItem key={talle.value} value={talle.value} color="primary">
            {talle.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectUI;

import React from "react";
import { Input } from "@nextui-org/react";

const InputUI = ({
  children,
  className,
  variant,
  type,
  label,
  id,
  onChange,
  placeholder,
}) => {
  return (
    <Input
      type={type}
      variant={variant}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      className={className}
      label={<span className={"text-white"}>{label}</span>}
    >
      {children}
    </Input>
  );
};

export default InputUI;

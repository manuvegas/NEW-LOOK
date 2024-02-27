import React from "react";
import { Textarea } from "@nextui-org/react";

const TextAreaUI = ({ className, placeholder, variant, label, id, name }) => {
  return (
    <Textarea
      className={className}
      placeholder={placeholder}
      variant={variant}
      name={name}
      id={id}
      required
      label={label}
    />
  );
};

export default TextAreaUI;

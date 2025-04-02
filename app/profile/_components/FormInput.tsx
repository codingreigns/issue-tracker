import { TextField } from "@radix-ui/themes";
import React from "react";

interface Props {
  name: string;
  type: "text" | "number";
  //   label?: string;
  placeholder: string;
  defaultValue?: string | number | undefined;
  size?: "1" | "2" | "3";
}

const FormInput = (props: Props) => {
  const { name, type, placeholder, defaultValue, size } = props;
  return (
    <TextField.Root
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      size={size}
    />
  );
};

export default FormInput;

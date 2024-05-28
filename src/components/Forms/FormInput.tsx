"use client";

import { getErrorMessageBypPropertyName } from "@/utils/schema-validatior";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessages = getErrorMessageBypPropertyName(errors, name);
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              placeholder={placeholder}
              size={size}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              placeholder={placeholder}
              size={size}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small style={{ color: "red" }}>{errorMessages}</small>
    </>
  );
};

export default FormInput;

"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
const { TextArea } = Input;
interface IInput {
  name: string;
  rows?: number;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
}

const FormTextArea = ({
  name,
  rows,
  size,
  value,
  placeholder,
  label,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextArea
            size={size}
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </>
  );
};

export default FormTextArea;

"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldOptions = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  defaultValue?: SelectOptions;
  placeholder?: string;
};

const FormSelectField = ({
  name,
  size,
  value,
  label,
  options,
  defaultValue,
  placeholder,
}: SelectFieldOptions) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;

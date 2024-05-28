"use client";

import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

type UMDatePickerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string | string[] | null) => void;
  name: string;
  value?: Dayjs;
  label?: string;
  size?: "large" | "small";
};

const FormDatePicker = ({
  name,
  value,
  label,
  size,
  onChange,
}: UMDatePickerProps) => {
  const { control, setValue } = useFormContext();
  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };
  return (
    <>
      {label ? label : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            size={size}
            defaultValue={dayjs(field.value) || null}
            onChange={handleOnChange}
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
